document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".portfolio-item");
    const section = document.querySelector(".portfolio-section");
    
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
                        img.style.opacity = "1"; // نمایش تصویر بعد از بارگذاری کامل
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
        });
    });
});
