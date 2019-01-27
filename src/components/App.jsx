//When the user visits the page, a small form should appear allowing a user to input their name and a message [x]

//When the user clicks the submit button, it should send an ajax request to the server and display the


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
      filtered : [
        { title: "The Shining", description: "this is a movie"},
        { title: "Batman Begins", description: "this is a movie"},
        { title: "Batman Returns", description: "this is a movie"},
        { title: "Batman the Dark Night Rises ", description: "this is a movie"}
      ]
   }
    // this.handleSubmit = this.handleSubmit.bind(this);  
    // this.handleClick = this.handleClick.bind(this);  
    this.addMovie = this.addMovie.bind(this);
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
    var newItem = document.getElementById("addInput");
    var form = document.getElementById("addItemForm");
        //The case where it's undefined
    if (newItem.value !== ""){
      console.log(newItem.value)
      list.push({title: newItem.value});

      this.setState({
        filtered : list
      });
      // newItem.classList.remove("is-danger")
    } else{
      newItem.classList.add("is-danger")
    }
  }
  
  // handleSubmit(event){
  //   let currentList = [];
  //   let newList = [];
  //   //If what's plugged in isn't an empty string
  //   if (event.target.value !== ''){
  //     currentList = this.props.movieSamples;
  //     newList = currentList.filter(item => {
  //       let itemLowerCase = item.toLowerCase();
  //       let dataValue = event.target.value.toLowerCase();
  //       return itemLowerCase.includes(dataValue);
  //     });
  //   } else{
  //     newList = this.props.movieSamples;
  //   }
  //   this.setState({
  //     filtered: newList
  //   });
  // }
 
  // handleClick(event){
  //   event.preventDefault();
  //   //need to create functionality for it to use the search bar value and look up items with the same string name
  //   console.log("this worked");
  // }
 
  
  render() {
    return (
      <div> 
        <h2> Movie List </h2>
          <div>
            <form className="form" id="addItemForm">
              <input 
                type="text"
                className="input"
                id="addInput"
                placeholder="Add movie title"
              />
              <button className="addMovie" onClick={this.addItem}> Add Movie!</button>
          </form>

          </div>
          <div className="movieList">
            <u1>
            <div><MovieList movies={sampleMovies}/></div>
            </u1>
          </div> 
      </div>
    )
  }
}

// }




export default MovieMaker; 