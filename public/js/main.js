function backToTop() {
    let button = document.querySelector(".backToTop");
    button.onclick = () => {
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000)
    }
}
