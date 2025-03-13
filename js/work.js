document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".portfolio-item");
    const section = document.querySelector(".portfolio-section");
    const container = document.querySelector(".in-wrapper-section");

    const emptyBoxIndexes = new Set();
    while (emptyBoxIndexes.size < Math.ceil(items.length * 0.2)) { // مثلا ۲۰٪ آیتم‌ها را خالی کنیم
        emptyBoxIndexes.add(Math.floor(Math.random() * items.length));
    }

    items.forEach((item, index) => {
        if (emptyBoxIndexes.has(index)) {
            const emptyBox = document.createElement("div");
            emptyBox.classList.add("portfolio-item", "empty-box");
            //container.insertBefore(emptyBox, item);
        }
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from(entry.target, {
                    opacity: 0,
                    y: 50,
                    duration: 0.6,
                    ease: "power2.out"
                });

                const img = entry.target.querySelector("img");
                if (img && img.dataset.src) {
                    const tempImg = new Image();
                    tempImg.src = img.dataset.src;
                    tempImg.onload = () => {
                        img.src = img.dataset.src;
                        img.style.opacity = "1";
                    };
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    items.forEach(item => {
        observer.observe(item);

        const overlay = item.querySelector(".overlay-portfolio");
        const img = item.querySelector("img");
        gsap.set(img, { transformOrigin: "center center" });
        img.style.opacity = "0";

        item.addEventListener("mouseenter", () => {
            gsap.to(overlay, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
            gsap.to(img, { scale: 1.08, duration: 3, ease: "power2.out" });
        });

        item.addEventListener("mouseleave", () => {
            gsap.to(overlay, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" });
            gsap.to(img, { scale: 1, duration: 3, ease: "power2.in" });
            // jjjj
        });
    });
});


function openMenu() {
    gsap.to("#sidebar", { x: 0, duration: 0.5, ease: "power2.out" });
    gsap.to("#menuButton", { opacity: 0, duration: 0.3, ease: "power2.out" });
}
function closeMenu() {
    gsap.to("#sidebar", { x: "-100%", duration: 0.5, ease: "power2.in" });
    gsap.to("#menuButton", { opacity: 1, duration: 0.3, ease: "power2.in" });
}