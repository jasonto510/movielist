import React from 'react'
import ReactDOM from 'react-dom'
import MovieMaker from './components/App.jsx'
import sampleMovies from './components/sampleMovieData.js'


//rendering all of the componenets from App

ReactDOM.render(<MovieMaker movieSamples={sampleMovies}/>, document.getElementById('app'));

//need to add movies here 