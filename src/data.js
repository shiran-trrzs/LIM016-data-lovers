import data from './data/ghibli/ghibli.js';

export const filterDirector = (nombre) => {
  return data.films.filter((movie) => {
    return movie.director === nombre
  });
};
 
export const filterProducer = (nombre) => {
  return data.films.filter((movie)=>{
    return movie.producer===nombre
  });
};

/*export const filterYear = (year) => {
  return data.films.filter((movie)=>{
    return movie.release_date===year
  });
};*/

export const sortAZ = () => {
  const newArray = Array.from(data.films);
  return newArray.sort((nombre, nombre1) => {
    return (nombre.title < nombre1.title) ? -1 : 1
  });
};

/*export const sortZA = () => {
  const newArray = Array.from(data.films);
  return newArray.sort((nombre, nombre1) => {
    return (nombre.title > nombre1.title) ? -1 : 1
  });
};*/




