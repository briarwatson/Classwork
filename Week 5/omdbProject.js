'use strict';

document.getElementById("searchButton").addEventListener("click", searchMovie);

function searchMovie() {
    const movieTitle = document.getElementById("searchInput").value;
    const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=3a937aae`;
    fetch(url)
        .then((response) => {
            if (response.ok) {
                alert("Movie not found, or API is down.");
            }
            return response.json();
        })
        .then((data) => {
            const movieInfo = document.getElementById("movieInfo");
            movieInfo.innerHTML = 
            `<h2>${data.Title}</h2>
            <p>${data.Plot}</p>`
        })
}
