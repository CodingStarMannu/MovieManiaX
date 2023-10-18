import {Component} from "react";
import MovieCard from "./Moviecard";


class MovieList extends Component{
 
    render(){
        const {movies,addStars,decStars,toggleCart,toggleFav} = this.props;
        console.log(this.props);
        
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
                            addStars = {addStars}
                            decStars= {decStars}
                            toggleFav={toggleFav}
                            toggleCart= {toggleCart}/>
            ))}
            </>
        )
    }
}

export default MovieList;
