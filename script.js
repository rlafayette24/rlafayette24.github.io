document.addEventListener("DOMContentLoaded", () => {
    const serviceLinks = document.querySelectorAll(".service-list li a");

    serviceLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = link.getAttribute("href");
        });
    });
});

