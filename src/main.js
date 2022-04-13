import { filterDirector, filterProducer, sortAz, sortZa, sortYear, orderYear} from './data.js';
import data from './data/ghibli/ghibli.js';

let films= data.films;
let cards=document.getElementById('cards'); 
let principal= document.getElementById('carrousel');
let home=document.getElementById('activo');

function showCards(movies){ 
    cards.innerHTML= "";
    movies.forEach((film) => {
        //div dentro de cartas
        let filmCard= document.createElement("div"); 
        filmCard.id=film.id;
        filmCard.addEventListener('click', () =>{
            principal.classList.toggle('hide');
            cards.classList.toggle('hide');
            selectDirectors.classList.toggle('hide');
            selectProducers.classList.toggle('hide');
            selectSort.classList.toggle('hide');
            reload.classList.toggle('hide');
            showInfo(film);
        })
        filmCard.setAttribute("class","stylemovie");
         /*imagen*/
        let{poster} = film;
        let posterCards =document.createElement("img");
        posterCards.setAttribute('class','styleposter');
        posterCards.src= poster;
        /*titulo*/
        let parrafo= document.createElement("p");
        parrafo.setAttribute("class","styletitle");
        let contenido = document.createTextNode(film.title);
        filmCard.appendChild(posterCards);
        cards.appendChild(filmCard);
        filmCard.appendChild(parrafo);
        parrafo.appendChild(contenido);
        home.addEventListener('click', ()=> {
            principal.classList.remove('hide');
            cards.classList.remove('hide');
            selectDirectors.classList.remove('hide');
            selectProducers.classList.remove('hide');
            selectSort.classList.remove('hide');
            reload.classList.remove('hide');
            showDetails.innerHTML= "";
        });
    })
    }
showCards(films);

let selectDirectors= document.getElementById('chooseDirector');
    selectDirectors.addEventListener('change', () => {
      let selectedOption= selectDirectors.value;      
      let result= filterDirector(selectedOption);
      showCards(result);
    });
    
let selectProducers= document.getElementById('chooseProducer');
    selectProducers.addEventListener('change', () => {
       let selected= selectProducers.value;
       let producerResult=filterProducer(selected)
       showCards(producerResult); 
    });

let selectSort= document.getElementById('sortBy');
    selectSort.addEventListener('change', () => {
        let optionSelected= selectSort.value;
        let finalResult;
        switch(optionSelected){
            case 'A-Z' :
                finalResult= sortAz(optionSelected);
                break;
            case 'Z-A' :
                finalResult= sortZa(optionSelected);
                break;
            case 'The oldest':
                finalResult= sortYear(optionSelected);
                break;
            case 'The latest':
                finalResult= orderYear(optionSelected);
                break;
            default:
                break;
        }
        showCards(finalResult);
     });

let reload= document.getElementById('refresh');
reload.addEventListener('click', ()=>{
    showCards(films);
    selectDirectors.selectedIndex  = 0;
    selectProducers.selectedIndex = 0;
    selectSort.selectedIndex = 0;
});

let showDetails= document.getElementById('showDescription');
function showInfo(film){ 
            showDetails.innerHTML= "";
            //div dentro de cartas
            let filmCard= document.createElement('div'); 
            filmCard.setAttribute('class',"stylecard");
            /*imagen*/
            let{poster} = film;
            let posterCards =document.createElement("img");
            posterCards.setAttribute('class','styleImg');
            posterCards.src= poster;
            /*descripcion*/
            let detailContainer= document.createElement('div');
            detailContainer.setAttribute('class','stylecontent');
            let parrafo = document.createElement('p');
            parrafo.setAttribute('class','styleparrafo');
            let contenido= `
            <h2><center>${film.title}</h2>
            <h3 style="color:#F6BF2F;"><center>_______________________________</h3>
            <h4 style="color:blue;">Synopsis:</h4>${film.description}<br><br>
            <b style="color:blue;">Director:</b> ${film.director}<br><br>
            <b style="color:blue;">Producer:</b> ${film.producer}<br><br>
            <b style="color:blue;">Release date:</b> ${film.release_date}`;
            parrafo.innerHTML= contenido;
            /*personajes*/
            let templateCharacters= '';
            film.people.forEach(person =>{
                templateCharacters += `<div class='styleperson'>
                <img src='${person.img}' alt='${person.img}'></img>
                <p style="color:red;">${person.name}</p>
                <p>Gender: ${person.gender}<br>
                Age: ${person.age}<br>
                Eye color: ${person.eye_color}<br>
                Specie: ${person.specie}</p>
                </div>`
            });
            let character= document.createElement('div');
            character.setAttribute('class','styleCharacter');
            character.innerHTML= `${templateCharacters}`;
                    
            let templateLocations = '';
            film.locations.forEach((location) => {
            templateLocations += `<div class='styleplace'>
             <img src='${location.img}'>
             <p style="color:red;">${location.name}</p>
             <p>Climate: ${location.climate}<br>
             Terrain: ${location.terrain}<br>
             Surface water: ${location.surface_water}<br>
             Residents : ${location.residents} </p>
             </div>`
            });
            let locations = document.createElement('div');
            locations.setAttribute('class','styleLocation');
            locations.innerHTML= `${templateLocations}`;
            
            let templateVehicles = '';
            film.vehicles.forEach((vehicles) => {
             templateVehicles += `<div class='stylemovil'>
             <img src='${vehicles.img}'>
             <p style="color:red;">${vehicles.name}</p>
             <p>Description: ${vehicles.description}<br>
             Class: ${vehicles.vehicle_class}<br>
             Pilot : ${vehicles.pilot.name} </p>
             </div>`
            });
            let vehicles = document.createElement('div');
            vehicles.setAttribute('class','stylevehicles');
            vehicles.innerHTML= `${templateVehicles}`;
            
            showDetails.appendChild(filmCard);
            filmCard.appendChild(posterCards);
            filmCard.appendChild(detailContainer);
            detailContainer.appendChild(parrafo);
            showDetails.appendChild(character);
            showDetails.appendChild(locations);
            showDetails.appendChild(vehicles);
}
