import { ActionTypes } from "../../types";

const initialState = {
    movies : [],
    loading:true
}

export const moviesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_MOVIE:
            return {
                ...state, 
                movies: payload, 
                loading:false
            };
        case ActionTypes.MOVIE_ERROR:
        return{
            loading: false, 
            error: payload 
        }    
        default:
            return state;
    };
};

export const selectedmoviesReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_MOVIE:
            return {
                ...state, 
                ...payload, 
                loading:false
            };
        case ActionTypes.MOVIE_ERROR:
            return{
                loading: false, 
                error: payload 
            }; 
               
        default:
            return state;
    };
};