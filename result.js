document.getElementById('searchBar').addEventListener('submit', function (e) {
  e.preventDefault();
  const query = document.getElementById('searchBox').value.trim();
  if (query.toLowerCase() === 'ibrahim goldstein') {
    window.location.href = 'result.html?q=' + encodeURIComponent(query);
  } else {
    window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  }
});
