document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service-item a");

    services.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = link.getAttribute("href");
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
});

