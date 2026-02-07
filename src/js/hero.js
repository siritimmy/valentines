import { config } from "../data/config.js";

export function initHero() {
  const section = document.getElementById("hero");

  section.innerHTML = `
    <div class="hero__content">
      <div class="hero__heart" aria-hidden="true">&#10084;</div>
      <h1 class="hero__title">${config.heroTitle}</h1>
      <p class="hero__subtitle">${config.heroSubtitle}</p>
      <a href="#timeline" class="hero__scroll">
        <span>Scroll down</span>
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </a>
    </div>
  `;
}
