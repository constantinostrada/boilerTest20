/**
 * Form Validator utility
 * Handles form validation and submission
 */
export class FormValidator {
  constructor(form, options = {}) {
    this.form = form;
    this.onSuccess = options.onSuccess || this.defaultSuccessHandler;
    this.onError = options.onError || this.defaultErrorHandler;
    this.init();
  }

  /**
   * Initialize form validator
   */
  init() {
    this.attachEventListeners();
  }

  /**
   * Attach event listeners
   */
  attachEventListeners() {
    this.form.addEventListener('submit', e => this.handleSubmit(e));

    // Add real-time validation
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }

  /**
   * Handle form submission
   * @param {Event} e - Submit event
   */
  handleSubmit(e) {
    e.preventDefault();

    // Clear previous errors
    this.clearAllErrors();

    // Validate all fields
    const isValid = this.validateForm();

    if (isValid) {
      const formData = this.getFormData();
      this.onSuccess(formData);
    } else {
      this.onError();
    }
  }

  /**
   * Validate entire form
   * @returns {boolean} Whether form is valid
   */
  validateForm() {
    let isValid = true;
    const inputs = this.form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  /**
   * Validate individual field
   * @param {HTMLElement} field - Input field to validate
   * @returns {boolean} Whether field is valid
   */
  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    const required = field.hasAttribute('required');

    // Check if required field is empty
    if (required && !value) {
      this.showError(field, 'This field is required');
      return false;
    }

    // Email validation
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showError(field, 'Please enter a valid email address');
        return false;
      }
    }

    return true;
  }

  /**
   * Show error message for field
   * @param {HTMLElement} field - Input field
   * @param {string} message - Error message
   */
  showError(field, message) {
    this.clearError(field);

    field.classList.add('error');
    field.style.borderColor = '#ef4444';

    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.style.color = '#ef4444';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    errorElement.style.display = 'block';
    errorElement.textContent = message;

    field.parentElement.appendChild(errorElement);
  }

  /**
   * Clear error for specific field
   * @param {HTMLElement} field - Input field
   */
  clearError(field) {
    field.classList.remove('error');
    field.style.borderColor = '';

    const errorElement = field.parentElement.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }

  /**
   * Clear all form errors
   */
  clearAllErrors() {
    const errorMessages = this.form.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());

    const errorFields = this.form.querySelectorAll('.error');
    errorFields.forEach(field => {
      field.classList.remove('error');
      field.style.borderColor = '';
    });
  }

  /**
   * Get form data as object
   * @returns {Object} Form data
   */
  getFormData() {
    const formData = new FormData(this.form);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    return data;
  }

  /**
   * Default success handler
   * @param {Object} data - Form data
   */
  defaultSuccessHandler(data) {
    console.log('✅ Form submitted successfully:', data);
    alert('Thank you for your message! We will get back to you soon.');
    this.form.reset();
  }

  /**
   * Default error handler
   */
  defaultErrorHandler() {
    console.log('❌ Form validation failed');
  }
}
