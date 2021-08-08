import React from 'react';
import StarRating from 'react-native-star-rating';
import {Component} from 'react/cjs/react.production.min';

class GeneralStarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 4.5,
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }

  render(props) {
    return (
      <StarRating
        starSize={18}
        fullStarColor="#f6c232"
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={rating => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default GeneralStarExample;
