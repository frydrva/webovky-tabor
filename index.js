document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value.trim();

    if (query.toLowerCase() === "ibrahim goldstein") {
        // Redirect to custom results page
        window.location.href = 'result.html?q=' + encodeURIComponent(query);
    } else {
        // Perform a normal Google search
        const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(query);
        window.location.href = googleSearchUrl;
    }
});
document.querySelector('.lucky-btn').addEventListener('click', function() {
    const query = document.getElementById('searchInput').value.trim();
    if (query.toLowerCase() === "ibrahim goldstein") {
        window.location.href = 'result.html?q=' + encodeURIComponent(query);
    } else {
        window.location.href = 'https://www.google.com/search?btnI=1&q=' + encodeURIComponent(query);
    }
});
