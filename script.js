const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Reveals content as sections enter the viewport.
const revealTargets = document.querySelectorAll(
  ".about-grid, .timeline-item, .skill-card, .education-card, .course-list span, .language-line, .contact-inner"
);
revealTargets.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((item) => observer.observe(item));
} else {
  revealTargets.forEach((item) => item.classList.add("is-visible"));
}

// Add your real profile URLs here when ready. Empty values stay hidden.
const profiles = {
  github: "",
  linkedin: ""
};
const socialContainer = document.getElementById("social-links");
Object.entries(profiles).forEach(([network, url]) => {
  if (!url.trim()) return;
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = network === "github" ? "GitHub ↗" : "LinkedIn ↗";
  socialContainer.appendChild(link);
});
