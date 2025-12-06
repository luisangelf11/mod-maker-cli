/**
 * Convierte la primera letra del string a mayúscula y el resto a minúscula.
 * @param {string} str El string a capitalizar.
 * @returns {string} El string capitalizado.
 */
export const capitalizeString = (str) => {
  if (!str) {
    return "";
  }

  const lowercased = str.toLowerCase();

  const firstLetter = lowercased.charAt(0).toUpperCase();

  const restOfString = lowercased.slice(1);

  return firstLetter + restOfString;
};
