import 'uno.css'
import '@/styles/char.scss'

import App from '@/components/App.vue'
import { i18n, pinia } from '@/core/shared'

const app = createApp({
	render: () => h(App)
})

app.use(pinia)
app.use(i18n)

app.mount('#app')