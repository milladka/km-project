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
