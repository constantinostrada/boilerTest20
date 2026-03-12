/**
 * Main JavaScript Entry Point
 * BoilerTest20
 */

import { initNavigation } from './modules/navigation.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { updateCopyrightYear } from './utils/helpers.js';
import { logWelcomeMessage } from './utils/logger.js';

/**
 * Initialize application
 */
const init = () => {
  // Log welcome message
  logWelcomeMessage();

  // Initialize navigation
  initNavigation();

  // Initialize smooth scrolling
  initSmoothScroll();

  // Update copyright year
  updateCopyrightYear();

  // CTA Button handler
  const ctaButton = document.getElementById('ctaButton');
  if (ctaButton) {
    ctaButton.addEventListener('click', handleCTAClick);
  }

  // Add loaded class to body
  document.body.classList.add('loaded');
};

/**
 * Handle CTA button click
 */
const handleCTAClick = () => {
  const message = 'Welcome to BoilerTest20! This is a production-ready boilerplate.';
  alert(message);
  console.log('CTA button clicked');
};

/**
 * DOM Content Loaded Event
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/**
 * Page Load Event
 */
window.addEventListener('load', () => {
  console.log('Page fully loaded');
});

/**
 * Handle page visibility changes
 */
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('Page is hidden');
  } else {
    console.log('Page is visible');
  }
});

// Export for testing purposes
export { init };
