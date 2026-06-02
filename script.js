// Smooth button animation effect
document.querySelectorAll("a").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.style.transition = "0.3s ease";
    });
});

// Visit button scroll effect
document.querySelector(".visit-btn").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: document.querySelector(".profile-card").offsetTop - 50,
        behavior: "smooth"
    });
});