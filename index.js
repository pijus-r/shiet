/**
 * Redirects your frustrations to StackOverflow.
 * @param query    Search query.
 * @param tags     Search tags.
 */
function shiet(query, tags) {
    const url = `https://stackoverflow.com/search?q=`;
    let open;
    let tagged = [];
    if (tags) {
        tags.forEach(tag => {
            tagged.push(`[${tag}]`);
        });
        open = url + tagged.toString() + `:${query}`;
    } else {
        open = url + query;
    }
    window.open(open, "_blank");
}

module.exports = shiet;
