import App from "@/components/App.vue";
import {createPinia} from "pinia";

export const container = document.createElement('div');

export const instance = createApp({
    render: () => h(App)
});

export const pinia = createPinia();


