// Smooth scroll for visit button
document.querySelector(".visit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const profileCard = document.querySelector(".profile-card");
    const offset = 80; // Offset from top
    
    const targetPosition = profileCard.getBoundingClientRect().top + window.pageYOffset - offset;
    
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
});

// Add smooth hover animations
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseenter", function() {
        this.style.transition = "all 0.3s ease";
    });
});

// Intersection Observer for fade-in animations (optional enhancement)
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply fade-in to sections (optional)
document.querySelectorAll(".profile-card, .social").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease";
    observer.observe(section);
});

// Prevent layout shift on image load
window.addEventListener('load', function() {
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', function() {
                this.style.transition = 'opacity 0.3s ease';
                this.style.opacity = '1';
            });
        }
    });
});
