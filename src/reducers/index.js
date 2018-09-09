import activeFilmReducer from './active-film.js';
import downloadedFilmsReducer from './films.js';
import searchTermReducer from './term.js';
import proposalFilmsReducer from './proposals';
import proposalTermReducer from './proposal-term';
import {combineReducers} from 'redux';

const rootData = combineReducers(
    {
        searchTerm: searchTermReducer,
        activeFilm: activeFilmReducer, 
        films: downloadedFilmsReducer,
        proposalFilms: proposalFilmsReducer,
        proposalTerm: proposalTermReducer
    }
)

export default rootData;