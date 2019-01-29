//Need to write an ajax function and send a request to the server, server being sent is 
//Need a way to store the data that's being typed in 
  //Need to write a function that senses the click event 
    //Once this thing is clicked send a cascading effect down to change other things

//Render everything at the end 
//Response on the screen

import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import sampleMovies from './sampleMovieData.js'
import MovieList from './MovieList.jsx'
import MovieListEntry from './MovieListEntry.jsx'
// import Search from './Search.jsx'


class MovieMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filtered : [],
      isToggleOn : true
   }
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.handleClick = this.handleClick.bind(this);  
    this.addMovie = this.addMovie.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  //When the paid loads, the movies will show up on the screen
  componentDidMount(){
    this.setState({
      filtered: this.props.movieSamples
    });
  }


  //Whenever we receive a new prop we want to rerender our data 
    //When something gets added or removed 
  // componentDidReceiveProp(nextProps){ 
  //   this.setState({
  //     filtered: nextProps.movieSamples
  //   })
  // }


  addMovie(event){
    event.preventDefault();
    let list = this.props.movieSamples;
    console.log(list);
    var newItem = document.getElementById("addInput");
    var form = document.getElementById("addItemForm");
        //The case where it's undefined
    if (newItem.value !== ""){
      console.log(newItem.value)
      list.push({title: newItem.value});
      this.setState({
        filtered : list
      });
      //Resets the form everytime it's clicked
      form.reset();
    }
  }
  
  handleSubmit(event){
    event.preventDefault()
    let currentList = this.props.movieSamples;
    var newList;
    var movieSearch = document.getElementById('input');
    if (movieSearch !== ''){
      newList = currentList.filter(item => {
        let itemLowerCase = item.title.toLowerCase();
        let dataValue = event.target.value.toLowerCase();
        return itemLowerCase.includes(dataValue);
      });
    } 
    // console.log(newList)
    this.setState({
      filtered: newList
    });
  }
 
handleClick(event){
    event.preventDefault()
    let currentList = this.props.movieSamples;
    var newList;
    var movieSearch = document.getElementById('input');
    if (movieSearch !== ''){
      newList = currentList.filter(item => {
        let itemLowerCase = item.title.toLowerCase();
        let dataValue = movieSearch.value.toLowerCase();
        console.log(dataValue);
        return itemLowerCase.includes(dataValue);
      });
    } 

    if (newList.length < 1){
      newList = [{title : "Sorry there is no movie with that match"}]
    }

    console.log(newList)
    this.setState({
      filtered: newList
    });
    searchForm.reset();
}

onClickButton(event){
  //Need to add a watch and to watch section for every toggle getting clicked 
  this.setState(state => ({
    isToggleOn : !state.isToggleOn
  }));
  // console.log('hi')
  alert("YOU'VE WATCHED THE MOVIE");
}

render() {
  return (
    <div> 
      <h2> Movie List </h2>
        <div>
          <form className="form" id="addItemForm">
            <input 
              type="text"
              id="addInput"
              placeholder="Add movie title"
            />
            <button className="addMovie" onClick={this.addMovie}>Add Movie!</button>
        </form>

        <form id="searchForm">
          <input type="text" 
            id="input" 
            onChange={this.handleSubmit} 
            placeholder="Search..." 
          />
          <button className="go" onClick={this.handleClick}> GO! </button>
        </form>

        </div>
        <div className="movieList">
          <div><MovieList movies={this.state.filtered} onClickButton={this.state.isToggleOn ? 'WATCHED' : 'NOT WATCHED'}/></div>
        </div> 
    </div>
  )
}
}

 



export default MovieMaker; 





