function resizeMainHeight() {
    const footerHeight = document.querySelector('footer').offsetHeight;
    const mainMarginBottom = `${footerHeight}px`;
    console.log(mainMarginBottom)
    document.querySelector('main').style.marginBottom = mainMarginBottom;
}

window.addEventListener('load', resizeMainHeight);
window.addEventListener('resize', resizeMainHeight);
