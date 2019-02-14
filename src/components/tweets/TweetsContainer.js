import React, { Component } from 'react';
import axios from 'axios';

class TweetsContainer extends Component {

	state = {
		tweets : []
	};

	componentWillMount = () => {
		axios.get('/get')
		.then( res => {
			const tweets = res.data;
			this.setState({tweets : tweets})
		})
	}

	render () {
		return (
      <ul>
        { this.state.tweets.map(tweet => <li>{tweet.text}</li>)}
      </ul>
			)
	}
}

export default TweetsContainer;