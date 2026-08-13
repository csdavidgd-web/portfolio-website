const projectData = {
  apparel: {
    number: "01",
    type: "Brand & Campaign",
    title: "Clothing & Apparel",
    description: "Brand-focused concepts and campaign visuals presented as one cohesive visual system.",
    role: "Graphic Design, Campaign Creative",
    tools: "Photoshop, Illustrator, Canva",
    images: [
      ["assets/projects/apparel/main.webp", "Child's Play signature black shirt"],
      ["assets/projects/apparel/FB_IMG_1695119677402.webp", "Child's Play apparel collection overview"],
      ["assets/projects/apparel/detail-01.webp", "Beige Child's Play shirt front and back design"],
      ["assets/projects/apparel/detail-02.webp", "White Child's Play graphic shirt front and back design"],
      ["assets/projects/apparel/detail-04.webp", "Blue Child's Play hoodie front and back design"],
      ["assets/projects/apparel/detail-03.webp", "Child's Play shirt campaign and pre-order graphic"],
    ],
  },
  social: {
    number: "02",
    type: "Digital Content",
    title: "Social Media",
    description: "Content created across real estate, fitness, technology, and other brands.",
    role: "Graphic Design, Content Creation, Social Media",
    tools: "Photoshop, Canva, Meta Business Suite",
    images: [
      ["assets/projects/social-media/social-01.webp", "Social media project 1"],
      ["assets/projects/social-media/social-02.webp", "Social media project 2"],
      ["assets/projects/social-media/social-03.webp", "Social media project 3"],
      ["assets/projects/social-media/social-04.webp", "Social media project 4"],
      ["assets/projects/social-media/social-05.webp", "Social media project 5"],
      ["assets/projects/social-media/social-06%20(3).webp", "Social media project 6, variation 1"],
      ["assets/projects/social-media/social-06(4).webp", "Social media project 6, variation 2"],
      ["assets/projects/social-media/social-07.webp", "Social media project 7"],
      ["assets/projects/social-media/social-08.webp", "Social media project 8"],
      ["assets/projects/social-media/social-09.webp", "Social media project 9"],
      ["assets/projects/social-media/social-10-a.webp", "Social media project 10, variation 1"],
      ["assets/projects/social-media/social-10-b.webp", "Social media project 10, variation 2"],
      ["assets/projects/social-media/social-11.webp", "Social media project 11"],
      ["assets/projects/social-media/social-12.webp", "Social media project 12"],
      ["assets/projects/social-media/social-14.webp", "Social media project 14"],
      ["assets/projects/social-media/social-16.webp", "Social media project 16"],
      ["assets/projects/social-media/social-17.webp", "Social media project 17"],
      ["assets/projects/social-media/social-18.webp", "Social media project 18"],
      ["assets/projects/social-media/social-19.webp", "Social media project 19"],
      ["assets/projects/social-media/social-20.webp", "Social media project 20"],
      ["assets/projects/social-media/social-22.webp", "Social media project 22"],
      ["assets/projects/social-media/social-23.webp", "Social media project 23"],
      ["assets/projects/social-media/social-25.webp", "Social media project 25"],
      ["assets/projects/social-media/social-26.webp", "Social media project 26"],
      ["assets/projects/social-media/social-27.webp", "Social media project 27"],
      ["assets/projects/social-media/social-28.webp", "Social media project 28"],
      ["assets/projects/social-media/social-29.webp", "Social media project 29"],
      ["assets/projects/social-media/social-30.webp", "Social media project 30"],
      ["assets/projects/social-media/social-31.webp", "Social media project 31"],
      ["assets/projects/social-media/social-32.webp", "Social media project 32"],
      ["assets/projects/social-media/social-33.webp", "Social media project 33"],
      ["assets/projects/social-media/social-34.webp", "Social media project 34"],
      ["assets/projects/social-media/social-35.webp", "Social media project 35"],
    ],
  },
  signage: {
    number: "03",
    type: "Environmental, Print & Merchandise",
    title: "Signage, Print & Branded Merchandise",
    description: "From artwork development and branded mockups through production and final installation.",
    role: "Graphic Design, Production Artwork, Mockup Design",
    tools: "Photoshop, Illustrator, Canva",
    images: [
      "assets/projects/signages/2.webp",
      "assets/projects/signages/3.webp",
      "assets/projects/signages/4.webp",
      "assets/projects/signages/5.webp",
      "assets/projects/signages/7.webp",
      "assets/projects/signages/8.webp",
      "assets/projects/signages/9.webp",
      "assets/projects/signages/12.webp",
      "assets/projects/signages/13.webp",
      "assets/projects/signages/14.webp",
      "assets/projects/signages/15.webp",
      "assets/projects/signages/16.webp",
      "assets/projects/signages/17.webp",
      "assets/projects/signages/18.webp",
      "assets/projects/signages/19.webp",
      "assets/projects/signages/20.webp",
      "assets/projects/signages/21.webp",
    ],
  },
  brochures: {
    number: "04",
    type: "Print Design",
    title: "Brochures",
    description: "Brochure layouts and marketing collateral designed for clarity.",
    role: "Graphic Design, Layout, Production Preparation",
    tools: "InDesign, Photoshop, Illustrator, Canva",
    placeholders: ["Full brochure", "Cover", "Interior spread", "Interior spread", "Mockup"],
  },
  video: {
    number: "05",
    type: "Motion & Story",
    title: "Long & Short-Form Video",
    description: "Story-driven video content built for attention and clarity.",
    role: "Video Editing, Content Creation, Creative Direction",
    tools: "Premiere Pro, CapCut, After Effects, Canva",
    placeholders: ["Long-form video", "Short-form reel", "Short-form reel", "Short-form reel"],
  },
  digital: {
    number: "06",
    type: "Digital Experience",
    title: "Email & Landing Pages",
    description: "Design, copy, layout, and campaign execution.",
    role: "Design, Copy, Layout, Campaign Execution",
    tools: "Canva, Figma, Klaviyo, WordPress",
    placeholders: ["Campaign overview", "Email design", "Email design", "Desktop landing page", "Mobile landing page"],
  },
};

const projectOrder = ["apparel", "social", "signage"];
const requestedCategory = new URLSearchParams(window.location.search).get("category");
const category = projectData[requestedCategory] ? requestedCategory : "apparel";
const project = projectData[category];

document.title = `${project.title} | Chadrick David`;
document.querySelector("#case-number").textContent = project.number;
document.querySelector("#case-type").textContent = project.type;
document.querySelector("#case-title").textContent = project.title;
document.querySelector("#case-description").textContent = project.description;
document.querySelector("#case-role").textContent = project.role;
document.querySelector("#case-tools").textContent = project.tools;

const moodboard = document.querySelector("#moodboard");

if (project.sections) {
  moodboard.classList.add("is-sectioned");
  let imageNumber = 0;

  moodboard.innerHTML = project.sections
    .map(
      (section) => `
        <section class="gallery-group">
          <header class="gallery-group-header">
            <h2>${section.title}</h2>
            <p>${section.description}</p>
          </header>
          <div class="gallery-group-grid">
            ${section.images
              .map((image) => {
                imageNumber += 1;
                return `
                  <figure class="curated-item ${image.layout}">
                    <span class="moodboard-index">${String(imageNumber).padStart(2, "0")}</span>
                    <img src="${image.src}" alt="${image.alt}" loading="lazy" />
                    <span class="image-hover-label" aria-hidden="true">View image <span>&nearr;</span></span>
                  </figure>
                `;
              })
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
} else if (project.images) {
  moodboard.innerHTML = project.images
    .map(
      (image, index) => {
        const src = Array.isArray(image) ? image[0] : image;
        const alt = Array.isArray(image)
          ? image[1]
          : `${project.title} project image ${index + 1}`;

        return `
        <figure class="moodboard-item ${category === "signage" ? "orientation-auto" : ""}">
          <span class="moodboard-index">${String(index + 1).padStart(2, "0")}</span>
          <img src="${src}" alt="${alt}" ${index === 0 ? "fetchpriority=\"high\"" : "loading=\"lazy\""} />
          <span class="image-hover-label" aria-hidden="true">View image <span>&nearr;</span></span>
        </figure>
      `;
      }
    )
    .join("");

  if (category === "signage") {
    const signageItems = [...moodboard.querySelectorAll(".orientation-auto")];

    const arrangeSignageRows = () => {
      signageItems.forEach((item) => item.classList.remove("is-centered"));

      let currentRow = [];

      const centerUnpairedItem = () => {
        if (currentRow.length % 2 === 1) {
          currentRow.at(-1).classList.add("is-centered");
        }
        currentRow = [];
      };

      signageItems.forEach((item) => {
        if (item.classList.contains("is-landscape")) {
          centerUnpairedItem();
        } else {
          currentRow.push(item);
        }
      });

      centerUnpairedItem();
    };

    signageItems.forEach((item) => {
      const image = item.querySelector("img");

      const setOrientation = () => {
        const ratio = image.naturalWidth / image.naturalHeight;

        item.classList.toggle("is-landscape", ratio > 1.2);
        arrangeSignageRows();
      };

      if (image.complete && image.naturalWidth) setOrientation();
      else image.addEventListener("load", setOrientation, { once: true });
    });
  }
} else {
  moodboard.innerHTML = project.placeholders
    .map(
      (label, index) => `
        <div class="moodboard-item moodboard-placeholder">
          <span class="moodboard-index">${String(index + 1).padStart(2, "0")}</span>
          <span>${label}</span>
        </div>
      `
    )
    .join("");
}

const currentIndex = projectOrder.indexOf(category);
const nextCategory = projectOrder[(currentIndex + 1) % projectOrder.length];
const nextProjectLink = document.querySelector("#next-project");
nextProjectLink.href = `project.html?category=${nextCategory}`;
nextProjectLink.setAttribute("aria-label", `Next project: ${projectData[nextCategory].title}`);

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = new Date().getFullYear();

const setupProjectReveals = () => {
  const revealItems = document.querySelectorAll(
    ".case-heading > *, .case-meta > *, .moodboard-item, .gallery-group-header, .curated-item, .case-footer-nav > *, footer > *"
  );

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  revealItems.forEach((item, index) => {
    item.classList.add("scroll-reveal");
    item.style.setProperty("--reveal-delay", `${(index % 4) * 65}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
};

setupProjectReveals();
