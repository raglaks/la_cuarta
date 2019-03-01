import React, { Component } from 'react';
import Tweet from './Tweet'
import axios from 'axios';

class TweetsContainer extends Component {

	state = {
		tweets : []
	};

	componentWillMount = () => {

		console.log("MOUNTED");

		axios.get('/ping')
		.then( res => {

			console.log(res);
			// const tweets = res.data;
			// this.setState({tweets : tweets});

		});

	}

	render () {
		return (
			<div>
        	{ this.state.tweets.map(tweet => <Tweet tuit={tweet} />) }
        	</div>
		)
	}
}

export default TweetsContainer;