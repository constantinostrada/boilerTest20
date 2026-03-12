/**
 * Button Component
 * Handles button-related functionality
 */

import { logger } from '../utils/logger.js';

/**
 * Initialize all buttons
 */
export const initButtons = () => {
  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  // Initialize specific buttons
  initCTAButton();

  logger.info(`${buttons.length} buttons initialized`);
};

/**
 * Handle button clicks
 * @param {Event} e - Click event
 */
const handleButtonClick = e => {
  const button = e.currentTarget;

  // Add ripple effect
  createRipple(e, button);

  // Log button click
  const buttonId = button.id || 'unnamed';
  logger.info(`Button clicked: ${buttonId}`);
};

/**
 * Create ripple effect on button click
 * @param {Event} e - Click event
 * @param {HTMLElement} button - Button element
 */
const createRipple = (e, button) => {
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = e.clientX - rect.left - size / 2;
  const y = e.clientY - rect.top - size / 2;

  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.classList.add('ripple');

  // Add styles for ripple effect
  ripple.style.position = 'absolute';
  ripple.style.borderRadius = '50%';
  ripple.style.background = 'rgba(255, 255, 255, 0.6)';
  ripple.style.transform = 'scale(0)';
  ripple.style.animation = 'ripple-animation 0.6s ease-out';
  ripple.style.pointerEvents = 'none';

  // Ensure button has relative positioning
  if (getComputedStyle(button).position === 'static') {
    button.style.position = 'relative';
  }

  button.style.overflow = 'hidden';
  button.appendChild(ripple);

  // Remove ripple after animation
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

/**
 * Initialize CTA button
 */
const initCTAButton = () => {
  const ctaButton = document.getElementById('cta-button');

  if (ctaButton) {
    ctaButton.addEventListener('click', () => {
      logger.success('CTA button clicked! Welcome to BoilerTest20!');
      alert('Welcome to BoilerTest20! 🚀');
    });
  }
};

// Add ripple animation to document
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
