import React, { Component } from 'react';

class Tweet extends Component {
	render(){
		const url = `http://twitter.com/${this.props.tuit.user.screen_name}/status/${this.props.tuit.id_str}`;
		return(
			<p>
				<a href={url} target="_blank" rel="noopener noreferrer">
				{this.props.tuit.text}
				</a>
			</p>
			)
	}
}

export default Tweet;