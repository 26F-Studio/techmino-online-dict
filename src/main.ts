import "@/styles/main.scss";
import App from "@/components/App.vue";

const container = document.createElement('div');
container.id = 'app';

createApp(App).mount(container)
document.body.appendChild(container);
