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
            console.log('REVIEWS: ', this.props);
          if(this.props.reviews[index] === undefined) {
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
                <h5>{this.props.reviews[index].Value}</h5>
             </div>
            )
          // } 
        }
      })
    }      
    </div>
    )      
  }
}

export default Reviews;