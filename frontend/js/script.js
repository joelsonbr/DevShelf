const mobileMenuButton = document.getElementById("mobileMenuButton");
const headerContainer = document.querySelector(".header-container");
const mobileMenuContent = document.getElementById("mobileMenuContent");
const mobileMenuOverlay = document.getElementById("mobileMenuOverlay");


// =========================================================
// MENU MOBILE
// =========================================================

function openMobileMenu() {

    headerContainer.classList.add("mobile-open");

    const icon = mobileMenuButton.querySelector("iconify-icon");

    if (icon) {
        icon.setAttribute("icon", "lucide:x");
    }

    mobileMenuButton.setAttribute("aria-expanded", "true");
    mobileMenuButton.setAttribute("aria-label", "Fechar menu");
}


function closeMobileMenu() {

    headerContainer.classList.remove("mobile-open");

    const icon = mobileMenuButton.querySelector("iconify-icon");

    if (icon) {
        icon.setAttribute("icon", "lucide:menu");
    }

    mobileMenuButton.setAttribute("aria-expanded", "false");
    mobileMenuButton.setAttribute("aria-label", "Abrir menu");
}


// =========================================================
// BOTÃO DO MENU
// =========================================================

if (mobileMenuButton) {

    mobileMenuButton.addEventListener("click", () => {

        const isOpen =
            headerContainer.classList.contains("mobile-open");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    });

}


// =========================================================
// FECHAR AO CLICAR NOS LINKS
// =========================================================

if (mobileMenuContent) {

    const menuLinks =
        mobileMenuContent.querySelectorAll("a");

    menuLinks.forEach((link) => {

        link.addEventListener("click", () => {
            closeMobileMenu();
        });

    });

}


// =========================================================
// FECHAR AO ROLAR
// =========================================================

window.addEventListener("scroll", () => {

    if (
        headerContainer &&
        headerContainer.classList.contains("mobile-open")
    ) {
        closeMobileMenu();
    }

});


// =========================================================
// FECHAR AO CLICAR FORA
// =========================================================

if (mobileMenuOverlay) {

    mobileMenuOverlay.addEventListener("click", () => {
        closeMobileMenu();
    });

}


// =========================================================
// HERO — BLUR DO BADGE AO DESCER
// =========================================================

const heroBadge = document.querySelector(".hero-badge");

window.addEventListener("scroll", () => {

    if (!heroBadge) return;

    const scroll = window.scrollY;

    const blur = Math.min(scroll / 18, 6);
    const opacity = Math.max(1 - scroll / 120, 0);
    const move = Math.min(scroll / 12, 10);

    heroBadge.style.filter = `blur(${blur}px)`;
    heroBadge.style.opacity = opacity;
    heroBadge.style.transform =
        `translateY(-${move}px)`;

});


// =========================================================
// REVEAL ON SCROLL
// =========================================================

const revealElements =
    document.querySelectorAll(".reveal-on-scroll");

const revealObserver =
    new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.15
    });


revealElements.forEach((element) => {
    revealObserver.observe(element);
});