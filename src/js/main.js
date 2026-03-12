import { Counter } from './components/Counter.js';
import { SmoothScroll } from './utils/smoothScroll.js';
import { FormValidator } from './utils/formValidator.js';

/**
 * Main application entry point
 */
class App {
  constructor() {
    this.init();
  }

  /**
   * Initialize the application
   */
  init() {
    console.log('🚀 BoilerTest20 initialized');

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.onReady());
    } else {
      this.onReady();
    }
  }

  /**
   * Called when DOM is ready
   */
  onReady() {
    this.initializeComponents();
    this.attachEventListeners();
  }

  /**
   * Initialize all components
   */
  initializeComponents() {
    // Initialize Counter
    const counterValue = document.getElementById('counterValue');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetBtn = document.getElementById('resetBtn');

    if (counterValue && incrementBtn && decrementBtn && resetBtn) {
      new Counter({
        valueElement: counterValue,
        incrementBtn,
        decrementBtn,
        resetBtn,
      });
    }

    // Initialize Smooth Scroll
    new SmoothScroll();

    // Initialize Form Validator
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      new FormValidator(contactForm);
    }
  }

  /**
   * Attach global event listeners
   */
  attachEventListeners() {
    // CTA Button
    const ctaButton = document.getElementById('ctaButton');
    if (ctaButton) {
      ctaButton.addEventListener('click', this.handleCTAClick.bind(this));
    }

    // Log window resize for debugging
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        console.log('Window resized:', window.innerWidth, 'x', window.innerHeight);
      }, 250);
    });
  }

  /**
   * Handle CTA button click
   */
  handleCTAClick() {
    console.log('CTA button clicked');
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Initialize the application
new App();
