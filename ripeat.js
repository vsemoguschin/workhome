let numberOfFilms;

function strt() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
  }
}
// strt();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", "");
    const b = prompt("На сколько оцените его?", "");
    if (a != "" && a.length < 30 && a != null && b != "" && b != null) {
      personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы - киноман!");
  } else {
    console.log("err");
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    if (genre != "" && genre != null) {
    //   personalMovieDB.genres.push(genre);
      personalMovieDB.genres[i-1]=genre;
    } else {
      i--;
    }
  }
}

writeYourGenres();
console.log(personalMovieDB);
