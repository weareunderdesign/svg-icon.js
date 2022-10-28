var toggle = document.getElementById("theme-toggle");

var storedTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");
if (storedTheme)
  document.documentElement.setAttribute("data-theme", storedTheme);

const siteWrapper = document.getElementsByTagName("html")[0];
const themeSelect = document.querySelector(".theme");

const setSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    siteWrapper.setAttribute("data-theme", "dark");
  } else {
    siteWrapper.setAttribute("data-theme", "light");
  }
};

themeSelect.addEventListener("change", (event) => {
  const selectedTheme = event.target.value;
  if (selectedTheme === "system") {
    setSystemTheme();
  } else {
    siteWrapper.setAttribute("data-theme", selectedTheme);
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    if (themeSelect.value === "system") {
      setSystemTheme();
    }
  });