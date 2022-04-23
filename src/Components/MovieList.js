import React, { useEffect } from "react";


const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent 

   
    
    return (
        <>
            {props.movies.map((movie, key) => <div className="col">
                <div className="image-container d-flex jusitfy-content-start m-3">
                    <img src={movie.Poster} alt= "movie"/>  
                    <div onClick={()=>props.handleFavoriteClicks(movie )} className="overlay d-flex align-items-center justify-context-center">
                        <FavoriteComponent />
                    </div>
                </div>
                 
            </div>)}
        </>  
    )
}

export default  MovieList