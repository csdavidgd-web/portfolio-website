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

const projectDialog = document.querySelector("#project-dialog");
const projectCards = document.querySelectorAll("[data-project]");

if (projectDialog && projectCards.length) {
  const projectNumber = projectDialog.querySelector("#project-number");
  const projectType = projectDialog.querySelector("#project-type");
  const projectTitle = projectDialog.querySelector("#project-title");
  const projectDescription = projectDialog.querySelector("#project-description");
  const projectGallery = projectDialog.querySelector("#project-gallery");
  const projectDetails = projectDialog.querySelector("#project-details");
  const closeButtons = projectDialog.querySelectorAll(".project-close, .project-back");

  const mediaPlaceholder = (label, classes = "") => `
    <div class="project-media ${classes}">
      <span class="project-media-label">${label}</span>
    </div>
  `;

  const detailMarkup = (role, tools) => `
    <p class="project-detail"><strong>Role</strong>${role}</p>
    <p class="project-detail"><strong>Tools</strong>${tools}</p>
  `;

  const projects = {
    apparel: {
      number: "01",
      type: "Brand & Campaign",
      title: "Clothing & Apparel",
      description: "Brand-focused concepts and campaign visuals made to stand apart.",
      gallery: [
        mediaPlaceholder("Large project image", "wide"),
        mediaPlaceholder("Project image"),
        mediaPlaceholder("Project image"),
        mediaPlaceholder("Project image"),
        mediaPlaceholder("Project image"),
      ].join(""),
      details: detailMarkup(
        "Graphic Design, Campaign Creative",
        "Photoshop, Illustrator, Canva"
      ),
    },
    social: {
      number: "02",
      type: "Digital Content",
      title: "Social Media",
      description:
        "Content created across real estate, fitness, technology, and other brands.",
      gallery: [
        mediaPlaceholder("Social media graphic", "portrait"),
        mediaPlaceholder("Carousel design", "portrait"),
        mediaPlaceholder("Reel cover"),
        mediaPlaceholder("Campaign concept"),
        mediaPlaceholder("Content calendar", "wide"),
      ].join(""),
      details: detailMarkup(
        "Graphic Design, Content Creation, Social Media",
        "Photoshop, Illustrator, Canva, Meta Business Suite"
      ),
    },
    signage: {
      number: "03",
      type: "Environmental Design",
      title: "Signages",
      description:
        "From artwork development through fabrication and final installation.",
      gallery: `
        <div class="signage-flow" aria-label="Signage project process">
          <span>Concept / Artwork</span><span class="flow-arrow">→</span>
          <span>Production</span><span class="flow-arrow">→</span>
          <span>Finished Installation</span>
        </div>
        ${mediaPlaceholder("Concept / artwork")}
        ${mediaPlaceholder("Production photo")}
        ${mediaPlaceholder("Finished installation", "wide")}
      `,
      details: detailMarkup(
        "Concept, Artwork Development, Production Support",
        "Photoshop, Illustrator, Canva"
      ),
    },
    brochures: {
      number: "04",
      type: "Print Design",
      title: "Brochures",
      description: "Brochure layouts and marketing collateral designed for clarity.",
      gallery: [
        mediaPlaceholder("Brochure cover", "portrait"),
        mediaPlaceholder("Full brochure mockup", "portrait"),
        mediaPlaceholder("Interior spread"),
        mediaPlaceholder("Interior spread"),
      ].join(""),
      details: detailMarkup(
        "Graphic Design, Layout, Production Preparation",
        "InDesign, Photoshop, Illustrator, Canva"
      ),
    },
    video: {
      number: "05",
      type: "Motion & Story",
      title: "Long & Short-Form Video",
      description: "Story-driven video content built for attention and clarity.",
      gallery: `
        <p class="project-section-label">Long-form</p>
        ${mediaPlaceholder("Add long-form video", "wide video-placeholder")}
        <p class="project-section-label">Short-form</p>
        <div class="video-reels">
          ${mediaPlaceholder("Add reel", "reel video-placeholder")}
          ${mediaPlaceholder("Add reel", "reel video-placeholder")}
          ${mediaPlaceholder("Add reel", "reel video-placeholder")}
        </div>
      `,
      details: detailMarkup(
        "Video Editing, Content Creation, Creative Direction",
        "Premiere Pro, CapCut, After Effects, Canva"
      ),
    },
    digital: {
      number: "06",
      type: "Digital Experience",
      title: "Email & Landing Pages",
      description: "Design, copy, layout, and campaign execution.",
      gallery: `
        <p class="project-section-label">Email Marketing</p>
        ${mediaPlaceholder("Email screenshot", "portrait")}
        ${mediaPlaceholder("Email screenshot", "portrait")}
        <p class="project-section-label">Landing Pages</p>
        ${mediaPlaceholder("Desktop website", "wide")}
        ${mediaPlaceholder("Mobile website", "portrait")}
        ${mediaPlaceholder("Landing page detail", "portrait")}
      `,
      details: detailMarkup(
        "Design, Copy, Layout, Campaign Execution",
        "Canva, Figma, Klaviyo, WordPress"
      ),
    },
  };

  const closeProject = () => projectDialog.close();

  projectCards.forEach((card) => {
    card.addEventListener("click", () => {
      const project = projects[card.dataset.project];

      if (!project) return;

      projectNumber.textContent = project.number;
      projectType.textContent = project.type;
      projectTitle.textContent = project.title;
      projectDescription.textContent = project.description;
      projectGallery.innerHTML = project.gallery;
      projectDetails.innerHTML = project.details;
      document.body.classList.add("project-open");
      projectDialog.showModal();
      projectDialog.scrollTop = 0;
    });
  });

  closeButtons.forEach((button) => button.addEventListener("click", closeProject));

  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) closeProject();
  });

  projectDialog.addEventListener("close", () => {
    document.body.classList.remove("project-open");
  });
}
