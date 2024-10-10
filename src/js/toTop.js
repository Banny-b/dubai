document.addEventListener("scroll", function() {
    const scrollTopButton = document.querySelector(".to-top");
    if (window.scrollY > 400) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
});