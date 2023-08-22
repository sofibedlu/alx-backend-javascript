/**
 * Display a message in the standard output.
 * @param {string} message - The message to be displayed.
 * @returns {void}
 */
const displayMessage = (message) => {
  process.stdout.write(`${message}\n`);
};

module.exports = displayMessage;
