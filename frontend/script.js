const mobileMenuButton = document.getElementById("mobileMenuButton");
const headerContainer = document.querySelector(".header-container");

mobileMenuButton.addEventListener("click", () => {
    headerContainer.classList.toggle("mobile-open");

    const icon = mobileMenuButton.querySelector("iconify-icon");

    if (headerContainer.classList.contains("mobile-open")) {
        icon.setAttribute("icon", "lucide:x");
    } else {
        icon.setAttribute("icon", "lucide:menu");
    }
});