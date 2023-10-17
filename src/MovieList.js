import {Component} from "react";
import MovieCard from "./Moviecard";

class MovieList extends Component{
    constructor(){
        super();
        //Creating the state object 
        this.state = {
            movies : [
                {
                  id:1,
                  title: 'The Avengers',                  
                  plot:
                    "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
                  rating: '8.0',            
                  price: 99,            
                  stars: 0,
                  fav: false,
                  isInCart: false                  
                },
                {
                  id:2,
                  title: 'The Dark Knight',                  
                  plot:
                    'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',                  
                  rating: '9.0',            
                  price: 199,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                },
                {
                  id:3,
                  title: 'Iron Man',                 
                  plot:
                    'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',                  
                  poster:
                    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg',                  
                  rating: '7.9',            
                  price: 139,            
                  stars: 0,            
                  fav: false,
                  isInCart: false                  
                }]
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
    const {movies} = this.state;

    const movieId = movies.indexOf(movie);

    movies[movieId].isInCart  = !movies[movieId].isInCart;
    console.log(movies[movieId].isInCart);

    this.setState({
        movies
    })
  }





    render(){
        const {movies} = this.state;
        
        return (
            <>
            {/* <MovieCard  title={title}
                        plot={plot}
                        price={price}
                        rating={rating}
                        stars={stars}
                        fav={fav}
                        isInCart={isInCart}
            /> */}
            {/* <MovieCard movies = {this.state}/> */}

            {movies.map((movie) =>(
                <MovieCard movies = {movie}
                            key ={movie.id}
                            addStars = {this.handleIncStar}
                            decStars= {this.handleDecStar}
                            toggleFav={this.handleToggleFav}
                            toggleCart= {this.handleToggleCart}/>
            ))}
            </>
        )
    }
}

export default MovieList;
