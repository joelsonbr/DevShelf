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

/* ========================================
   HERO — BLUR DO BADGE AO DESCER
======================================== */

const heroBadge = document.querySelector(".hero-badge");

window.addEventListener("scroll", () => {
    if (!heroBadge) return;

    const scroll = window.scrollY;

    const blur = Math.min(scroll / 18, 6);
    const opacity = Math.max(1 - scroll / 120, 0);
    const move = Math.min(scroll / 12, 10);

    heroBadge.style.filter = `blur(${blur}px)`;
    heroBadge.style.opacity = opacity;
    heroBadge.style.transform = `translateY(-${move}px)`;
});