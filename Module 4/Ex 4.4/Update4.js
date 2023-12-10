document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('searchForm');
    const resultsContainer = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const query = document.getElementById('query').value;
        if (query.trim() !== '') {
            fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
                .then(response => response.json())
                .then(data => {
                    displayResults(data);
                })
                .catch(error => console.error('Error:', error));
        }
    });

    function displayResults(tvShows) {
        //removing the old results
        resultsContainer.innerHTML = '';

        tvShows.forEach(tvShow => {
            const article = document.createElement('article');

            const titleElement = document.createElement('h2');
            titleElement.textContent = tvShow.show.name;

            const linkElement = document.createElement('a');
            linkElement.href = tvShow.show.url;
            linkElement.target = "_blank";
            linkElement.textContent = 'Details';

            const imageUrl = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            imageElement.alt = tvShow.show.name;

            const summaryElement = document.createElement('div');
            summaryElement.innerHTML = tvShow.show.summary;

            //appending elements to the article
            article.appendChild(titleElement);
            article.appendChild(linkElement);
            article.appendChild(imageElement);
            article.appendChild(summaryElement);

            //appending the article to the results
            resultsContainer.appendChild(article);
        });
    }
});
