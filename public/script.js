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
