// Sélectionne toutes les sections à animer
const sections = document.querySelectorAll('.fade-section, .section-zoom');

// Création de l’observateur
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

// Observe chaque section
sections.forEach(section => {
  observer.observe(section);
});
