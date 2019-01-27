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

class MovieMaker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: [
        { title: "Hackers"},
        { title: "The Grey"},
        { title: "Sunshine"},
        { title: "Ex Machina"},
        { title: "Mean Girls"}
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)    
  }
  
   handleSubmit(event){ 
    //movies equals all of the movie titles
    movies = this.props.movie.title 
  for (var i = 0; i < movies.length; i++){
    if (movies[i] === event.target.value){
      return movies[i]
  }
  }
    //need to check what's in the search bar 
      //If what's in the search bar matches a movie title 
        //return movie title
      //Else show nothing    
  }

 
  
  render() {
    return (
      <div>
        <h2>Movie List:</h2>
        <form onSubmit={this.handleSubmit}>
    <input type="text" className="input" placeholder="Search..." />
    <input type="submit" value="Go!" />
        {this.state.movies.map(movie => (
          <li key={movie.id}>
            <label>
              <span>{movie.title}</span>
            </label>
          </li>
        ))}
        </form>
      </div>
    )
  }
}



export default MovieMaker; 