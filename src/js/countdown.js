import { config } from "../data/config.js";

export function initCountdown() {
  const section = document.getElementById("countdown");

  section.innerHTML = `
    <h2 class="section__title section__title--light" data-reveal>${config.countdown.label}</h2>
    <div class="countdown__display" data-reveal>
      <div class="countdown__unit">
        <span class="countdown__number" id="cd-days">--</span>
        <span class="countdown__label">Days</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__number" id="cd-hours">--</span>
        <span class="countdown__label">Hours</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__number" id="cd-mins">--</span>
        <span class="countdown__label">Minutes</span>
      </div>
      <div class="countdown__unit">
        <span class="countdown__number" id="cd-secs">--</span>
        <span class="countdown__label">Seconds</span>
      </div>
    </div>
    <p class="countdown__expired" id="cd-expired" hidden>${config.countdown.expiredMessage}</p>
  `;

  startTicking();
}

function startTicking() {
  const target = new Date(config.countdown.targetDate).getTime();

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    mins: document.getElementById("cd-mins"),
    secs: document.getElementById("cd-secs"),
    expired: document.getElementById("cd-expired"),
  };

  function updateUnit(el, value) {
    const str = String(value).padStart(2, "0");
    if (el.textContent !== str) {
      el.textContent = str;
      el.classList.add("tick");
      setTimeout(() => el.classList.remove("tick"), 200);
    }
  }

  function tick() {
    const now = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      els.days.textContent = "00";
      els.hours.textContent = "00";
      els.mins.textContent = "00";
      els.secs.textContent = "00";
      els.expired.hidden = false;
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    updateUnit(els.days, days);
    updateUnit(els.hours, hours);
    updateUnit(els.mins, mins);
    updateUnit(els.secs, secs);
  }

  tick();
  setInterval(tick, 1000);
}
