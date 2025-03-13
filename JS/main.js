document.addEventListener("DOMContentLoaded", () => {
  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.innerHTML = document.body.classList.contains("dark-mode") 
          ? '<i class="fas fa-sun"></i>' 
          : '<i class="fas fa-moon"></i>';
  });

  // Menú Hamburguesa
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
  });

  // Traducción de idioma
  const languageToggle = document.getElementById("language-toggle");
  let currentLang = "es";

  const translations = {
      en: {
          "hero-title": "Hi, I'm <span>Martin Coria</span>",
          "hero-subtitle": "Junior Developer",
          "view-work-btn": "View My Work",
          "about-title": "About Me",
          "about-description": "I am a junior programmer in training with knowledge in web development...",
          "projects-title": "Featured Projects"
      },
      es: {
          "hero-title": "Hola, soy <span>Martin Coria</span>",
          "hero-subtitle": "Programador jr",
          "view-work-btn": "Ver mi trabajo",
          "about-title": "Sobre Mí",
          "about-description": "Soy un programador junior en formación con conocimientos en desarrollo web...",
          "projects-title": "Proyectos Destacados"
      },
      pt: {
          "hero-title": "Oi, sou <span>Martin Coria</span>",
          "hero-subtitle": "Programador júnior",
          "view-work-btn": "Veja Meu Trabalho",
          "about-title": "Sobre Mim",
          "about-description": "Sou um programador júnior em formação com conhecimentos em desenvolvimento web...",
          "projects-title": "Projetos em Destaque"
      }
  };

  languageToggle.addEventListener("click", () => {
      currentLang = currentLang === "es" ? "en" : currentLang === "en" ? "pt" : "es";
      languageToggle.innerHTML = currentLang === "es" ? '<i class="fas fa-globe"></i>' 
                             : currentLang === "en" ? '<i class="fas fa-flag-usa"></i>' 
                             : '<i class="fas fa-flag-br"></i>';
      for (const key in translations[currentLang]) {
          document.getElementById(key).innerHTML = translations[currentLang][key];
      }
  });
});
