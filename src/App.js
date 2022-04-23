import React, {useState, useEffect} from 'react'
import MovieList from './Components/MovieList';
import Header from './Components/Header';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './Components/SearchBar';
import AddFavorite from './Components/AddComponent';
import RemoveFavorite from './Components/RemoveFavorite';

const App = () => {

    const [searchValue, setSearchValue] = useState("")
    const [favorite, setFavorite] = useState([])
    const [description, setDescription] = useState([])
  const [movies, setMovies] = useState([
    {
            Title: "Star Wars: Episode IV - A New Hope",
            Rating: 5,
            Year: "1977",
            imdbID: "tt0076759",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode V - The Empire Strikes Back",
            Rating: 4,
            Year: "1980",
            imdbID: "tt0080684",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode VI - Return of the Jedi",
            Rating: 3,
            Year: "1983",
            imdbID: "tt0086190",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode VII - The Force Awakens",
            Rating: 2,
            Year: "2015",
            imdbID: "tt2488496",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode I - The Phantom Menace",
            Rating: 1,
            Year: "1999",
            imdbID: "tt0120915",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode III - Revenge of the Sith",
            Rating: 1,
            Year: "2005",
            imdbID: "tt0121766",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode II - Attack of the Clones",
            Rating: 2,
            Year: "2002",
            imdbID: "tt0121765",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode VIII - The Last Jedi",
            Rating: 3,
            Year: "2017",
            imdbID: "tt2527336",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
        },
        {
            Title: "Rogue One: A Star Wars Story",
            Rating: 4,
            Year: "2016",
            imdbID: "tt3748528",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
        },
        {
            Title: "Star Wars: Episode IX - The Rise of Skywalker",
            Rating: 5,
            Year: "2019",
            imdbID: "tt2527338",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
        },
        {
            Title: "The Avengers",
            Rating: 5,
            Year: "2012",
            imdbID: "tt0848228",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            Title: "Avengers: Endgame",
            Rating: 4,
            Year: "2019",
            imdbID: "tt4154796",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            Title: "Avengers: Infinity War",
            Rating: 3,
            Year: "2018",
            imdbID: "tt4154756",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            Title: "Avengers: Age of Ultron",
            Rating: 2,
            Year: "2015",
            imdbID: "tt2395427",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
        },
        {
            Title: "The Avengers",
            Rating: 1,
            Year: "1998",
            imdbID: "tt0118661",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            Title: "The Avengers: Earth's Mightiest Heroes",
            Rating: 5,
            Year: "2012",
            imdbID: "tt1626038",
            Type: "series",
            Poster: "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
        },
        {
            Title: "Ultimate Avengers: The Movie",
            Rating: 3,
            Year: "2006",
            imdbID: "tt0491703",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
        },
        {
            Title: "Ultimate Avengers II",
            Rating: 1,
            Year: "2006",
            imdbID: "tt0803093",
            Type: "movie",
            Poster: "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            Title: "The Avengers",
            Rating: 2,
            Year: "1969",
            imdbID: "tt0054518",
            Type: "series",
            Poster: "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            Title: "Avengers Assemble",
            Rating: 4,
            Year: "2019",
            imdbID: "tt2455546",
            Type: "series",
            Poster: "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
        }
  ])

    const getMovieRequest = async (searchValue)=>{
        const url =  `http://www.omdbapi.com/?s=${searchValue}&apikey=b9df12e3`

        const response = await fetch(url)
        const responseJson = await response.json()
        console.log(searchValue)
        
        if(responseJson.Search){
            setMovies(responseJson.Search)
        }
         
    }

    useEffect(() => {
        getMovieRequest(searchValue)
    }, [searchValue]);

    useEffect(() =>{
        const movieFavorites =JSON.parse(localStorage.getItem('fav-videos'))
        setFavorite(movieFavorites)
    }, [])
  
    const saveToLocalStorage =(items) => {
        localStorage.setItem('fav-videos', JSON.stringify(items))
        
    }

    const addFavoriteMovie = (movie) => {
        const newFavoriteMovie = [...favorite, movie]
        setFavorite(newFavoriteMovie) 
        saveToLocalStorage(newFavoriteMovie)
    };

    const RemoveFavoriteMovie = (movies) => {
        const newFavoriteMovie = favorite.filter(
            (favorite) => favorite.imdbID !== movies.imdbID
        )
        setFavorite(newFavoriteMovie)
        saveToLocalStorage(newFavoriteMovie)
    }
  
    return (
      <div className="container-fluid">
        <div className="row d-flex align-items-center  mt-4 mb-4">
          <div className="col">
            <Header header="HorsmanTube" />
          </div>
          <div className="col">
            <SearchBar
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          </div>
        </div>
        <div className="movie-app">
          <div className="row">
            <MovieList
              movies={movies}
              handleFavoriteClicks={addFavoriteMovie}
              favoriteComponent={AddFavorite}
            />
          </div>
        </div>
        <div className="row d-flex align-items-center  mt-4 mb-4">
          <div className="col">
            <Header header="Favorites" />
          </div>
        </div>
        <div className="movie-app">
          <div className="row">
            <MovieList
              movies={favorite}
              handleFavoriteClicks={RemoveFavoriteMovie}
              favoriteComponent={RemoveFavorite}
            />
          </div>
        </div>
        <div className="row d-flex align-items-center  mt-4 mb-4">
          <div className="col">
            <Header header="Description" />
          </div>
        </div>
        <div className="movie-app">
          <div className="row">
            <MovieList
              movies={favorite}
              handleFavoriteClicks={RemoveFavoriteMovie}
              favoriteComponent={RemoveFavorite}
            />
          </div>
        </div>
      </div>
    );
}

export default App;
