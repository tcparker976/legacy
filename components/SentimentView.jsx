import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class SentimentView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      largestSentiment: 0,
      emotionsArr: ['anger', 'disgust', 'fear', 'sadness', 'joy'],
      emoticonArr: ['anger.png', 'disgust.png', 'fear.png', 'sadness.png', 'joy.png']
    }

    this.handleSentiment = this.handleSentiment.bind(this);
  }

  handleSentiment() {
    let sentiment = this.props.sentiment;
    for (let key in sentiment) {
      sentiment[key] = Number(sentiment[key].toString().slice(0, 4));
      if (sentiment[key] > this.state.largestSentiment) {
        this.state.largestSentiment = sentiment[key];
      }
    }
  }

  render() {
    {console.log('SENTIMENT VIEW: ', this.props.sentiment)
     this.handleSentiment();
    }
    return (
      <div className='sentiment-view'>
        {this.state.emotionsArr.map((emotion, index) => {
          let emotionPath = '/images/mars-emojis/' + this.state.emoticonArr[index];
          if (this.state.largestSentiment === this.props.sentiment[this.state.emotionsArr[index]]) {
            return (
            <div className="sentiment" key={index}>
              <h6 className="emotion-type">{emotion}: {this.props.sentiment[this.state.emotionsArr[index]]}</h6>
              <img className="emoticon-largest" src={emotionPath}></img>
            </div>  
            )
          } else {
            return (
              <div className="sentiment" key={index}>
                <h6 className="emotion-type">{emotion}: {this.props.sentiment[this.state.emotionsArr[index]] || 'N/A  '}</h6>
                <img className="emoticon" src={emotionPath}></img>
              </div>  
              )
          }
        })}
      </div>
     )
    }
}

export default SentimentView;