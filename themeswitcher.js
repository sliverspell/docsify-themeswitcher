const themeIcon = document.getElementById('themeIcon');

// Add 'spacered' to the themes list
const themes = ['light', 'dark', 'terminalgreen', 'oceanblue', 'spacered'];
let currentThemeIndex = localStorage.getItem('themeIndex') || 0;

// Apply the initial theme from local storage or default
document.documentElement.setAttribute('data-theme', themes[currentThemeIndex]);
updateIcon(currentThemeIndex);

// Switch themes on icon click
themeIcon.addEventListener('click', () => {
  currentThemeIndex = (parseInt(currentThemeIndex) + 1) % themes.length;
  document.documentElement.setAttribute('data-theme', themes[currentThemeIndex]);
  localStorage.setItem('themeIndex', currentThemeIndex);
  updateIcon(currentThemeIndex);
});

// Update the theme icon based on the current theme
function updateIcon(themeIndex) {
  const icons = ['fa-sun', 'fa-moon', 'fa-terminal', 'fa-water', 'fa-rocket'];
  themeIcon.className = `fas ${icons[themeIndex]}`;
}
