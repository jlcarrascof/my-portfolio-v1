document.addEventListener("DOMContentLoaded", () => {
    const homeText = document.querySelector(".home h1");

    // Animation without setTimeout
    homeText.style.opacity = "1";
    homeText.style.transform = "translateY(0)";
    homeText.style.transition = "opacity 1s ease, transform 1s ease";
});
