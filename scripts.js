document.addEventListener("DOMContentLoaded", () => {
    // Animación del título principal
    const homeText = document.querySelector(".home h1");
    setTimeout(() => {
        homeText.style.opacity = "1";
        homeText.style.transform = "translateY(0)";
    }, 500);
});

// Animaciones al hacer scroll
document.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about");
    const skillsSection = document.querySelector(".skills");

    // Animación para la sección "Sobre mí"
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (aboutPosition < windowHeight - 100) {
        aboutSection.style.opacity = "1";
        aboutSection.style.transform = "translateY(0)";
    }

    // Animación para la sección "Habilidades"
    const skillsPosition = skillsSection.getBoundingClientRect().top;

    if (skillsPosition < windowHeight - 100) {
        skillsSection.style.opacity = "1";
        skillsSection.style.transform = "translateY(0)";

        // Animar las barras de habilidades
        document.querySelectorAll(".skill-fill").forEach((bar) => {
            const width = bar.getAttribute("data-width"); // Leer el ancho desde el atributo personalizado
            bar.style.width = width; // Aplicar el ancho
        });
    }
});
