// import React from "react";
// class MovieCard extends React.Component {

// } //OR // these two methods we can use
import {Component}from "react";

class MovieCard extends Component{
    render(){
        return (
         <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img src="https://img.goodfon.com/original/1920x1080/6/2f/mstiteli-voina-beskonechnosti-avengers-infinity-war-komiks-1.jpg" alt="Poster" />
                </div>
                <div className="right">
                    <div className="title">The Avengers</div>
                    <div className="plot">Supernatural powers shown in the movie</div>
                    <div className="price">Rs. 199</div>

                    <div className="footer">
                        <div className="rating">8.9</div>
                        <div className="star-dis">
                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/56/56889.png" alt="Decrease" />

                            <img className="stars"
                             src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="Star" />

                            <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" alt="Increase" />
                             <span>0</span>


                        </div>
                        <button className="favourite-btn">Favourite</button>
                        <button className="cart-btn">Add to cart</button>
                    </div>
                </div>
            </div>
         </div>
        )
    }
}

export default MovieCard;

