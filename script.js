const numberOfFilms = +"31";

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 1; i++) {
  const a = "logan";
  const b = "8";
  if (a.length < 30 && a != null && b != null && a != "" && b != "") {
    personalMovieDB.movies[a] = b;
  } else {
    console.log("err");
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else{
  console.log('Произошла ошибка');
}

console.log(personalMovieDB.movies);
