// index.js
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');

    toggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});