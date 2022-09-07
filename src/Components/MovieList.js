import React from "react";

const MovieList = ({ movies, handleFavoriteClicks, favoriteComponent }) => {
  const FavoriteComponent = favoriteComponent;

  return (
    <>
      {movies?.map((movie, key) => (
        <div className="col" key={movie?.imdbID}>
          <div className="image-container d-flex jusitfy-content-start m-3">
            <img src={movie?.Poster} alt="movie" />
            <div
              onClick={() => handleFavoriteClicks(movie)}
              className="overlay d-flex align-items-center justify-context-center"
            >
              <FavoriteComponent />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
