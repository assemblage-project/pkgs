// Function to get query parameters from the URL
function getQueryParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const args = [];
    urlParams.forEach((value, key) => {
        args.push(`${key}: ${value}`);
    });
    return args.length > 0 ? args : null;
}

// Expose the getArgs function globally
window.getArgs = getQueryParams;
