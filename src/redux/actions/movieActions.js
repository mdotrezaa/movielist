import { ActionTypes } from "../types";

export const setMovies = (movies) => {
    return {
        type : ActionTypes.SET_MOVIE,
        payload : movies
    };
};

export const selectedMovie = (movie) => {
    return {
        type : ActionTypes.SELECTED_MOVIE,
        payload : movie
    };
};