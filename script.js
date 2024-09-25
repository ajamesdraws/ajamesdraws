document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".portfolio-gallery img");

    const fadeInImages = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        
        images.forEach((image) => {
            const imagePosition = image.getBoundingClientRect().top + window.scrollY;

            if (scrollPosition > imagePosition + 150) { 
                image.classList.add("fade-in");
            }
        });
    };

    window.addEventListener("scroll", fadeInImages);
    fadeInImages(); // Initial check in case images are already in view
});
