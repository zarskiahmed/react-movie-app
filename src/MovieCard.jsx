import React from 'react';

/* Create container for 1 movie */
// Put {movie1} in place of props in order to get it for each movie
const MovieCard = ({ movie }) => {
    return(
        <div className="movie">
            {/* Movie Year */}
            <div>
                <p>{movie.Year}</p>
            </div>

            {/* Movie Poster */}
            <div>
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}></img>
            </div>

            {/* Movie Type */}
            <div>
                <span>{movie.Type}</span> 
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;