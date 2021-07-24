import { bindActionCreators } from "redux"

export const ADD_FAVORITE = "ADD_FAVORITE";
export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const DELETE_FAVORITE = "DELETE_FAVORITE";


export const toggleFavorites = (favs) => {
    return({
        type: TOGGLE_FAVORITES,
        payload: favs
    })
}

export const addFavorite = (movie) => {
    return({
        type: ADD_FAVORITE,
        payload: movie
    })
}

export const deleteFavorite = (movie) => {
    return({
        type: DELETE_FAVORITE,
        payload: movie
    })
}
