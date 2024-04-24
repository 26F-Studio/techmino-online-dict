// @ts-nocheck

import { DictItem } from '@/types/dict'
import { Expression, Identifier, parse as parseLua, Statement } from 'luaparse'
import { createHash } from 'node:crypto'
import { copyFileSync, existsSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

class Parser {
	protected _variables = {
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
			}, {} as Record<string, string>),
			icon: [
				'checkMark',
				'crossMark'
			].reduce((map, name) => {
				map[name] = `<i class='not-italic text-cyan-500 text-4xl icon ${name}'></i>`
				return map
			}, {} as Record<string, string>)
		},
		FNNS: false
	} satisfies Record<string, unknown>

	protected _functions = {
		// https://github.com/26F-Studio/Techmino/blob/main/parts/language/dict_vi.lua#L2
		replaceCheckCrossMark: (str: string) => {
			return str.replace(/\$1/g, this._variables.CHAR.icon.checkMark).replace(/\$2/g, this._variables.CHAR.icon.crossMark)
		}
	} satisfies Record<string, Function>

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

		const leadingPattern = /^\[\[/g
		const trailingPattern = /]]$/g

		if (leadingPattern.test(v) && trailingPattern.test(v)) {
			v = v.replace(leadingPattern, '').replace(trailingPattern, '').trim()
		}

		// 如果有引号则去掉引号
		v = v.replace(/^(\s?)['"`](\s?)/g, '').replace(/(\s?)['"`](\s?)$/g, '')

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
		switch (statement.type) {
			case 'LocalStatement':
				// 保存变量

				statement.variables.forEach(({ name }, i) => {
					const v = statement.init[i] as { raw: string }
					this._variables[name] = this.processRaw(v.raw)!
				})
				break
			case 'ReturnStatement':
				// 处理返回的子项

				statement.arguments.forEach(expression => {
					this.processExpression(expression)
				})
				break
			case 'FunctionDeclaration':
				const functionName = (statement.identifier as Identifier).name

				if (!Object.keys(this._functions).includes(functionName)) {
					throw new Error(`没有名为 ${functionName} 的函数`)
				}
				break
			default:
				throw new Error(`Unknown statement: ${statement.type}`)
		}
	}

	protected processVariable(name: string) {
		if (!Object.keys(this._variables).includes(name)) {
			return name
		}

		const content = this._variables[name]

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
		const temp: string[] = []

		switch (expression.type) {
			case 'TableConstructorExpression':
				// 返回处理后的所有的子项

				expression.fields.forEach(field => {
					temp.push(this.processExpression(field.value) as string)
				})

				if (temp.length > 0) {
					this._items.push(temp as (typeof this._items)[number])
				}

				return temp
			case 'BinaryExpression':
				// 返回拼接后的内容

				if (expression.operator === '..') {
					temp.push(
						this.processExpression(expression.left, {
							rawAddQuote: false
						}) as string
					)

					temp.push(
						this.processExpression(expression.right, {
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
					this.processExpression(expression.base, {
						forceReturnVariableName: true
					}) as string
				)

				temp.push(expression.indexer)

				temp.push(
					this.processExpression(expression.identifier, {
						forceReturnVariableName: true
					}) as string
				)

				return this.processVariable(temp.flat().join(''))
			case 'LogicalExpression':
				// 返回执行后的结果

				temp.push(this.processExpression(expression.left) as string)

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

				temp.push(...(this.wrapTableOrProcessExpression(expression.right) as string[]))

				let code = temp.join(' ')
					.replace(/\\(\s?)"/g, '\\"')

				return eval('() => ' + code)()
			case 'Identifier':
				// 返回变量内容 如为空则返回变量名

				if (!Object.keys(this._variables).includes(expression.name) || options.forceReturnVariableName) {
					return expression.name
				}

				return this.processVariable(expression.name)
			case 'StringLiteral':
				// 返回处理后的字符串

				return this.processRaw(expression.raw, options.rawAddQuote ?? true)!
			case 'UnaryExpression':
				return !this.processExpression(expression.argument, options).toString()
			case 'StringCallExpression':
				const functionName = (expression.base as Identifier).name
				const result = this.processExpression(expression.argument)
				return functionName in this._functions ? this._functions[functionName](result) : result
			default:
				throw new Error(`Unknown expression: ${expression.type}`)
		}
	}
}

export default () => ({
	buildStart() {
		// 复制字体

		const target = resolve(__dirname, '../fonts/proportional.otf')

		if (existsSync(target)) {
			unlinkSync(target)
		}

		copyFileSync(resolve(__dirname, '../../Game/parts/fonts/proportional.otf'), target)

		// 处理词典

		const base = resolve(__dirname, '../../Game/parts/language/')
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
					resolve(__dirname, '../dict', file.split('.')[0] + '.json'),
					JSON.stringify(items).replace(new RegExp('\\\\', 'g'), '\\')
				)
			}
		}
	}
})