import {createDiscreteApi} from "naive-ui";
import {useClipboard} from "@vueuse/core";
import {useAppStore} from "@/core/stores";
import {pinia} from "@/core/client";

export const isMobile = (() => {
    const reference = ref();

    function update() {
        reference.value = screen.width < 640;
    }

    update();
    window.addEventListener('resize', update);

    return reference;
})();

export function preg_replace_callback<T extends string>(v: T, p: RegExp, cb: (m: RegExpMatchArray) => T) {
    const matches = v.matchAll(p);

    Array.from(matches).forEach(value => {
        const replacement = cb(value);
        v = v.replace(value[0], replacement) as T;
    });

    return v;
}

export async function copy(source: string) {
    const appStore = useAppStore(pinia);

    const {message, unmount} = createDiscreteApi(['message'], {
        configProviderProps: {
            theme: appStore.themeRef
        }
    });

    const {copy, isSupported} = useClipboard({
        source, legacy: true
    });

    if (!isSupported) {
        message.error(appStore.translations['error'], {
            onAfterLeave() {
                unmount();
            }
        });

        return;
    }

    await copy();
    message.success(appStore.translations['copied'], {
        onAfterLeave() {
            unmount();
        }
    });
}