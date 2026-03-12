/**
 * Counter Module
 * Handles counter functionality demo
 */

let count = 0;

/**
 * Initialize counter functionality
 */
export const initCounter = () => {
  const counterValue = document.getElementById('counter-value');
  const incrementBtn = document.getElementById('increment');
  const decrementBtn = document.getElementById('decrement');
  const resetBtn = document.getElementById('reset');

  if (!counterValue || !incrementBtn || !decrementBtn || !resetBtn) {
    console.warn('Counter elements not found');
    return;
  }

  // Increment counter
  incrementBtn.addEventListener('click', () => {
    count++;
    updateCounterDisplay(counterValue);
    animateCounter(counterValue);
  });

  // Decrement counter
  decrementBtn.addEventListener('click', () => {
    count--;
    updateCounterDisplay(counterValue);
    animateCounter(counterValue);
  });

  // Reset counter
  resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounterDisplay(counterValue);
    animateCounter(counterValue);
  });

  // Keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.target.closest('.counter')) {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        incrementBtn.click();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        decrementBtn.click();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        resetBtn.click();
      }
    }
  });

  console.log('✓ Counter initialized');
};

/**
 * Update counter display
 * @param {HTMLElement} element - The counter value element
 */
const updateCounterDisplay = (element) => {
  element.textContent = count;

  // Update color based on value
  if (count > 0) {
    element.style.color = 'var(--color-success)';
  } else if (count < 0) {
    element.style.color = 'var(--color-error)';
  } else {
    element.style.color = 'var(--color-primary)';
  }
};

/**
 * Animate counter value change
 * @param {HTMLElement} element - The counter value element
 */
const animateCounter = (element) => {
  element.style.transform = 'scale(1.2)';

  setTimeout(() => {
    element.style.transform = 'scale(1)';
  }, 200);
};

/**
 * Get current count value
 * @returns {number} Current count
 */
export const getCount = () => count;

/**
 * Set count value
 * @param {number} value - New count value
 */
export const setCount = (value) => {
  count = value;
  const counterValue = document.getElementById('counter-value');
  if (counterValue) {
    updateCounterDisplay(counterValue);
  }
};

/**
 * Reset count to zero
 */
export const resetCount = () => {
  setCount(0);
};
