import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';

const mapStatetoProps = (state) => {
    return ({
        favorites: state.favoritesReducer.favorites
    })
}



const FavoriteMovieList = (props) => {
    const {favorites, removeFavorite}= props
    const handleDeleteFavorite = (id) => {
        removeFavorite(id);
        //we are passing the id for that specific movie.id in the div so our functions has access
    }
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={()=>{handleDeleteFavorite(movie.id)}} class="material-icons">remove_circle</span></span> 
                        {/*need to pass anonymous function since we're mapping through the id OR oyu can also put it directly in onclick as removeFavorite(movie.id)*/}
                    </Link> 
                </div>
            })
        }
    </div>);
}


export default connect(mapStatetoProps, {removeFavorite})(FavoriteMovieList);