/**
 * Date Utility Functions
 */

/**
 * Set the current year in the footer
 */
export const setCurrentYear = () => {
  const yearElement = document.getElementById('current-year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

/**
 * Get current year
 * @returns {number} Current year
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

/**
 * Format date to locale string
 * @param {Date} date - Date object to format
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, locale = 'en-US') => {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Format time to locale string
 * @param {Date} date - Date object to format
 * @param {string} locale - Locale string (default: 'en-US')
 * @returns {string} Formatted time string
 */
export const formatTime = (date, locale = 'en-US') => {
  return new Date(date).toLocaleTimeString(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * Get relative time string (e.g., "2 hours ago")
 * @param {Date} date - Date object to compare
 * @returns {string} Relative time string
 */
export const getRelativeTime = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsInUnit] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInUnit);

    if (interval >= 1) {
      return `${interval} ${unit}${interval === 1 ? '' : 's'} ago`;
    }
  }

  return 'just now';
};
