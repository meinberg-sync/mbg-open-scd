const THEME_KEY = "mict-theme";
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");

const read = (key) => {
  try { return localStorage.getItem(key); } catch { return null; }
};
const write = (key, value) => {
  try { localStorage.setItem(key, value); } catch { }
};

function applyTheme() {
  document.documentElement.dataset.theme = read(THEME_KEY)
    ?? (systemDark.matches ? "dark" : "light");
}

export function initSettings() {
  applyTheme();
  systemDark.addEventListener("change", applyTheme);
}

export class MbgThemeToggle extends HTMLElement {
  run() {
    const isDark = document.documentElement.dataset.theme === "dark";
    write(THEME_KEY, isDark ? "light" : "dark");
    applyTheme();
  }
}