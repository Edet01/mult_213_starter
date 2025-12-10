// src/dom.js

/**
 * Dynamically updates the inner HTML of a given container element.
 * @param {HTMLElement} container - The DOM element to update (e.g., dogOutput).
 * @param {string} content - The HTML string or message to display.
 */
export function renderMessage(container, content) {
  // Use template literals for cleaner string construction, though not essential here.
  // We ensure the message is always displayed.
  container.innerHTML = content;
}