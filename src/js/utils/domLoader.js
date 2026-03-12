/**
 * DOM Content Loader Utility
 * Provides helpers for DOM ready state
 */

/**
 * DOMContentLoader class
 */
export class DOMContentLoader {
  /**
   * Execute callback when DOM is ready
   * @param {Function} callback - Callback to execute
   */
  static ready(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  /**
   * Execute callback when page is fully loaded (including images, etc.)
   * @param {Function} callback - Callback to execute
   */
  static loaded(callback) {
    if (document.readyState === 'complete') {
      callback();
    } else {
      window.addEventListener('load', callback);
    }
  }

  /**
   * Wait for a specific element to be available in the DOM
   * @param {string} selector - CSS selector
   * @param {number} timeout - Timeout in milliseconds
   * @returns {Promise<HTMLElement>} Promise that resolves with the element
   */
  static waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);

      if (element) {
        resolve(element);
        return;
      }

      const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
  }
}

export default DOMContentLoader;
