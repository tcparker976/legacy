import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criticArr: ['IMDb', 'Rotten Tomatoes', 'Metacritic']
    }

    const criticArr = this.state.criticArr;
  }

  render() {
    return (
      <div className="reviews">
      <h2 className="reviews-title">Reviews</h2>
         {
          this.state.criticArr.map((critic, index) => {
          if(props.movie.Ratings[index] === undefined) {
            return (
              <div className="review" key={index}>
                <h4>{this.state.criticArr[index]}</h4>
                <h5>N/A</h5>
            </div>
            )
          } else {
            return (
              <div className="review" key={index}>
                <h4>{this.state.criticArr[index]}</h4>
                <h5>{props.movie.Ratings[index]}</h5>
             </div>
            )
          } 
        })}
    </div>
    )      
  }
}

export default Reviews;