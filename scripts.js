document.addEventListener("DOMContentLoaded", () => {
    const homeText = document.querySelector(".home h1");
    homeText.style.opacity = "0";
    homeText.style.transform = "translateY(20px)";

    setTimeout(() => {
        homeText.style.opacity = "1";
        homeText.style.transform = "translateY(0)";
        homeText.style.transition = "all 1s ease";
    }, 500);
});
