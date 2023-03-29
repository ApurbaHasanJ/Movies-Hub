import React from 'react';
import './SingleCard.css'

const SingleCard = ({movie, handleWatchTime}) => {
    // const  = props;
    console.log(movie);
    return (
        <div>
            <div className="movie-card card text-center w-100 m-auto col-md-6 mb-5 p-5 ">
                    <div className="movie-poster w-25 m-auto">
                        <img className='w-75' src={movie.poster} alt="" />
                    </div>
                    <h3 className='mt-2'>{movie.movieName}</h3>
                    <p>{movie.description}</p>
                    <div className="time-and-rating mt-3 d-flex justify-content-around">
                        <p>Watch Time:{movie.watchTime}min.</p>
                        <p>Rating: {movie.imdbRating}</p>
                    </div>
                    <button className='btn btn-dark w-75 m-auto' onClick={()=>handleWatchTime(movie.watchTime)}>Book Now</button>
                    
                </div>
        </div>
    );
};

export default SingleCard;