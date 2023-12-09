document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('searchForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const query = document.getElementById('query').value;
        if (query.trim() !== '') {
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    console.log('Search Results:', data);
                })
                .catch(error => console.error('Error:', error));
        }
    });
});
