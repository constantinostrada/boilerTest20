/**
 * Smooth Scroll utility
 * Handles smooth scrolling for anchor links
 */
export class SmoothScroll {
  constructor(options = {}) {
    this.duration = options.duration || 800;
    this.offset = options.offset || 0;
    this.init();
  }

  /**
   * Initialize smooth scroll
   */
  init() {
    this.attachEventListeners();
  }

  /**
   * Attach event listeners to all anchor links
   */
  attachEventListeners() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') {
          return;
        }

        const target = document.querySelector(href);

        if (target) {
          e.preventDefault();
          this.scrollTo(target);
        }
      });
    });
  }

  /**
   * Scroll to target element
   * @param {HTMLElement} target - The target element to scroll to
   */
  scrollTo(target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - this.offset;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / this.duration, 1);
      const ease = this.easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < this.duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  /**
   * Easing function for smooth animation
   * @param {number} t - Progress value between 0 and 1
   * @returns {number} Eased value
   */
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }
}
