document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.role-slide');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    slides[index].classList.add('active');
    indicators[index].classList.add('active');
    currentSlide = index;
  }
  const currentPage = window.location.pathname.split("/").pop();
  const navLink = document.querySelectorAll("nav a");

  navLink.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Event listeners for indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto-rotate slides
  setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 5000);

  // See All button functionality
  document.querySelector('.see-all-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('View all internship roles at Novexus');
  });

  // Form validation and submission
  const applicationForm = document.querySelector('.application-form');
  applicationForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple validation
    let isValid = true;
    const inputs = this.querySelectorAll('.form-control');

    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.backgroundColor = '#ff6b6b';
        setTimeout(() => {
          input.style.backgroundColor = '#6692ab';
        }, 2000);
      }
    });

    if (isValid) {
      alert('Thank you for your application! We will contact you soon.');
      this.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });

  // Write review button functionality
  document.querySelector('.write-review-btn').addEventListener('click', function (e) {
    e.preventDefault();
    alert('Share your experience with Novexus');
  });

  // Know more buttons functionality
  const knowMoreButtons = document.querySelectorAll('.btn:not(.see-all-btn):not(.apply-btn):not(.write-review-btn)');
  knowMoreButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const section = this.closest('section');
      let message = 'Learn more about ';

      if (section.classList.contains('about-section')) {
        message += 'Novexus and our mission';
      } else if (section.classList.contains('future-section')) {
        message += 'career opportunities at Novexus';
      } else if (section.classList.contains('roles-section')) {
        const roleTitle = section.querySelector('.role-slide.active .role-title').textContent;
        message += roleTitle + ' position';
      }

      alert(message);
    });
  });

  // Smooth scrolling for navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.textContent.toLowerCase().replace(' ', '-');
      alert('Navigate to ' + targetId + ' section');
    });
  });
});
