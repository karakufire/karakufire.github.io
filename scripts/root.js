function resizeMainHeight() {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const mainMarginBottom = `calc(${footerHeight}px + 2em)`;
    console.log(mainMarginBottom)
    document.querySelector('main').style.marginBottom = mainMarginBottom;
}

window.addEventListener('load', resizeMainHeight);
window.addEventListener('resize', resizeMainHeight);
