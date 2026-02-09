import { config } from "./data/config.js";

// Styles
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/hero.css";
import "./styles/timeline.css";
import "./styles/countdown.css";
import "./styles/puzzle.css";
import "./styles/animations.css";

// Modules
import { initNavigation } from "./js/navigation.js";
import { initHero } from "./js/hero.js";
import { initTimeline } from "./js/timeline.js";
import { initCountdown } from "./js/countdown.js";
import { initPuzzle } from "./js/puzzle.js";
import { initFloatingHearts, initScrollReveal } from "./js/animations.js";

// Apply theme color overrides from config
function applyTheme() {
  const root = document.documentElement;
  const t = config.theme;
  if (t.primaryColor) root.style.setProperty("--color-primary", t.primaryColor);
  if (t.secondaryColor)
    root.style.setProperty("--color-secondary", t.secondaryColor);
  if (t.accentColor) root.style.setProperty("--color-accent", t.accentColor);
  if (t.backgroundColor)
    root.style.setProperty("--color-bg", t.backgroundColor);
  if (t.textColor) root.style.setProperty("--color-text", t.textColor);
}

// Initialize
applyTheme();
initNavigation();
initHero();
initTimeline();
initCountdown();
initPuzzle();
initFloatingHearts();

// Scroll reveal runs after all sections have rendered their [data-reveal] elements
requestAnimationFrame(() => {
  initScrollReveal();
});
