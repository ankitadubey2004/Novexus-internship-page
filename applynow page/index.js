document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".role-slide");
  const indicators = document.querySelectorAll(".indicator");
  const thumbnails = document.querySelectorAll(".role-thumbnail");

  let currentSlide = 0;

  function showSlide(index) {
    // Bounds check
    if (index < 0 || index >= slides.length) return;

    // Hide all slides
    slides.forEach((slide) => slide.classList.remove("active"));

    // Deactivate all indicators
    indicators.forEach((indicator) => indicator.classList.remove("active"));

    // Deactivate all thumbnails
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));

    // Activate current slide, indicator, and thumbnail
    slides[index].classList.add("active");
    if (indicators[index]) indicators[index].classList.add("active");
    thumbnails[index].classList.add("active");

    currentSlide = index;
  }

  // Indicator click handlers
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Thumbnail click handlers
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Initialize
  showSlide(currentSlide);
});
