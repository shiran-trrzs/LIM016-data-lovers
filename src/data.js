import data from './data/ghibli/ghibli.js';

export const filterDirector = (nombre) => {
 return data.films.filter((pelicula)=>{
    return pelicula.director===nombre
  })
  ;
};

export const filterProducer = (nombre) => {
  return data.films.filter((pelicula)=>{
    return pelicula.producer===nombre
  })
  ;
};

/*export const filterNumber = (number) => {
 return data.films.filter((pelicula)=>{
    return pelicula.people.length==number
  })
  ;
};*/

export const anotherExample = () => {
  return 'OMG';
};
