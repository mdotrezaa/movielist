import { combineReducers } from "redux";
import { genresReducer } from "./genres/genreReducer";
import { moviesReducer, selectedmoviesReducer } from "./movies/movieReducer";

const reducers = combineReducers({
    allGenres : genresReducer,
    allMovies : moviesReducer,
    movies : selectedmoviesReducer,
});

export default reducers;