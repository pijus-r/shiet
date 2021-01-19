const url = `https://stackoverflow.com/search?q=`;
let validity = true;
let tagged = [];

/**
 * Generates search URL for  StackOverflow.
 * @param {string | number} query    StackOverflow search query.
 * @param {array}           tags     StackOverflow search tags.
 */
function shiet(query, tags) {
    if (typeValidation(query, tags)) {
        if (tags !== undefined) {
            tags.forEach((tag) => {
                tagged.push(`[${tag}]`);
            });
            open(url + tagged.toString() + `:${query}`);
        } else {
            console.log(
                '%cSHIET: %o',
                'color: white',
                `Provide tags parameter for better search capabilities.`,
            );
            open(url + query);
        }
    }
}

/**
 * Checks if type submissions are valid.
 * @param {string | number} query    StackOverflow search query.
 * @param {array}           tags     StackOverflow search tags.
 */
function typeValidation(query, tags) {
    if (tags !== undefined && !tagsValidation(tags)) {
        validity = !tagsValidation(tags);
        throw Error(`SHIET: ${tags} is not an instance of Array.`);
    }
    if (!queryValidation(query)) {
        validity = !queryValidation(query);
        throw Error(`SHIET: ${query} is not an instance of String or Number.`);
    }

    return validity;
}

/**
 * Checks if Query is of type String or Number.
 * @param {string | number} query    StackOverflow search query.
 */
function queryValidation(query) {
    return typeof query === 'string' || typeof query === 'number';
}

/**
 * Checks if Tags is of type Array.
 * @param {array} tags    StackOverflow search tags.
 */
function tagsValidation(tags) {
    return Array.isArray(tags);
}

/**
 * Redirects your frustrations to StackOverflow.
 * @param {string} url    StackOverflow search URL.
 */
function open(url) {
    window.open(url, '_blank');
}

module.exports = shiet;
