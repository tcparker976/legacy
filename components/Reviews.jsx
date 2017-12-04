import React, { Component } from 'react';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criticArr: ['IMDb', 'Rotten Tomatoes', 'Metacritic'],
      imagesArr: ['imdb_logo.png', 'rotten_tomatoes_logo.png', 'metacritic_logo.png'],
      urlsArr: ['http://www.imdb.com/title/' ,'https://www.rottentomatoes.com/m/', 'http://www.metacritic.com/movie/']
    }
  }

  render() {
    {console.log('REVIEWS PROPS:', this.props)}
    return (
      <div className="reviews">
        {
          this.state.criticArr.map((critic, index) => {
            let logoPath = '/images/' + this.state.imagesArr[index];
            let reviewPath = '';
            if(critic === 'IMDb') {
              reviewPath = this.state.urlsArr[index] + this.props.id;
            } else {
              let formatedTitle = this.props.title.toLowerCase().replace(' ', '-');
              reviewPath = this.state.urlsArr[index] + formatedTitle;
            }

            if(this.props.reviews[index] === undefined) {
              return (
                <div className="review" key={index}>
                  <a href={reviewPath}>
                    <img className="review-logo" src={logoPath}></img>
                    <h4>{this.state.criticArr[index]}</h4>
                  </a>
                  <h5>N/A</h5>
              </div>
            )
          } else {
            return (
              <div className="review" key={index}>
                <a href={reviewPath}>
                  <img className="review-logo" src={logoPath}></img>
                  <h4>{this.state.criticArr[index]}</h4>
                </a>
                <h5>{this.props.reviews[index].Value}</h5>
             </div>
            ) 
          }
        })
      }      
    </div>
    )      
  }
}

export default Reviews;