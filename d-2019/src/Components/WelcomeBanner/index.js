import React, { Component, Fragment } from 'react';
import {Button, Container} from 'reactstrap';
// import EventList from '../EventList';
class WelcomeBanner extends Component {


    render() {

      return (
        <Container>
          <h1>Tell Stories Through Food</h1>
          <h3>Discover the local foodie experience in Chicago</h3>

            <Button class="btn btn-primary" type="submit">How it works?</Button>

        </Container>
      );
    }
  }

  export default WelcomeBanner;
