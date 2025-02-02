document.addEventListener("DOMContentLoaded", () => {
    const homeText = document.querySelector(".home h1");
    setTimeout(() => {
        homeText.style.opacity = "1";
        homeText.style.transform = "translateY(0)";
    }, 500);
    document.querySelector(".about").style.opacity = "0";
    document.querySelector(".about").style.transform = "translateY(20px)";
});
