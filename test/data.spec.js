import { filterDirector, filterProducer, sortYear, orderYear, sortAz, sortZa } from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

require('../src/data/ghibli/ghibli.js')
jest.mock('../src/data/ghibli/ghibli.js')

describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });

  it('returns movies by director Hayao Miyazaki', () => {
  expect(filterDirector('Hayao Miyazaki')).toEqual([{'director': 'Hayao Miyazaki', 'title': 'Castle in the Sky'}])
  })
})

describe('filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('returns movies by producer Toshio Suzuki', () => {
  expect(filterProducer('Toshio Suzuki')).toEqual([{'producer': 'Toshio Suzuki', 'title': 'Porco Rosso'}]);
  })
})

describe('sortYear', () => {
  it('is a function', () => {
    expect(typeof sortYear).toBe('function');
  });

 it('sorting from the oldest should be `2011`', () => {
   const result = sortYear(data, '2011');
    expect(result[0].release_date).toBe('2011');
  });
});

describe('orderYear', () => {
  it('is a function', () => {
    expect(typeof orderYear).toBe('function');
  });

  it('sorting from most recent should be `2013`', () => {
    const result = orderYear(data, '2013');
     expect(result[0].release_date).toBe('2013');
   });
});

describe('sortAz', () => {
  it('is a function', () => {
    expect(typeof sortAz).toBe('function');
  });

  it('sorting from A to Z the first element should be `Castle in the Sky`', () => {
    const result = sortAz(data, 'Castle in the Sky');
    expect(result[0].title).toBe('Castle in the Sky');
  });
});

describe('sortZa', () => {
  it('is a function', () => {
    expect(typeof sortZa).toBe('function');
  });

  it('sorting from Z to A the first element should be `Whisper of the Heart`', () => {
    const result = sortZa(data, 'Whisper of the Heart');
    expect(result[0].title).toBe('Whisper of the Heart');
  });
});