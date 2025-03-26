// Smooth Scroll Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Effect on Scroll
const sections = document.querySelectorAll(".section");
const options = {
    threshold: 0.2,
    rootMargin: "0px 0px -100px 0px"
};

const sectionObserver = new IntersectionObserver(function(entries, sectionObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("fade-in");
        sectionObserver.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Sticky Navbar Effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 50);
});

// Button Hover Glow Effect
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.classList.add('btn-glow');
    });
    button.addEventListener('mouseleave', () => {
        button.classList.remove('btn-glow');
    });
});
// Function to simulate fetching real-time data
function updateData() {
    // Dummy Temperature and Humidity Data
    document.getElementById("temp-data").innerText = "25°C";
    document.getElementById("humidity-data").innerText = "60%";

    // Dummy Location Data
    document.getElementById("location-data").innerText =
        "Location: Bengaluru, India";

    // Dummy AI Route Optimization Status
    document.getElementById("route-data").innerText =
        "Optimal route found with 12% less fuel consumption.";

    // Dummy Maintenance Data
    document.getElementById("maintenance-data").innerText =
        "Next maintenance due in 5,000 km.";
}

// Simulate fetching new data every 5 seconds
setInterval(updateData, 5000);
