/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
const nameOfMovie = document.querySelectorAll('.promo__interactive-item');

movieDB.movies.sort();

nameOfMovie.forEach((item, i) => {
    item.textContent = movieDB.movies[i];
})
