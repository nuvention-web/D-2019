import React, { Component, Fragment } from 'react';
import {Container, Card, CardBody, CardText,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';
import './style.css';
import '../style.css';

class Itinerary extends Component {

    render() {


      return (
        <Fragment>
          <Container className='imgcontainer'>
            <Card inverse>
            <CardImg className='expimg' width="100%" src={require('../../../static/img/eric_background.jpg')} alt="Card image cap" />
            <CardImgOverlay className='itinerarytext1'>

            <div className="itinery4">
            How it Works:
            </div>
              <div className="itinery4">
              Fill out a brief survey so I can learn about you ahead of time
              </div>
              <div className="itinery4">
              We’ll meet at the Navigator Taproom in Logan Square
              </div>
              <div className="itinery4">
              You’ll pour your own beer from a selection of 40 taps!
              </div>
              <div className="itinery4">
              Skip the confusing rulebooks -- I’ll teach you one or two interesting new games!


              </div>
              <div className="itinery4">
              We’ll play and have fun, and expect some jokes, stories and trivia from me!

              </div>
              <div className="itinery4">
              I’ll give you recommendations for food, shopping and sightseeing in the area!
              </div>

              </CardImgOverlay>
            </Card>

          </Container>
        </Fragment>
      );
    }
  }

export default Itinerary;
