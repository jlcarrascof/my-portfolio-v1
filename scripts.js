document.addEventListener("DOMContentLoaded", () => {
    const homeText = document.querySelector(".home h1");
    setTimeout(() => {
        homeText.style.opacity = "1";
        homeText.style.transform = "translateY(0)";
    }, 500);
    document.querySelector(".about").style.opacity = "0";
    document.querySelector(".about").style.transform = "translateY(20px)";
});

document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about");
    const skillsSection = document.querySelector(".skills");
    const position = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
        aboutSection.style.transition = "all 1s ease";
        document.querySelectorAll(".skill-fill").forEach((bar) => {
            bar.style.width = bar.getAttribute("style").split(":")[1];
        });
    }
});
