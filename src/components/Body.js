import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from './Head';
import TweetsContainer from './tweets/TweetsContainer'

class Body extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return(

            <Container textAlign='center'>

                <Head />
                <TweetsContainer />

            </Container>

        )

    }

}

export default Body;