import React from 'react';

import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const mapStatetoProps = (state) => {
    //console.log your state it is not state.movies anymore because of combinedreducer
    return ({
        movies: state.movieReducer.movies
    })
}
const MovieList = (props)=> {
    const movies = props.movies;
    
    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}



export default connect(mapStatetoProps)(MovieList);