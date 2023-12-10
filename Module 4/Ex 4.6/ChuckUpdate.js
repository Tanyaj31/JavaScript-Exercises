document.addEventListener("DOMContentLoaded", function () {
    //form submission
    function handleFormSubmit(event) {
        event.preventDefault();

        const searchTerm = document.getElementById("searchTerm").value;

        if (searchTerm) {
            searchChuckNorrisJokes(searchTerm);
        } else {
            console.error('Please enter a search term');
        }
    }

    //function to fetch jokes based on what was searched
    function searchChuckNorrisJokes(searchTerm) {
        const jokesContainer = document.getElementById("jokesContainer");

        //removing previous search results
        jokesContainer.innerHTML = '';

        //sending a request for getting jokes
        fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                const jokes = data.result;

                if (jokes.length === 0) {
                    jokesContainer.innerHTML = '<p>No jokes found for the given search term.</p>';
                } else {
                    //displaying each joke in an article
                    jokes.forEach(joke => {
                        const article = document.createElement('article');
                        article.innerHTML = `<p>${joke.value}</p>`;
                        jokesContainer.appendChild(article);
                    });
                }
            })
            .catch(error => console.error('Error:', error));
    }

    //adding event listener to the form for form submission
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", handleFormSubmit);
});
