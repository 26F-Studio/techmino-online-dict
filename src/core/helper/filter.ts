import {groupBy} from "lodash-es";
import {dicts} from "@/core/helper/locale";

export const search = ref<string>();

export const result = computed(() => {
    return groupBy(dicts.value.filter(item => {
        if (!search.value) {
            return true;
        }

        const searchValue: string = search.value.toLowerCase();

        return [
            !!item.title
                    ?.toLowerCase()
                    .match(searchValue),
            item.tags.map(tag => {
                return tag.toLowerCase();
            }).includes(searchValue)
        ].includes(true);
    }), 'category');
});