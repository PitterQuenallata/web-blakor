/**
 * Lightweight animation system using Intersection Observer
 * Replaces AOS library for better performance
 */

// Animation configuration
const ANIMATION_CONFIG = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px',
  once: true,
};

// Initialize animations
function initAnimations() {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  if (!animatedElements.length) return;

  // Use Intersection Observer for better performance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        const animationType = element.dataset.animate || 'fade-up';
        const delay = element.dataset.delay || '0';
        
        // Apply animation with delay
        setTimeout(() => {
          element.classList.add('animate-in');
          element.setAttribute('data-animated', 'true');
        }, parseInt(delay));

        // Unobserve if once is true
        if (ANIMATION_CONFIG.once) {
          observer.unobserve(element);
        }
      }
    });
  }, {
    threshold: ANIMATION_CONFIG.threshold,
    rootMargin: ANIMATION_CONFIG.rootMargin,
  });

  // Observe all animated elements
  animatedElements.forEach((el) => observer.observe(el));
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimations);
} else {
  initAnimations();
}

// Re-initialize on Astro page transitions (if using View Transitions)
document.addEventListener('astro:page-load', initAnimations);
