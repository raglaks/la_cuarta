import React, { Component } from 'react';

class Tweet extends Component {
	render(){

		const url = `http://twitter.com/${this.props.tuit.user.screen_name}/status/${this.props.tuit.id_str}`;

		return(
			<p>
				<a href={url} rel="noopener noreferrer" target="_blank">{this.props.tuit.full_text}</a>
			</p>
			)
	}
}

export default Tweet;