document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function() {
      navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  // Cargar el tema guardado en localStorage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
      body.classList.add(savedTheme);
      icon.classList.toggle("fa-moon", savedTheme === "dark-mode");
      icon.classList.toggle("fa-sun", savedTheme === "light-mode");
  }

  // Evento para cambiar el tema
  themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
      body.classList.toggle("light-mode");

      const newTheme = body.classList.contains("light-mode") ? "light-mode" : "dark-mode";
      localStorage.setItem("theme", newTheme);

      // Cambiar el ícono del botón
      icon.classList.toggle("fa-moon", newTheme === "dark-mode");
      icon.classList.toggle("fa-sun", newTheme === "light-mode");
  });
});



// Función para cambiar el idioma
const languageToggle = document.getElementById('language-toggle');
const elementsToTranslate = document.querySelectorAll('[data-es], [data-en]');

languageToggle.addEventListener('click', () => {
    const currentLanguage = languageToggle.innerText.trim();

    // Cambiar el idioma
    elementsToTranslate.forEach(element => {
        if (currentLanguage === 'EN') {
            // Cambiar al inglés
            element.innerText = element.getAttribute('data-en') || element.innerText;
        } else {
            // Cambiar al español
            element.innerText = element.getAttribute('data-es') || element.innerText;
        }
    });

    // Cambiar el texto del botón
    languageToggle.innerText = currentLanguage === 'EN' ? 'ES' : 'EN';
});
