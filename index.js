/**
 * Redirects your `shiet` to StackOverflow.
 * @param query    Search query for StackOverflow.
 * @param tags     Search tags for StackOverflow.
 */
function shiet(query, tags) {
    const url = `https://stackoverflow.com/search?q=`;
    let open;
    let tagged = [];
    if (tags?.length > 0) {
        tags.forEach(tag => {
            tagged.push(`[${tag}]`);
        });
        console.log(tagged, tags);
        open =  url + tagged.toString() + `:${query}`;
    } else {
        open = url + query;
    }
    window.open(open, "_blank");
}

module.exports = shiet;
