document.querySelectorAll(".arta-slider-container").forEach((sliderContainer) => {
    let index = 0;
    const slides = sliderContainer.querySelector(".arta-slide-track");
    const slideItems = sliderContainer.querySelectorAll(".arta-slide-item");
    const prevBtn = sliderContainer.querySelector(".arta-prev");
    const nextBtn = sliderContainer.querySelector(".arta-next");

    // محاسبه تعداد اسلایدهای نمایشی بر اساس اندازه صفحه
    function getSlidesToShow() {
        return window.innerWidth >= 768 ? 2 : 1; // ۳ در دسکتاپ، ۱ در موبایل
    }

    function updateSlide() {
        const slideWidth = slideItems[0].clientWidth;
        slides.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < slideItems.length - getSlidesToShow()) {
            index++;
        } else {
            index = 0; // بازگشت به ابتدای اسلایدها
        }
        updateSlide();
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = slideItems.length - getSlidesToShow(); // بازگشت به آخرین اسلاید
        }
        updateSlide();
    });

    // تنظیم دوباره اسلایدر هنگام تغییر اندازه صفحه
    window.addEventListener("resize", updateSlide);
});

document.querySelectorAll(".slider-wrapper").forEach(wrapper => {
    let button = wrapper.querySelector(".toggle-button");
    let sliderContainer = wrapper.querySelector(".arta-slider-container");

    button.addEventListener("click", function () {
        if (sliderContainer.classList.contains("hidden")) {
            sliderContainer.classList.remove("hidden");
            button.style.display = "none";
            gsap.to(sliderContainer, {
                duration: 0.6,
                opacity: 1,
                y: 0,
                ease: "power3.out"
            });
        }
    });
});


document.querySelectorAll(".portfolio-item").forEach(item => {
    let button = item.querySelector(".toggle-button");
    let sliderContainer = item.querySelector(".arta-slider-container");
    if (!sliderContainer) return;
    let slides = sliderContainer.querySelector(".arta-slide-track");
    if (!slides) return;
    item.addEventListener("mouseleave", function () {
        closeSlider();
    });

    document.addEventListener("touchstart", function (event) {
        if (!item.contains(event.target)) {
            closeSlider();
        }
    });

    function closeSlider() {
        if (!sliderContainer.classList.contains("hidden")) {
            gsap.to(sliderContainer, {
                duration: 0.6,
                opacity: 0,
                y: 20,
                ease: "power3.in",
                onComplete: () => {
                    sliderContainer.classList.add("hidden");
                    button.style.display = "block";
                    resetSlider();
                }
            });
        }
    }

    function resetSlider() {
        slides.style.transform = "translateX(0px)";
    }
});
