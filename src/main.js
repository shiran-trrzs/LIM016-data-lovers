import { filterDirector, filterProducer, sortAZ,} from './data.js';
import data from './data/ghibli/ghibli.js';

let films = data.films;

let director = document.getElementById("chooseDirector");
console.log(director)

const directors=filterDirector('Hayao Miyazaki');
console.log(directors)

const producers=filterProducer('');

const sortFilms=sortAZ();
console.log(sortFilms)

const showTitle = document.getElementById("showFilms");

films.forEach((pelicula)=>{
    //Pintar cards
    let movie = pelicula.title;
    let poster = pelicula.poster;
    console.log(movie,poster);
    
    
    showTitle.innerHTML = `${movie} ${poster}`; 
    })

directors.forEach((pelicula)=>{
    
})