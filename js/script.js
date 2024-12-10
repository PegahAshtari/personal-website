window.onscroll = function () {
    let scrollToTopBtn = document.getElementById("scrollToTop");

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add("visible");

    } else {
        scrollToTopBtn.classList.remove("visible");
    }
};

document.getElementById("scrollToTop").addEventListener("click", function () {
    document.getElementById("top-view").scrollIntoView({
        behavior: "smooth"
    });
});