const themeButtons = document.querySelectorAll(".theme-toggle");

const updateThemeButtons = () => {
  const isDark = document.documentElement.dataset.theme === "dark";

  themeButtons.forEach((button) => {
    const nextThemeName = isDark ? "day" : "night";
    button.setAttribute("aria-label", `Switch to ${nextThemeName} mode`);
    button.setAttribute("title", `Switch to ${nextThemeName} mode`);
    button.setAttribute("aria-pressed", String(isDark));
  });
};

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("portfolio-theme", nextTheme);
    updateThemeButtons();
  });
});

updateThemeButtons();
