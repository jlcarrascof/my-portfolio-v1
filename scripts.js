document.addEventListener("DOMContentLoaded", () => {
    // Animación para el título principal (h1)
    const homeText = document.querySelector(".home h1");
    homeText.style.opacity = "1";
    homeText.style.transform = "translateY(0)";
    homeText.style.transition = "opacity 1s ease, transform 1s ease";

    // Animación para el subtítulo
    const subtitle = document.querySelector(".subtitle");
    subtitle.style.opacity = "1";
    subtitle.style.transform = "translateY(0)";
    subtitle.style.transition = "opacity 1s ease 0.5s, transform 1s ease 0.5s"; // Retraso de 0.5s
});
