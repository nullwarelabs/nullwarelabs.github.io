'use strict';
// Run before the stylesheet to expose the saved native theme before first paint.
window.applyExoluteTheme = function (preference) {
  const theme = preference === 'dark' || preference === 'light'
    ? preference
    : (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="color-scheme"]').content = theme;
  let lock = document.querySelector('meta[name="darkreader-lock"]');
  if (theme === 'dark' && !lock) {
    lock = document.createElement('meta');
    lock.name = 'darkreader-lock';
    document.head.appendChild(lock);
  } else if (theme === 'light' && lock) {
    lock.remove();
  }
};
let initialTheme = 'system';
try {
  const saved = document.cookie.split('; ').find(value => value.startsWith('exolute_prefs='));
  if (saved) initialTheme = JSON.parse(decodeURIComponent(saved.slice('exolute_prefs='.length))).theme;
} catch { /* Use the system theme when the saved cookie is unavailable. */ }
window.applyExoluteTheme(initialTheme);
