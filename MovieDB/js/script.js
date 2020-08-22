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