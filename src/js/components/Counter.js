/**
 * Counter component
 * A simple counter with increment, decrement, and reset functionality
 */
export class Counter {
  constructor(options) {
    this.valueElement = options.valueElement;
    this.incrementBtn = options.incrementBtn;
    this.decrementBtn = options.decrementBtn;
    this.resetBtn = options.resetBtn;
    this.value = 0;

    this.init();
  }

  /**
   * Initialize the counter
   */
  init() {
    this.attachEventListeners();
    this.updateDisplay();
  }

  /**
   * Attach event listeners to buttons
   */
  attachEventListeners() {
    this.incrementBtn.addEventListener('click', () => this.increment());
    this.decrementBtn.addEventListener('click', () => this.decrement());
    this.resetBtn.addEventListener('click', () => this.reset());
  }

  /**
   * Increment counter value
   */
  increment() {
    this.value++;
    this.updateDisplay();
    this.animateValue();
  }

  /**
   * Decrement counter value
   */
  decrement() {
    this.value--;
    this.updateDisplay();
    this.animateValue();
  }

  /**
   * Reset counter to zero
   */
  reset() {
    this.value = 0;
    this.updateDisplay();
    this.animateValue();
  }

  /**
   * Update the display with current value
   */
  updateDisplay() {
    this.valueElement.textContent = this.value;
  }

  /**
   * Add animation to value change
   */
  animateValue() {
    this.valueElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
      this.valueElement.style.transform = 'scale(1)';
    }, 200);
  }

  /**
   * Get current counter value
   */
  getValue() {
    return this.value;
  }

  /**
   * Set counter value programmatically
   */
  setValue(newValue) {
    if (typeof newValue === 'number') {
      this.value = newValue;
      this.updateDisplay();
    }
  }
}
