// EcoHaul Smart Monitoring Script
document.addEventListener("DOMContentLoaded", function () {
    console.log("EcoHaul Monitoring System Initialized 🚀");
  
    // Explore Features Button Click
    document.querySelector("#explore-btn").addEventListener("click", function () {
        scrollToSection("features");
    });
  
    // Dynamic Sensor Updates
    updateSensorData();
  
    // Periodically update sensor data every 5 seconds
    setInterval(updateSensorData, 5000);
  
    // Smooth Scroll to Section
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: "smooth",
        });
    }
  
    // Real-time Sensor Data Simulation
    function updateSensorData() {
        const tempElement = document.getElementById("temperature");
        const humidityElement = document.getElementById("humidity");
  
        // Generate random values for sensors
        const tempValue = (20 + Math.random() * 10).toFixed(2);
        const humidityValue = (50 + Math.random() * 20).toFixed(2);
  
        // Update the values dynamically
        tempElement.innerHTML = `${tempValue}°C`;
        humidityElement.innerHTML = `${humidityValue}%`;
  
        console.log(`Temperature: ${tempValue}°C, Humidity: ${humidityValue}%`);
    }
  
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you! We will get back to you shortly.");
            contactForm.reset();
        });
    }
  
    // New AI Smart Route Feature (Dynamic Loading)
    loadAISmartRoute();
  
    function loadAISmartRoute() {
        const routeFeature = document.getElementById("ai-smart-route");
        if (routeFeature) {
            setTimeout(() => {
                routeFeature.innerHTML = `
                    <h3>🚀 AI Smart Route Optimization</h3>
                    <p>EcoHaul dynamically selects the fastest and most fuel-efficient route, reducing costs and improving delivery speed.</p>
                `;
                routeFeature.style.display = "block";
                routeFeature.style.animation = "fadeIn 1.5s ease-in-out";
            }, 3000);
        }
    }
  });
  