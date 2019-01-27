import MovieListEntry from './MovieListEntry.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
//This can be static because it just iterates through the movie list 
var MovieList = (props) => (
  <div className = "movieList">
    {props.movies.map(movie => 
      <MovieListEntry movie={movie}/>
      )}
  </div>
  )


export default MovieList;