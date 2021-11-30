import data from './data/ghibli/ghibli.js';

export const filterDirector = (nombre) => {
 return data.films.filter((movie)=>{
    return movie.director===nombre
  });
};

export const filterProducer = (nombre) => {
  return data.films.filter((movie)=>{
    return movie.producer===nombre
  });
};

export const sortYear = () => {
  const newArray= Array.from(data.films);
  return newArray.sort((number,number1) => {
    return (number.release_date< number1.release_date) ? -1:1
  });
}; 

export const orderYear = () => {
  const newArray= Array.from(data.films);
  return newArray.sort((number,number1) => {
    return (number.release_date< number1.release_date) ? 1:-1
  });
}; 

export const sortAz = () => {
  const newArray= Array.from(data.films);
  return newArray.sort((nombre,nombre1) => {
    return (nombre.title< nombre1.title) ? -1:1
  });
};

export const sortZa = () => {
  const newArray= Array.from(data.films);
  return newArray.sort((nombre,nombre1) => {
    return (nombre.title< nombre1.title) ? 1:-1
  });
};

/*export const filterSort= (nombre) => {
  let sortArray=[sortFilms,sortDescendent, oldYears, recentYears];
  return sortArray.filter((movie)=>{
    return movie===nombre
  });
};*/