import { filterDirector, filterProducer, sortYear, orderYear, sortAz, sortZa } from './data.js';
import data from './data/ghibli/ghibli.js';

let films = data.films;
let principal = document.getElementById('carrousel');
let home = document.getElementById('active');


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

let selectSort = document.getElementById('sortBy');
selectSort.addEventListener('change', () => {
    let optionSelected = selectSort.value;
    let finalResult;
    switch (optionSelected) {
        case 'A-Z':
            finalResult = sortAz(optionSelected);
            break;
        case 'Z-A':
            finalResult = sortZa(optionSelected);
            break;
        case 'Oldest':
            finalResult = sortYear(optionSelected);
            break;
        case 'More recent':
            finalResult = orderYear(optionSelected);
            break;
        default:
            finalResult = ('')
            break;
    }
    showCards(finalResult);
});

let reload = document.getElementById('refresh');
reload.addEventListener('click', () => {
    showCards(films);
    director.selectedIndex = 0;
    producer.selectedIndex = 0;
    selectSort.selectedIndex = 0;
});

const showDetails = document.getElementById('showDescription');
//const characterContent = document.getElementById('showCharacter');
function showInfo(movie) {
    const filmCard = document.createElement('div');
    filmCard.setAttribute('class', 'styleCard');
    const detailContainer = document.createElement('div');
    detailContainer.setAttribute('class', 'styleContent');
    const info = document.createElement('p');
    info.setAttribute('class', 'styleParagraph');
    info.innerHTML = `
        <h2> <center> ${movie.title} </h2>
        <h4 style='color:blue'> <span style='color:blue'> Synopsis:</h4> ${movie.description} <br><br>
        <b style='color:blue'> Director: </b> ${movie.director} <br><br>
        <b style='color:blue'> Producer: </b> ${movie.producer} <br><br>
        <b style='color:blue'> Release date: </b> ${movie.release_date}`;
    let { poster } = movie;
    const posterCards = document.createElement('img');
    posterCards.setAttribute('class', 'styleImg')
    posterCards.src = poster;
    showDetails.appendChild(filmCard);
    filmCard.appendChild(posterCards);
    filmCard.appendChild(detailContainer);
    detailContainer.appendChild(info);

    let templateCharacters = '';
    movie.people.forEach((character) => {
        templateCharacters += `
        <div class = 'stylePeople'>
        <img src='${character.img}'>
        <p>
        Name: ${character.name} <br>
        Gender: ${character.gender} <br>
        Age: ${character.age} <br>
        Eye color: ${character.eye_color} <br>
        Specie: ${character.specie} </p>
        </div>`
    })
    const character = document.createElement('div');
    character.setAttribute('class', 'styleCharacter');
    character.innerHTML = `${templateCharacters}`
    showDetails.appendChild(character);

    let templateLocations = '';
    movie.locations.forEach((location) => {
        templateLocations += `
        <div class= 'stylePlace'>
        <img src='${location.img}'>
        <p>
        Name: ${location.name} <br>
        Climate: ${location.climate} <br>
        Terrain: ${location.terrain} <br>
        Surface water: ${location.surface_water}</p>
        </div>`
        
    })
    const locations = document.createElement('div');
    locations.setAttribute('class', 'styleLocation');
    locations.innerHTML = `${templateLocations}`
    showDetails.appendChild(locations);

    let templateVehicles = '';
    movie.vehicles.forEach((vehicles) => {
        templateVehicles += `
        <div class='styleMovil'>
        <img src='${vehicles.img}'>
        <p>
        Name: ${vehicles.name} <br>
        Description: ${vehicles.description} <br>
        Class: ${vehicles.vehicle_class} <br>
        Pilot : ${vehicles.pilot.name} </p>
        </div>`
    });
    let vehicles = document.createElement('div');
    vehicles.setAttribute('class', 'styleVehicles');
    vehicles.innerHTML = `${templateVehicles}`;
    showDetails.appendChild(vehicles);
}

const showTitle = document.getElementById('showFilms');
function showCards(allMovies) {
    showTitle.innerHTML = '';
    allMovies.forEach((movie) => {
        const card = document.createElement('div');
        card.id = movie.id;
        card.addEventListener('click', () => {
            principal.classList.toggle('hide');
            showTitle.classList.toggle('hide');
            director.classList.toggle('hide');
            producer.classList.toggle('hide');
            selectSort.classList.toggle('hide');
            reload.classList.toggle('hide');
            showInfo(movie);
        })
        card.setAttribute('class', 'styleMovie');
        const info = document.createElement('p');
        info.setAttribute('class', 'styleTitle');
        
        info.textContent = `${movie.title}`;
        
        let { poster } = movie;
        const posterCards = document.createElement('img');
        posterCards.src = poster;
        showTitle.appendChild(card);
        card.appendChild(posterCards);
        card.appendChild(info);

        home.addEventListener('click', ()=> {
            principal.classList.remove('hide');
            showTitle.classList.remove('hide');
            director.classList.remove('hide');
            producer.classList.remove('hide');
            selectSort.classList.remove('hide');
            reload.classList.remove('hide');
            showDetails.innerHTML= '';
        })
    })
}
showCards(films);
