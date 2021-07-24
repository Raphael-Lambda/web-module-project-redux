import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item=>(action.payload !== item.id))
            }
        case ADD_MOVIE:
            const ids = Math.max(...movies.map(item => item.id))
            const id = ids + 1
            return {
                ...state,
                movies: [...state.movies, {...action.payload, id: id}]
            }

        default:
            return state;
    }
}

export default reducer;