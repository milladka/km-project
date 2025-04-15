window.addEventListener('DOMContentLoaded', () => {
  gsap.from(".back-home-btn", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 0.3
  });
  gsap.from(".post-title", { y: -50, opacity: 0, duration: 1 });
  gsap.from(".meta", { y: -20, opacity: 0, duration: 1, delay: 0.3 });
  gsap.from(".post-image", { scale: 0.9, opacity: 0, duration: 1, delay: 0.6 });
  gsap.from(".post-content p", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.3,
    delay: 1
  });
  gsap.from(".share-btn", {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    duration: 0.5,
    delay: 2
  });
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatted = date.toLocaleDateString('en-US', options);
  document.getElementById("english-date").textContent = formatted;
});