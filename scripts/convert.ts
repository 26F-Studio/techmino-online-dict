import { resolve } from 'node:path'
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { Expression, parse as parseLua, Statement } from 'luaparse'
import { get, has, trim } from 'lodash-es'
import { DictItem } from '../src/types/dict'

class Parser {
	protected variables: Record<string, unknown> = {
		CHAR: {
			mino: [
				'Z',
				'S',
				'J',
				'L',
				'T',
				'O',
				'I',
				'Z5',
				'S5',
				'P',
				'Q',
				'F',
				'E',
				'T5',
				'U',
				'V',
				'W',
				'X',
				'J5',
				'L5',
				'R',
				'Y',
				'N',
				'H',
				'I5',
				'I3',
				'C',
				'I2',
				'O1'
			].reduce((map, piece) => {
				map[piece] = `<i class='not-italic text-cyan-500 text-4xl mino ${piece}'></i>`
				return map
			}, {} as Record<string, string>)
		},
		FNNS: false
	}

	protected constructor() {
		//
	}

	protected _items: [string, string, string, string, string][] = []

	protected get items(): DictItem[] {
		return this._items.map(item => {
			return {
				title: this.processRaw(item[0], false),
				tags: this.processRaw(item[1], false)
					.split(' ')
					.filter(v => !!v),
				category: this.processRaw(item[2], false),
				content: this.processRaw(item[3], false),
				link: this.processRaw(item[4], false)
			}
		})
	}

	static parse(code: string) {
		const parser = new Parser()

		parseLua(code).body.forEach(statement => {
			parser.processStatement(statement)
		})

		parser._items.pop()
		return parser.items
	}

	protected processRaw(v: string, addQuote = true) {
		if (!v) {
			return ''
		}

		// 如果有引号则去掉引号
		v = trim(v, '\'"`')

		// 将 \ + 数字 的语法替换为字母
		for (const matches of Array.from(v.matchAll(/\\(\d+)/g))) {
			Array.from(matches).forEach(value => {
				v = v.replace(value[0], String.fromCharCode(parseInt(matches[1])))
			})
		}

		if (addQuote) {
			if (v[0] !== '"') {
				v = '`' + v
			}

			if (v[v.length - 1] !== '"') {
				v = v + '`'
			}
		}

		return v
	}

	protected processStatement(statement: Statement) {
		const that = this

		switch (statement.type) {
			case 'LocalStatement':
				// 保存变量

				statement.variables.forEach(function ({ name }, i) {
					const v = statement.init[i] as { raw: string }
					that.variables[name] = that.processRaw(v.raw)!
				})
				break
			case 'ReturnStatement':
				// 处理返回的子项

				statement.arguments.forEach(expression => {
					this.processExpression(expression)
				})
				break
			default:
				throw new Error(`Unknown statement: ${statement.type}`)
		}
	}

	protected processVariable(name: string) {
		if (!has(this.variables, name)) {
			return name
		}

		const content = get(this.variables, name)

		switch (typeof content) {
			case 'object':
				// 返回变量名

				return name
			case 'function':
				// 返回执行结果

				return content()
			default:
				// 返回变量内容

				return content
		}
	}

	protected wrapTableOrProcessExpression(expression: Expression) {
		const result = this.processExpression(expression, {
			rawAddQuote: true
		})

		if (expression.type === 'TableConstructorExpression') {
			return `[${result}]`
		}

		return result
	}

	protected processExpression(
		expression: Expression,
		options: {
			forceReturnVariableName?: boolean
			rawAddQuote?: boolean
		} = {}
	) {
		const that = this
		const temp: string[] = []

		switch (expression.type) {
			case 'TableConstructorExpression':
				// 返回处理后的所有的子项

				expression.fields.forEach(field => {
					temp.push(that.processExpression(field.value) as string)
				})

				if (temp.length > 0) {
					this._items.push(temp as (typeof this._items)[number])
				}

				return temp
			case 'BinaryExpression':
				// 返回拼接后的内容

				if (expression.operator === '..') {
					temp.push(
						that.processExpression(expression.left, {
							rawAddQuote: false
						}) as string
					)

					temp.push(
						that.processExpression(expression.right, {
							rawAddQuote: false
						}) as string
					)
				} else {
					throw new Error(`Unknown operator: ${expression.operator}`)
				}

				return this.processRaw(temp.join(''), true)
			case 'MemberExpression':
				// 返回拼接后的变量名

				temp.push(
					that.processExpression(expression.base, {
						forceReturnVariableName: true
					}) as string
				)

				temp.push(expression.indexer)

				temp.push(
					that.processExpression(expression.identifier, {
						forceReturnVariableName: true
					}) as string
				)

				return this.processVariable(temp.flat().join(''))
			case 'LogicalExpression':
				// 返回执行后的结果

				temp.push(that.processExpression(expression.left) as string)

				switch (expression.operator) {
					case 'and':
						temp.push('&&')
						break
					case 'or':
						temp.push('||')
						break
					default:
						throw new Error(`Unknown operator`)
				}

				temp.push(...(that.wrapTableOrProcessExpression(expression.right) as string[]))

				let code = temp.join(' ')
				return eval('() => ' + code)()
			case 'Identifier':
				// 返回变量内容 如为空则返回变量名

				if (!has(that.variables, expression.name) || options.forceReturnVariableName) {
					return expression.name
				}

				return this.processVariable(expression.name)
			case 'StringLiteral':
				// 返回处理后的字符串

				return that.processRaw(expression.raw, options.rawAddQuote ?? true)!
			case 'UnaryExpression':
				return !this.processExpression(expression.argument, options).toString()
			default:
				throw new Error(`Unknown expression: ${expression.type}`)
		}
	}
}

export default () => ({
	buildStart() {
		const base = resolve(__dirname, '../Game/parts/language/')
		const files = readdirSync(base)

		for (const file of files) {
			const filePath = resolve(base, file)

			if (file.startsWith('dict')) {
				const buffer = readFileSync(filePath)
				const code = buffer.toString()

				const items = Parser.parse(code).map(item => {
					item.id = createHash('sha1').update(JSON.stringify(item)).digest('hex')
					return item
				})

				writeFileSync(
					resolve(__dirname, '../src/dict', file.split('.')[0] + '.json'),
					JSON.stringify(items).replace(new RegExp('\\\\', 'g'), '\\')
				)
			}
		}
	}
})