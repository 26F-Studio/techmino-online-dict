import {useWindowSize} from "@vueuse/core";
import {AvailableLangCodes} from "@/types/shared";

export const languages: AvailableLangCodes[] = ['zh', 'en', 'ja'];
export const isMobile = computed(() => {
    const {width} = useWindowSize();
    return width.value < 640;
});

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
};