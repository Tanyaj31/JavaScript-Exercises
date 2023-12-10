document.addEventListener("DOMContentLoaded", function () {
    //sends a request for getting a random joke
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            //printing the joke to the console
            console.log(data.value);
        })
        .catch(error => console.error('Error:', error));
});
