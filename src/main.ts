import '@/styles/main.scss'
import App from '@/components/App.vue'
import { i18n, pinia } from '@/core/shared'

window.addEventListener('load', () => {
    const app = createApp({
        render: () => h(App)
    })

    app.use(pinia)
    app.use(i18n)

    app.mount('#app')
})