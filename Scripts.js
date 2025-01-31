const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

const sunImage = 'Images/LightMode.png';
const moonImage = 'Images/DarkMode.png';

function setTheme(theme) {
  body.setAttribute('data-theme', theme);
  if (theme === 'dark') {
    themeIcon.src = sunImage;
    themeToggle.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    themeIcon.src = moonImage;
    themeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
  }
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  setTheme(body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme ? savedTheme : 'dark');
}

themeToggle.addEventListener('click', toggleTheme);
themeToggle.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleTheme();
  }
});

loadThemePreference();

const startDate = new Date('2025-01-30T18:00:00');

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

  document.getElementById("grinding-timer").innerHTML = timerText;
}

setInterval(updateTimer, 1000);
updateTimer();
