gsap.registerPlugin(ScrollTrigger);

const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");

    function isTouchDevice() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }

    if (isTouchDevice()) {
        cursor.style.display = "none";
        return;
    }
    if (!isTouchDevice()) {
        document.body.style.cursor = "none";
    }

    document.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });
});



let addAnimation = function () {
    $(".skew-up").each(function (index) {
        const text = new SplitType($(this), {
            types: "lines, words",
            lineClass: "word-line"
        }); let textInstance = $(this);
        let line = textInstance.find(".word-line");
        let word = line.find(".word"); let tl = gsap.timeline({
            scrollTrigger: {
                trigger: textInstance,
                start: "top 95%",
                end: "top 95%",
                onComplete: function () {
                    $(textInstance).removeClass("skew-up");
                }
            }
        }); tl.set(textInstance, { opacity: 1 }).from(word, {
            y: "100%",
            skewX: "-6",
            duration: 2,
            stagger: 0.03,
            ease: "expo.out"
        });
    });
}; addAnimation(); window.addEventListener("resize", function (event) {
    if ($(window).width() >= 992) { addAnimation(); }
});

gsap.to(".border-right", {
    height: "100%",
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".holder-sec-one",
        start: "top 40%",
        toggleActions: "play none none none"
    }
});

gsap.to(".border-bottom", {
    width: "100%",
    duration: 5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".slider-section",
        start: "top 40%",
        toggleActions: "play none none none"
    }
});

gsap.to(".border-bottom-2", {
    width: "100%",
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".architecture",
        start: "top 40%",
        toggleActions: "play none none none"
    }
});

gsap.to(".border-bottom-3", {
    width: "100%",
    duration: 3,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".interior",
        start: "top 40%",
        toggleActions: "play none none none"
    }
});

gsap.to(".border-top-contact", {
    scaleX: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".handle-contact",
        start: "top 40%",
        toggleActions: "play none none none"
    }
});

gsap.to(".border-left-opes", {
    scaleY: 1,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".handle-contact",
        start: "top 40%",
        toggleActions: "play none none none"
    }
});

const slider = document.getElementById("slider");
const sliderSection = document.getElementById("sliderSection");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const scrollSpeed = 3;
const buttonScrollAmount = 300;

let isDragging = false;
let startX, scrollLeft;

sliderSection?.addEventListener("wheel", (event) => {
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    const currentScroll = slider.scrollLeft;

    if ((event.deltaY > 0 && currentScroll >= maxScrollLeft) || (event.deltaY < 0 && currentScroll <= 0)) {
        return;
    }

    event.preventDefault();
    slider.scrollBy({ left: event.deltaY * scrollSpeed, behavior: "smooth" });
}, { passive: false });

slider?.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    let cursor = document.querySelector('.custom-cursor');
    gsap.to(cursor, {
        padding: 20,
        duration: 0.1,
        ease: "power2.out"
    });
    // slider.style.cursor = "grabbing";
});

slider?.addEventListener("mouseleave", () => {
    isDragging = false;
    let cursor = document.querySelector('.custom-cursor');
    gsap.to(cursor, {
        padding: 10,
        duration: 0.1,
        ease: "power2.out"
    });
    //slider.style.cursor = "grab";
});

slider?.addEventListener("mouseup", () => {
    isDragging = false;
    let cursor = document.querySelector('.custom-cursor');
    gsap.to(cursor, {
        padding: 20,
        duration: 0.1,
        ease: "power2.out"
    });
    //slider.style.cursor = "grab";
});

slider?.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    let cursor = document.querySelector('.custom-cursor');
    gsap.to(cursor, {
        padding: 20,
        duration: 0.1,
        ease: "power2.out"
    });
});

const interactiveElements = document.querySelectorAll("a, button");

interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        let cursor = document.querySelector('.custom-cursor');
        gsap.to(cursor, {
            padding: 20,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    el.addEventListener("mouseleave", () => {
        let cursor = document.querySelector('.custom-cursor');
        gsap.to(cursor, {
            padding: 10,
            duration: 0.1,
            ease: "power2.out"
        });
    });
});

slider?.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider?.addEventListener("touchend", () => {
    isDragging = false;
});

slider?.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});

prevBtn?.addEventListener("click", () => {
    slider.scrollBy({ left: -buttonScrollAmount, behavior: "smooth" });
});

nextBtn?.addEventListener("click", () => {
    slider.scrollBy({ left: buttonScrollAmount, behavior: "smooth" });
});

