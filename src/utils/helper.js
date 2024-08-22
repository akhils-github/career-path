/**
 * Converts total years and months into a formatted string.
 * @param {string} total_year - Total years as a string.
 * @param {string} total_month - Total months as a string.
 * @returns {string} - Formatted duration string.
 */
export function formatDuration(total_year, total_month) {
    // Convert the input strings to integers, defaulting to 0 if not valid
    const years = parseInt(total_year, 10) || 0;
    const months = parseInt(total_month, 10) || 0;

    // Calculate the total number of months
    const totalMonths = years * 12 + months;

    // Convert total months to years and months
    const formattedYears = Math.floor(totalMonths / 12);
    const formattedMonths = totalMonths % 12;

    // Return the formatted string
    return `${formattedYears} years ${formattedMonths} months`;
}



/**
 * Converts a formatted duration string into an object with years and months.
 * @param {string} duration - Formatted duration string, e.g., '3 years 1 month'.
 * @returns {Object} - An object with `years` and `months` properties.
 */
export function parseDuration(duration) {
    // Regular expression to match years and months
    const regex = /(\d+)\s*years?\s*(\d+)\s*months?/i;

    // Execute the regular expression on the input string
    const match = duration.match(regex);

    // If there is a match, extract the years and months
    if (match) {
        return {
            years: parseInt(match[1], 10),
            months: parseInt(match[2], 10)
        };
    }

    // Return default values if no match is found
    return {
        years: 0,
        months: 0
    };
}