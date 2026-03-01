/**
 * A simple utility to format console output for clearer demonstrations.
 * This helps separate different concepts visually in the terminal.
 */
export const logger = {
  /**
   * Logs a section header.
   * @param {string} title
   */
  section(title) {
    console.log(`\n\x1b[36m=== ${title} ===\x1b[0m\n`);
  },

  /**
   * Logs an informational message or variable state.
   * @param {string} label
   * @param {any} value
   */
  info(label, value) {
    console.log(`\x1b[32m[INFO]\x1b[0m ${label}:`, value);
  },

  /**
   * Logs a sub-section or step.
   * @param {string} title
   */
  step(title) {
    console.log(`\n\x1b[33m--- ${title} ---\x1b[0m`);
  },

  /**
   * Logs a warning to indicate common pitfalls.
   * @param {string} message
   */
  warn(message) {
    console.warn(`\x1b[31m[WARNING] ${message}\x1b[0m`);
  },
};
