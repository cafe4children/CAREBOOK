// Hero Section
const heroSection = document.querySelector('.hero');
const heroHeading = document.querySelector('.hero-heading');
const heroSubheading = document.querySelector('.hero-subheading');
const heroCta = document.querySelector('.hero-cta');
const scrollDownArrow = document.querySelector('.scroll-down-arrow');

// Add event listener to hero CTA button
heroCta.addEventListener('click', () => {
  // Smooth scroll to about section
  document.querySelector('.about').scrollIntoView({ behavior:'smooth' });
});

// Add event listener to scroll down arrow
scrollDownArrow.addEventListener('click', () => {
  // Smooth scroll to about section
  document.querySelector('.about').scrollIntoView({ behavior:'smooth' });
});

// About Section
const aboutSection = document.querySelector('.about');
const aboutImage = document.querySelector('.about-image');
const aboutText = document.querySelector('.about-text');
const aboutFeatures = document.querySelector('.about-features');
const progressBar = document.querySelector('.progress-bar');

// Add event listener to about features
aboutFeatures.addEventListener('mouseover', () => {
  // Add active class to feature cards
  aboutFeatures.children.forEach((feature) => {
    feature.classList.add('active');
  });
});

aboutFeatures.addEventListener('mouseout', () => {
  // Remove active class from feature cards
  aboutFeatures.children.forEach((feature) => {
    feature.classList.remove('active');
  });
});

// Progress bar animation
const progress = 0.75; // Progress percentage
const progressBarWidth = progressBar.offsetWidth;
const progressBarInner = progressBar.querySelector('.progress-bar-inner');

// Animate progress bar
function animateProgressBar() {
  const progressWidth = progressBarWidth * progress;
  progressBarInner.style.width = `${progressWidth}px`;
}

animateProgressBar();

// Features Section
const featuresSection = document.querySelector('.features');
const featureCards = document.querySelectorAll('.feature-card');

// Add event listener to feature cards
featureCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    // Add active class to feature card
    card.classList.add('active');
  });

  card.addEventListener('mouseout', () => {
    // Remove active class from feature card
    card.classList.remove('active');
  });
});

// Testimonials Section
const testimonialsSection = document.querySelector('.testimonials');
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial');

// Add event listener to testimonial slider
testimonialSlider.addEventListener('click', (e) => {
  // Check if click is on a testimonial
  if (e.target.classList.contains('testimonial')) {
    // Get index of clicked testimonial
    const index = Array.prototype.indexOf.call(testimonials, e.target);

    // Show active testimonial
    testimonials.forEach((testimonial) => {
      testimonial.classList.remove('active');
    });
    testimonials[index].classList.add('active');
  }
});

// Call-to-Action Section
const ctaSection = document.querySelector('.call-to-action');
const ctaButtons = document.querySelectorAll('.call-to-action button');

// Add event listener to CTA buttons
ctaButtons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    // Add active class to button
    button.classList.add('active');
  });

  button.addEventListener('mouseout', () => {
    // Remove active class from button
    button.classList.remove('active');
  });
});

// Footer
const footer = document.querySelector('.footer');
const socialMediaLinks = document.querySelectorAll('.social-media-link');

// Add event listener to social media links
socialMediaLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    // Add active class to link
    link.classList.add('active');
  });

  link.addEventListener('mouseout', () => {
    // Remove active class from link
    link.classList.remove('active');
  });
});

