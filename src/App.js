import MovieList from "./MovieList";
// import Navbar from "./Navbar";
import Navbar from "./NavbarModule";
import React from "react";
import { movies } from "./movieData";
class App extends React.Component {

  constructor(){
    super();
    //Creating the state object 
    this.state = {
      movies : movies, 
      cartCount :0
  } 
}

handleIncStar = (movie)=>{
const {movies} = this.state;

const movieId = movies.indexOf(movie);

if(movies[movieId].stars >=5){
    return;
}

movies[movieId].stars += 0.5;
this.setState({
  // movies: movies         //if keys and value  have same name than we can write it as follow
  movies
})
}

handleDecStar = (movie)=>{
const {movies} = this.state;

const movieId = movies.indexOf(movie);

if(movies[movieId].stars <=0){
    return;
}

movies[movieId].stars -= 0.5;

this.setState({
    movies
})
}

handleToggleFav = (movie)=>{
const {movies} = this.state;

const movieId = movies.indexOf(movie);

movies[movieId].fav  = !movies[movieId].fav;

this.setState({
    movies
})
}


handleToggleCart = (movie)=>{
let {movies,cartCount} = this.state;

const movieId = movies.indexOf(movie);

movies[movieId].isInCart  = !movies[movieId].isInCart;
console.log(movies[movieId].isInCart);

if(movies[movieId].isInCart){
  cartCount += 1;
}else{
  cartCount -=1;
}

this.setState({
    movies,
    cartCount
});

console.log(cartCount);

}

  render(){
    const {movies, cartCount} = this.state;
    
  return (
    <>
    <Navbar cartCount={cartCount}/>
    <MovieList movies = {movies}
                            key ={movies.id}
                            addStars = {this.handleIncStar}
                            decStars= {this.handleDecStar}
                            toggleFav={this.handleToggleFav}
                            toggleCart= {this.handleToggleCart}/>
    </>
  
  );
}
}

export default App;
