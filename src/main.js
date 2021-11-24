import {filterDirector, filterProducer, sortAZ, sortZA} from './data.js';
import data from './data/ghibli/ghibli.js';

let films = data.films;

let director = document.getElementById('chooseDirector');
director.addEventListener('change', () => {
    let selectedOption = director.value;
    const result = filterDirector(selectedOption);
    showCards(result);
});

let producer = document.getElementById('chooseProducer');
producer.addEventListener('change', () => {
    let selectedOption = producer.value;
    const result = filterProducer(selectedOption);
    showCards(result);
})

let sortBy = document.getElementById('sortBy');
sortBy.addEventListener('change', () => {
    let selectedOption = sortBy.value;
    const result = sortAZ(selectedOption);
    console.log(result)
    showCards(result);
})

/*sortBy.addEventListener('change', () => {
    let selectedOption = sortBy.value;
    const result = sortZA(selectedOption);
    showCards(result);
    console.log(result)
})*/


const showTitle = document.getElementById('showFilms');
function showCards(allMovies) {
    showTitle.innerHTML = '';
    allMovies.forEach((movie) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'styleMovie');
        const info = document.createElement('p');
        info.setAttribute('class', 'styleTitle');
        //const info = document.createTextNode(movie.title);
        info.textContent = `${movie.title}`;
        //Pintar cards
        let {poster} = movie;
        const posterCards = document.createElement('img');
        posterCards.setAttribute('class', 'styleImg');
        posterCards.src = poster;
        showTitle.appendChild(card);
        card.appendChild(posterCards);
        card.appendChild(info);
        })
}
showCards(films);

const showDetails = document.getElementById('showDescription');
function showInfo(allDetails) {
    console.log('Estoy en showInfo')
    allDetails.forEach((movie) => {
        const card = document.createElement('div');
        const info = document.createElement('pre');
        info.textContent = `
        ${movie.title}
        Synopsis:${movie.description}
        Director:${movie.director}
        Producer:${movie.producer}
        Release date:${movie.release_date}`;
        let {poster} = movie;
        const posterCards = document.createElement('img');
        posterCards.src = poster;
        showDetails.appendChild(card);
        card.appendChild(posterCards);
        card.appendChild(info);
    }) 
}
showInfo(films)