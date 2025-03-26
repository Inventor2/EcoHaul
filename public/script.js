// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');

let isDarkMode = true;
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  isDarkMode = !isDarkMode;
  themeToggle.innerText = isDarkMode ? 'Switch Theme' : 'Dark Mode';
});

// Simulate IoT Data Fetch
function updateSensors() {
  const temperatureElement = document.getElementById('temperature');
  const humidityElement = document.getElementById('humidity');

  const temp = (20 + Math.random() * 10).toFixed(2);
  const humidity = (30 + Math.random() * 20).toFixed(2);

  temperatureElement.innerText = `${temp}°C`;
  humidityElement.innerText = `${humidity}%`;
}

setInterval(updateSensors, 3000);

// Button to Explore Features
document.getElementById('explore-btn').addEventListener('click', () => {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
