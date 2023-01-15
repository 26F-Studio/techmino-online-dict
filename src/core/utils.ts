export const isMobile = (() => {
    const reference = ref();

    function update() {
        reference.value = screen.width < 640;
    }

    update();
    window.addEventListener('resize', update);

    return reference;
})();