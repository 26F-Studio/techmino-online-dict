import "@/styles/main.scss";
import {container, instance, pinia} from "@/core/client";
import persist from "pinia-plugin-persist";

window.addEventListener('load', () => {
    container.id = 'app';

    pinia.use(persist);
    instance.use(pinia);
    instance.mount(container);

    document.body.appendChild(container);
});