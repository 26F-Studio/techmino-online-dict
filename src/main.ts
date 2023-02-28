import "@/styles/main.scss";
import persist from "pinia-plugin-persist";
import App from "@/components/App.vue";
import {createPinia} from "pinia";

window.addEventListener('load', () => {
    const app = createApp({
        render: () => h(App)
    });

    const pinia = createPinia();
    pinia.use(persist);

    app.use(pinia);
    app.mount('#app');
});