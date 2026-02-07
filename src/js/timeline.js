import { config } from "../data/config.js";

function formatDate(dateStr) {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function initTimeline() {
  const section = document.getElementById("timeline");

  const sorted = [...config.timeline].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const cards = sorted
    .map(
      (memory, i) => `
      <div class="timeline__item ${
        i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"
      }">
        <div class="timeline__dot"></div>
        <div class="timeline__card" data-reveal>
          <img
            src="${import.meta.env.BASE_URL}${memory.photo.replace(/^\//, '')}"
            alt="${memory.title}"
            class="timeline__photo"
            loading="lazy"
          />
          <div class="timeline__card-body">
            <span class="timeline__date">${formatDate(memory.date)}</span>
            <h3 class="timeline__card-title">${memory.title}</h3>
            <p class="timeline__card-desc">${memory.description}</p>
          </div>
        </div>
      </div>
    `
    )
    .join("");

  section.innerHTML = `
    <h2 class="section__title" data-reveal>Our Story</h2>
    <div class="timeline__container">
      <div class="timeline__line"></div>
      ${cards}
    </div>
  `;
}
