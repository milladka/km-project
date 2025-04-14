const track = document.getElementById('blogSliderTrack');
const items = document.querySelectorAll('.blog-slider-track .blog-slider-item');
const blogSliderPrev = document.getElementById('blogSliderPrev');
const blogSliderNext = document.getElementById('blogSliderNext');

let currentIndex = 0;

function getVisibleCount() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

function updateSlider() {
    const slideWidth = items[0].offsetWidth;
    const visibleCount = getVisibleCount();
    const maxIndex = items.length - visibleCount;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const newX = -(currentIndex * slideWidth);
    gsap.to(track, { x: newX, duration: 0.5, ease: 'power2.out' });
}

blogSliderNext.addEventListener('click', () => {
    currentIndex++;
    updateSlider();
});

blogSliderPrev.addEventListener('click', () => {
    currentIndex--;
    updateSlider();
});

window.addEventListener('resize', updateSlider);
updateSlider();