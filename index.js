/**
 * Redirects your `shiet` to StackOverflow.
 * @param query    Search query for StackOverflow.
 */
function shiet(query) {
    window.open(`https://stackoverflow.com/search?q=${query}`, "_blank");
}

module.exports = shiet;
