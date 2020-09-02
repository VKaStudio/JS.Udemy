'use strict';
const movieList = document.querySelector('ul.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      inputForm = addForm.querySelector('.adding__input'),
      checkboxForm = addForm.querySelector('[type="checkbox"]');

const movieDB = {
    movies: [
        "Logan",
        "Justice League",
        "La La Land",   
        "Whiplash",
        "Scott Pilgrim vs. the World"
    ]
};

// 1. Remove ADS from the site
document.querySelector('.promo__adv').remove();

// 2. Rename the genre of the film, change "comedy" to "drama"
document.querySelector('.promo__genre').textContent = 'DRAMA';

// 3. Change poster background
document.querySelector('.promo__bg').style.background = "url('./img/bg.jpg')";

// Make list of Films
function makeList(films, perent) {
    
    perent.innerHTML = '';

    films.sort();

    films.forEach((film, i) => {
        perent.innerHTML += `
        <li class="promo__interactive-item">${++i} ${film}
        <div class="delete"></div></li>
        `;
    })

    // Function for remove movie items
    const deleteItem = document.querySelectorAll('.delete');

    deleteItem.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentNode.remove();
            movieDB.movies.splice(i, 1);

            makeList(films, perent);
        })
    })
}
makeList(movieDB.movies, movieList);

// Add news movies
addForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let newFilm = inputForm.value;
    const isFavorit = checkboxForm.checked;

    
    if (newFilm) {

        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        movieDB.movies.push(newFilm);
        makeList(movieDB.movies, movieList);
    }

    event.target.reset();
});