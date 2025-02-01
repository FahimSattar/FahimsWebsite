const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Image paths for theme icons
const sunImage = 'Images/L.png'; // Replace with your sun icon path
const moonImage = 'Images/D.png'; // Replace with your moon icon path

// Function to set theme
function setTheme(theme) {
    body.setAttribute('data-theme', theme);
    if (theme === 'dark') {
        themeIcon.src = sunImage; // Show sun icon in dark mode
        themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        themeIcon.src = moonImage; // Show moon icon in light mode
        themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }
    saveThemePreference(theme);
}

// Function to toggle theme
function toggleTheme() {
    if (body.getAttribute('data-theme') === 'light') {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Function to save theme preference to localStorage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Function to load theme preference
/*function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // If no preference saved, use system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
}*/

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to dark mode if no preference is saved
        setTheme('dark');
    }
}

// Event listener for theme toggle
themeToggle.addEventListener('click', toggleTheme);

// Make the toggle accessible via keyboard
themeToggle.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleTheme();
    }
});

// Initialize theme on page load
loadThemePreference();

// Timer Script
const startDate = new Date('2025-01-30T18:00:00'); // Start date as the time the page was loaded

function updateTimer() {
    const now = new Date();
    const elapsed = now - startDate;

    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsed / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsed / 1000) % 60);

    const timerText = `Turning ideas into reality since 
        <span class="highlight-number">${days}</span> <span class="unit">days</span><span class="comma">,</span> 
        <span class="highlight-number">${hours}</span> <span class="unit">hours</span><span class="comma">,</span> 
        <span class="highlight-number">${minutes}</span> <span class="unit">minutes</span> <span class="comma">and</span> 
        <span class="highlight-number">${seconds}</span> <span class="unit">seconds</span>.`;
    // Update the timer with highlighted numbers, units, and colored commas
    document.getElementById("grinding-timer").innerHTML = timerText;
}

setInterval(updateTimer, 1000);
updateTimer(); // Initialize the timer immediately
