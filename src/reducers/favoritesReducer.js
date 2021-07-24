import { DELETE_FAVORITE, ADD_FAVORITE, TOGGLE_FAVORITES } from "../actions/favoritesActions" 

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type){
        case(DELETE_FAVORITE):
            return({
                ...state,
                favorites: state.favorites.filter(item => item.id !== action.payload.id)
            })
        case(ADD_FAVORITE):
            if(!JSON.stringify(state.favorites).includes(JSON.stringify(action.payload)))
            { return({
                ...state,
                favorites: [...state.favorites, action.payload]
            })} else {
                return( state )
            }
        case(TOGGLE_FAVORITES):
            console.log("showing favs action ")
            return({
                ...state,
                displayFavorites: !action.payload
            })
        default:
            return state
    }
}

export default favoritesReducer;