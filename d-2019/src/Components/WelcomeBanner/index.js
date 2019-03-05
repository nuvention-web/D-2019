import React, { Component, Fragment } from 'react';
import {Button, Container} from 'reactstrap';
import './style.css';
class WelcomeBanner extends Component {
          // <hr></hr>

    render() {

      return (
        <Container>
          <h1 className="story">Tell Stories Through Food</h1>
          <h3 className="localexp">Discover the local foodie experience in Chicago</h3>

          


          <div id="wrapper">
            <Button className="btn btn-primary" size="lg" type="submit">How it works?</Button>
          </div>
          <br></br>

        </Container>
      );
    }
  }

  export default WelcomeBanner;
