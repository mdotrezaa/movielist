import { ActionTypes } from "../../types";

const initialState = {
    genres : [],
    loading:true
}

export const genresReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_GENRE:
            return {
                ...state, 
                genres: payload, 
                loading:false
            };
        case ActionTypes.GENRE_ERROR:
        return{
            loading: false, 
            error: payload 
        }    
        default:
            return state;
    };
};
