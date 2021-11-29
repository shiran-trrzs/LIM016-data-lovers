import { filterDirector, filterProducer, sortYear, orderYear, sortAz, sortZa } from './data.js';
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

let selectSort = document.getElementById('sortBy');
selectSort.addEventListener('change', () => {
    let optionSelected = selectSort.value;
    console.log(optionSelected)
    let finalResult;
    switch (optionSelected) {
        case 'A-Z':
            finalResult = sortAz(optionSelected);
            break;
        case 'Z-A':
            finalResult = sortZa(optionSelected);
            break;
        case 'Más antiguo':
            finalResult = sortYear(optionSelected);
            break;
        case 'Más reciente':
            finalResult = orderYear(optionSelected);
            break;
        default:
            console.log('default');
            break;
    }
    console.log(finalResult);
    showCards(finalResult);
});

let reload = document.getElementById('refresh');
reload.addEventListener('click', () => {
    showCards(films);
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
        <h2> ${movie.title} </h2>
        <h4 style='color:black'> <span style='color:blue'> Synopsis:</span> ${movie.description} </h4>
        <h4 style='color:blue'> Director: </h4> ${movie.director} 
        <h4 style='color:blue'> Producer: </h4> ${movie.producer} 
        <h4 style='color:blue'> Release date: </h4> ${movie.release_date}`;
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
        <pre>
        Name: ${character.name}
        Gender: ${character.gender}
        Age: ${character.age}
        Eye color: ${character.eye_color}
        Specie: ${character.specie} </pre>
        </div>`
    })
    const character = document.createElement('div');
    character.setAttribute('class', 'styleCharacter');
    character.innerHTML = `${templateCharacters}`
    showDetails.appendChild(character);

    let templateLocations = '';
    movie.locations.forEach((location) => {
        templateLocations += `
        <div>
        <img src='${location.img}'>
        <pre>
        Name: ${location.name}
        Climate: ${location.climate}
        Terrain: ${location.terrain}
        Surface water: ${location.surface_water}
        Residents : ${location.residents} </pre>
        </div>`
    })
    const locations = document.createElement('div');
    locations.setAttribute('class', 'styleLocation');
    locations.innerHTML = `${templateLocations}`
    showDetails.appendChild(locations);

    let templateVehicles = '';
    movie.vehicles.forEach((vehicles) => {
        templateVehicles += `<div clas='stylemovil'>
        <img src='${vehicles.img}'>
        <p>Name: ${vehicles.name}<br>
        Description: ${vehicles.description}<br>
        Class: ${vehicles.vehicle_class}<br>
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
            showTitle.classList.toggle('hide');
            showInfo(movie);
        })
        card.setAttribute('class', 'styleMovie');
        const info = document.createElement('p');
        info.setAttribute('class', 'styleTitle');
        //const info = document.createTextNode(movie.title);
        info.textContent = `${movie.title}`;
        //Pintar cards
        let { poster } = movie;
        const posterCards = document.createElement('img');
        posterCards.src = poster;
        showTitle.appendChild(card);
        card.appendChild(posterCards);
        card.appendChild(info);
    })
}
showCards(films);



