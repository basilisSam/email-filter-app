/**
 * Filters an array of strings and returns only valid email-like entries.
 * An entry is considered valid if it:
 * - Is not empty
 * - Contains "@" symbol
 * - Contains "." (dot)
 * 
 * @param {string[]} items - Array of strings to filter
 * @returns {string[]} - Array of valid email-like strings
 */
export function filterEmails(items) {
  const result = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.length > 0) {
      if (item.includes("@")) {
        if (item.includes(".")) {
          result.push(item);
        }
      }
    }
  }

  return result;
}

