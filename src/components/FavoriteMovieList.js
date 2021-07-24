import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { deleteFavorite } from '../actions/favoritesActions';

const FavoriteMovieList = ({ favorites, deleteFavorite }) => {
    
const del = (e, movie) => {
    e.preventDefault()
    deleteFavorite(movie)
}   

    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={(e) => del(e, movie)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}
const mapStatesToProps = state => {
    return({
        favorites: state.favoritesReducer.favorites
    })
}

export default connect(mapStatesToProps, { deleteFavorite })(FavoriteMovieList);