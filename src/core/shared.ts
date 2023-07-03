import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persist'
import { createI18n } from 'vue-i18n'

export const pinia = createPinia().use(persist)

export const i18n = createI18n({
	locale: 'zh',
	legacy: false,

	messages: {
		en: {
			title: 'Techmino Online Dictionary',
			back: 'Back',
			search: 'Search',
			tags: 'Tags',
			copy_from: 'Copied from',
			error: 'Error',
			copied: 'Copied successfully!',
			maker: 'Created by'
		},
		ja: {
			title: 'Techmino オンライン辞書',
			back: '戻る',
			search: '検索',
			tags: 'タグ',
			copy_from: 'コピー元',
			error: 'エラー',
			copied: 'コピーしました！',
			maker: '作成者'
		},
		zh: {
			title: 'Techmino 在线词典',
			back: '返回',
			search: '搜点什么',
			tags: '标签',
			copy_from: '复制于',
			error: '出错了',
			copied: '复制成功!',
			maker: '制作者'
		},
		vi: {
			title: 'Techmino Từ điển trực tuyến',
			back: 'Quay lại',
			search: 'Tìm kiếm',
			tags: 'Thẻ',
			copy_from: 'Sao chép từ',
			error: 'Lỗi',
			copied: 'Sao chép thành công!',
			maker: 'Tạo bởi'
		}
	}
})

export const categoryColors: Record<string, string> = {
	help: '#fdba74',
	org: '#fbb741',
	game: '#14a3c7',
	term: '#ff7f7f',
	setup: '#94a3b8',
	pattern: '#bfdfa5',
	command: '#0284c7',
	english: '#2563eb',
	name: '#7a5299'
}