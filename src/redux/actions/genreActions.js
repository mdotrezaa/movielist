import { ActionTypes } from "../types";

export const setGenres = (genres) => {
    return {
        type : ActionTypes.SET_GENRE,
        payload : genres
    };
};
