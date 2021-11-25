import { filterDirector, filterProducer, sortAz, sortZa, sortYear, orderYear} from './data.js';
import data from './data/ghibli/ghibli.js';

let films= data.films;
let cards=document.getElementById("cards"); 

function showCards(movies){ 
    cards.innerHTML= "";
    movies.forEach((film) => {
        //div dentro de cartas
        let filmCard= document.createElement("div"); 
        filmCard.setAttribute("class","stylemovie");
         /*imagen*/
        let{poster} = film;
        let posterCards =document.createElement("img");
        posterCards.src= poster;
        /*titulo*/
        let parrafo= document.createElement("p");
        parrafo.setAttribute("class","styletitle");
        let contenido = document.createTextNode(film.title);
        filmCard.appendChild(posterCards);
        cards.appendChild(filmCard);
        filmCard.appendChild(parrafo);
        parrafo.appendChild(contenido);
    })
    };
showCards(films);

let selectDirectors= document.getElementById('chooseDirector');
    selectDirectors.addEventListener('change', () => {
      let selectedOption= selectDirectors.value;      
      let result= filterDirector(selectedOption);
      console.log(result)
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
        console.log(optionSelected)
        let finalResult;
        switch(optionSelected){
            case 'A-Z' :
                finalResult= sortAz(optionSelected);
                break;
            case 'Z-A' :
                finalResult= sortZa(optionSelected);
                break;
            case 'Más antiguo':
                finalResult= sortYear(optionSelected);
                break;
            case 'Más reciente':
                finalResult= orderYear(optionSelected);
                break;
            default:
                console.log('default');
                break;
        }
        console.log(finalResult);
        showCards(finalResult);
     });

let reload= document.getElementById('refresh');
reload.addEventListener('click', ()=>{
    showCards(films);
    });

let showDetails= document.getElementById('showDescription');
function showInfo(allDetails){ 
    allDetails.forEach((film) => {
            //div dentro de cartas
            let filmCard= document.createElement("div"); 
            filmCard.setAttribute("class","stylecard");
             /*imagen*/
            let{poster} = film;
            let posterCards =document.createElement("img");
            posterCards.src= poster;
            /*descripcion*/
            let detailContainer= document.createElement("div");
            detailContainer.setAttribute("class","stylecontent");
            let parrafo = document.createElement('p');
            parrafo.setAttribute("class","styleparrafo");
            let contenido= `
            <h2>${film.title}</h2>
            <h4 style="color:blue;">Synopsis:</h4>${film.description}
            <h4 style="color:blue;">Director:</h4>${film.director}
            <h4 style="color:blue;">Producer:</h4>${film.producer}
            <h4 style="color:blue;">Release date:</h4>${film.release_date}`;
            parrafo.innerHTML= contenido;
            showDetails.appendChild(filmCard);
            filmCard.appendChild(posterCards);
            filmCard.appendChild(detailContainer);
            detailContainer.appendChild(parrafo);
        })
        };
showInfo(films);
