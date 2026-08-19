const currentYear = document.querySelector("#current-year");

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const primaryMenu = document.querySelector("#primary-menu");

if (mobileMenuToggle && primaryMenu) {
  const closeMobileMenu = () => {
    mobileMenuToggle.setAttribute("aria-expanded", "false");
    primaryMenu.classList.remove("is-open");
  };

  mobileMenuToggle.addEventListener("click", () => {
    const willOpen = mobileMenuToggle.getAttribute("aria-expanded") !== "true";
    mobileMenuToggle.setAttribute("aria-expanded", String(willOpen));
    primaryMenu.classList.toggle("is-open", willOpen);
  });

  primaryMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".navbar")) closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
      mobileMenuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) closeMobileMenu();
  });
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

document.querySelectorAll(".tool-logo img").forEach((logo) => {
  const showLogoFallback = () => logo.remove();

  logo.addEventListener("error", showLogoFallback, { once: true });

  if (logo.complete && logo.naturalWidth === 0) {
    showLogoFallback();
  }
});

const toolsSection = document.querySelector(".tools-platforms");
const toolsToggle = document.querySelector(".tools-toggle");

if (toolsSection && toolsToggle) {
  toolsSection.classList.add("is-condensed");
  toolsToggle.hidden = false;

  toolsToggle.addEventListener("click", () => {
    const isExpanded = toolsSection.classList.toggle("is-expanded");
    toolsToggle.setAttribute("aria-expanded", String(isExpanded));
    toolsToggle.querySelector("span:first-child").textContent = isExpanded
      ? "Show fewer tools"
      : "View all tools";
  });
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
    ".section-heading, .about-copy, .capability-wrap, .tools-platforms-heading, .tool-group, .work-card, .more-capabilities, .services-visual, .experience-item, .contact-inner > *, footer > *"
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

const inquiryForm = document.querySelector("#inquiry-form");
const formStatus = document.querySelector("#form-status");

if (inquiryForm && formStatus) {
  inquiryForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = inquiryForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";
    formStatus.textContent = "";
    formStatus.className = "form-status";

    try {
      const response = await fetch(inquiryForm.action, {
        method: "POST",
        body: new FormData(inquiryForm),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Submission failed");

      inquiryForm.reset();
      formStatus.textContent = "Thanks—your inquiry has been sent. I’ll get back to you soon.";
      formStatus.classList.add("is-success");
    } catch (error) {
      formStatus.textContent = "The form couldn’t send right now. Please email me directly at csdavidgd@gmail.com.";
      formStatus.classList.add("is-error");
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonText;
    }
  });
}
