/**
 * Smooth Scroll Module
 * Handles smooth scrolling for anchor links
 */

/**
 * Initialize smooth scrolling
 */
export const initSmoothScroll = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault();
        smoothScrollTo(targetElement);
      }
    });
  });
};

/**
 * Smooth scroll to target element
 * @param {HTMLElement} target - The target element to scroll to
 * @param {number} offset - Offset from the top (default: 80)
 */
export const smoothScrollTo = (target, offset = 80) => {
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - offset;
  const duration = 800;
  let start = null;

  const animation = (currentTime) => {
    if (start === null) {
      start = currentTime;
    }
    
    const timeElapsed = currentTime - start;
    const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    
    window.scrollTo(0, run);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

/**
 * Easing function for smooth animation
 * @param {number} t - Current time
 * @param {number} b - Start value
 * @param {number} c - Change in value
 * @param {number} d - Duration
 * @returns {number} Calculated value
 */
const easeInOutQuad = (t, b, c, d) => {
  t /= d / 2;
  if (t < 1) {
    return c / 2 * t * t + b;
  }
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};
