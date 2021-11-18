// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';

export const filterDirector = (nombre) => {
 return data.films.filter((pelicula)=>{
    return pelicula.director===nombre
  });
};

export const filterProducer = (nombre) => {
  return data.films.filter((pelicula)=>{
    return pelicula.producer===nombre
  });
};

export const sortAZ = () => {
  return data.films.sort((nombre1, nombre2) => {
    return (nombre1.title < nombre2.title) ? -1 : 1
  });
  
};




