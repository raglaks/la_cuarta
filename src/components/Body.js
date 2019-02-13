import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Head from './Head';

class Body extends Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    render() {

        return(

            <Container textAlign='center'>

                <Head />

            </Container>

        )

    }

}

export default Body;