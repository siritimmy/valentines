export function initFloatingHearts() {
  const container = document.getElementById("hearts-bg");
  const isMobile = window.innerWidth < 600;
  const count = isMobile ? 10 : 18;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = "\u2665";

    const size = Math.random() * 16 + 10; // 10-26px
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 12; // 12-27s
    const delay = Math.random() * 15;
    const opacity = Math.random() * 0.08 + 0.04; // 0.04-0.12
    const drift = (Math.random() - 0.5) * 80; // -40 to 40px
    const rotate = Math.random() * 90 - 45; // -45 to 45deg

    heart.style.cssText = `
      left: ${left}%;
      font-size: ${size}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
      --heart-opacity: ${opacity};
      --heart-drift: ${drift}px;
      --heart-rotate: ${rotate}deg;
    `;

    container.appendChild(heart);
  }
}

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    observer.observe(el);
  });
}
