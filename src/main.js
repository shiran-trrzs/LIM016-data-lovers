import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
console.log(data.films[0].title);

let films = data.films;
let titleFilm= films.map((f) => f.title);
let posterFilm= films.map((f) => f.poster);
let descriptionFilm= films.map((f) => f.description);
let directorFilm= films.map((f) => f.director);
let producerFilm= films.map((f) => f.producer);
let releaseFilm= films.map((f) => f.release_date);

console.log(titleFilm)

function allFilms() {
    for (let i=0; i<titleFilm.length; i++) {
        
    }
}



