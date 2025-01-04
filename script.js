//LocomotiveScroll Initialization
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
});

// Page 3 Hover Effect
function page3HoverEffect() {
    const elemContainer = document.querySelector("#elem-container");
    const fixedImage = document.querySelector("#fixed-image");
    const elements = document.querySelectorAll(".elem");

    // Ensure required elements exist
    if (!elemContainer || !fixedImage || elements.length === 0) {
        console.warn("Required elements not found.");
        return;
    }

    // Show fixed image container on mouse enter
    elemContainer.addEventListener("mouseenter", () => {
        fixedImage.style.display = "block";
    });

    // Hide fixed image container on mouse leave
    elemContainer.addEventListener("mouseleave", () => {
        fixedImage.style.display = "none";
        fixedImage.style.backgroundImage = "none"; // Clear the image
    });

    // Add hover effect for individual elements
    elements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            const image = element.getAttribute("data-image");
            if (image) {
                fixedImage.style.backgroundImage = `url(${image})`;
                fixedImage.style.display = "block";
            }
        });

        element.addEventListener("mouseleave", () => {
            fixedImage.style.backgroundImage = "none";
        });
    });
}

// Initialize Hover Effect
page3HoverEffect();

