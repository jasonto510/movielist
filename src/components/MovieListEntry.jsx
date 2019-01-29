import MovieList from './MovieList.jsx'
import React from 'react'
import ReactDOM from 'react-dom'

var MovieListEntry = (props) => (
  <div className = "movieListEntry">
    <div className = "movieTitles" onClick={ ()=> {props.clicker(props.movie)} }>
    {props.movie.title}  
    <button className="movieWatched"></button>
    </div>
  </div>
)


export default MovieListEntry 
