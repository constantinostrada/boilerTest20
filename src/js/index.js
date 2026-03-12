/**
 * Main JavaScript Entry Point
 * BoilerTest20
 */

// Import modules
import { initNavigation } from './modules/navigation.js';
import { initCounter } from './modules/counter.js';
import { setCurrentYear } from './utils/date.js';
import { logWelcomeMessage } from './utils/logger.js';

/**
 * Initialize the application
 */
const init = () => {
  // Log welcome message
  logWelcomeMessage();

  // Initialize navigation
  initNavigation();

  // Initialize counter functionality
  initCounter();

  // Set current year in footer
  setCurrentYear();

  // Add smooth scroll behavior for anchor links
  initSmoothScroll();

  // Initialize get started button
  initGetStartedButton();

  // Log initialization complete
  console.log('✓ Application initialized successfully');
};

/**
 * Initialize smooth scrolling for anchor links
 */
const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');

      // Don't prevent default for links that are just "#"
      if (href === '#') {
        return;
      }

      e.preventDefault();

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

        // Update URL without jumping
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });
};

/**
 * Initialize get started button
 */
const initGetStartedButton = () => {
  const getStartedBtn = document.getElementById('get-started');

  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', () => {
      alert('Welcome to BoilerTest20! Check the README.md for setup instructions.');
    });
  }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential testing
export { init };
