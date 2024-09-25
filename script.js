document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".portfolio-gallery img");

    const fadeIn = (entry) => {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
    };

    const options = {
        threshold: 0.1 // Trigger when 10% of the image is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(fadeIn);
    }, options);

    images.forEach((image) => {
        observer.observe(image);
    });
});
