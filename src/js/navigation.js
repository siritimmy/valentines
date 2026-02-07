const sections = [
  { id: "hero", label: "Home" },
  { id: "timeline", label: "Our Story" },
  { id: "countdown", label: "Countdown" },
];

export function initNavigation() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
    <ul class="nav__list">
      ${sections
        .map(
          (s) =>
            `<li><a href="#${s.id}" class="nav__link" data-section="${s.id}">${s.label}</a></li>`
        )
        .join("")}
    </ul>
  `;

  // Smooth scroll on click
  nav.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(link.dataset.section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Show/hide nav after scrolling past hero
  const hero = document.getElementById("hero");
  const navObserver = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle("nav--visible", !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  navObserver.observe(hero);

  // Active section tracking
  const sectionEls = sections.map((s) => document.getElementById(s.id));
  const links = nav.querySelectorAll(".nav__link");

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "nav__link--active",
              link.dataset.section === entry.target.id
            );
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sectionEls.forEach((el) => {
    if (el) activeObserver.observe(el);
  });
}
