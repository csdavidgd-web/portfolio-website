const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const portraitImage = document.querySelector(".portrait-image");

if (portraitImage) {
  const showPortraitFallback = () => portraitImage.classList.add("is-missing");

  portraitImage.addEventListener("error", showPortraitFallback);

  if (portraitImage.complete && portraitImage.naturalWidth === 0) {
    showPortraitFallback();
  }
}

const setupScrollReveals = () => {
  const revealItems = document.querySelectorAll(
    ".section-heading, .about-copy, .capability-wrap, .work-card, .experience-item, .contact-inner > *, footer > *"
  );

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  revealItems.forEach((item, index) => {
    item.classList.add("scroll-reveal");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
};

setupScrollReveals();
