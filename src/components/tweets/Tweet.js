import React, { Component } from 'react';

class Tweet extends Component {
	render(){
		// const url = `http://twitter.com/${this.props.tuit.user.screen_name}/status/${this.props.tuit.id_str}`;

		//const rant = this.props.tuit;
		return(
			<p>
				{this.props.tuit}
			</p>
			)
	}
}

export default Tweet;