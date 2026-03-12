/**
 * Logger Utility
 * Console logging with different levels
 */

const LOG_LEVELS = {
  ERROR: 'error',
  WARN: 'warn',
  INFO: 'info',
  DEBUG: 'debug',
};

/**
 * Log a message to console
 * @param {string} message - Message to log
 * @param {string} level - Log level
 * @param {*} data - Additional data to log
 */
const log = (message, level = LOG_LEVELS.INFO, data = null) => {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = `[${timestamp}]`;

  switch (level) {
    case LOG_LEVELS.ERROR:
      console.error(prefix, message, data || '');
      break;
    case LOG_LEVELS.WARN:
      console.warn(prefix, message, data || '');
      break;
    case LOG_LEVELS.DEBUG:
      console.debug(prefix, message, data || '');
      break;
    case LOG_LEVELS.INFO:
    default:
      console.log(prefix, message, data || '');
  }
};

/**
 * Log error message
 * @param {string} message - Error message
 * @param {*} error - Error object or data
 */
export const logError = (message, error = null) => {
  log(message, LOG_LEVELS.ERROR, error);
};

/**
 * Log warning message
 * @param {string} message - Warning message
 * @param {*} data - Additional data
 */
export const logWarning = (message, data = null) => {
  log(message, LOG_LEVELS.WARN, data);
};

/**
 * Log info message
 * @param {string} message - Info message
 * @param {*} data - Additional data
 */
export const logInfo = (message, data = null) => {
  log(message, LOG_LEVELS.INFO, data);
};

/**
 * Log debug message
 * @param {string} message - Debug message
 * @param {*} data - Additional data
 */
export const logDebug = (message, data = null) => {
  log(message, LOG_LEVELS.DEBUG, data);
};

/**
 * Log welcome message
 */
export const logWelcomeMessage = () => {
  console.log(
    '%c BoilerTest20 ',
    'background: #3b82f6; color: white; font-size: 16px; font-weight: bold; padding: 8px 16px; border-radius: 4px;'
  );
  console.log(
    '%c Production-ready HTML, CSS, JavaScript Boilerplate ',
    'font-size: 12px; color: #6b7280;'
  );
  console.log('');
};

export default {
  error: logError,
  warn: logWarning,
  info: logInfo,
  debug: logDebug,
};
