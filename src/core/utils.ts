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