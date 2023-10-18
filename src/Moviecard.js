// import React from "react";
// class MovieCard extends React.Component {

// } //OR // these two methods we can use
import {Component}from "react";

class MovieCard extends Component{



    render(){
        console.log(this.props);

        const {movies, addStars, decStars, toggleFav, toggleCart} = this.props;

        // const {movies:data} = this.props;
        // console.log(data);
        // const {title, plot, price, rating,stars,fav,isInCart} = data; we can write it like this also
    
        const {title, plot, poster, price, rating,stars,fav,isInCart} =  this.props.movies;
        

     



        return (
         <div className="main">
                <div className="movie-card">

                {/**Left section of Movie Card */}
                <div className="left">
                    <img alt="poster" src={poster} />
                </div>
                <div className="right">
                    {/* <div className="title">{this.state.title}</div> */}
                    <div className="title">{title}</div>
                    <div className="plot">{plot}</div>
                    <div className="price">Rs. {price}</div>

                    <div className="footer">
                        <div className="rating">
                            {rating}
                        </div>
                        <div className="star-dis">
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" alt="Decrease" 
                            onClick={()=> {decStars(movies)}}
                            />

                            <img className="stars"
                             src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Star"
                              />

                            {/* <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="Increase"
                            onClick={this.addStars.bind(this)} /> this is on way of binding*/}
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="Increase"
                            onClick={() => {addStars(movies)}} 
                            />
                             <span>{stars}</span>


                        </div>

                        {/* { fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-Favourite</button>:
                        <button className="favourite-btn" onClick={this.handleFav}>Favourite</button>}
                        */}
                        
                        <button className={fav?"unfavourite-btn":"favourite-btn"}
                        onClick={()=> {toggleFav(movies)}}>{fav?"Unfavourite":"Favourite"}</button>

                        {/* {isInCart ?<button className="rm-cart-btn" onClick={this.handleAddCart}>Remove from cart</button>:
                          <button className="cart-btn" onClick={this.handleAddCart}>Add to cart</button>} */}

                        <button className={isInCart?"rm-cart-btn":"cart-btn"}
                        onClick={()=> {toggleCart(movies)}}>{isInCart?"Remove From Cart ":"Add To Cart"}</button>
                      
                        
                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default MovieCard;

