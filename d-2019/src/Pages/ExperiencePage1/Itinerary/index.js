import React, { Component, Fragment } from 'react';
import {Container, Card, CardBody, CardText,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';
import './style.css';

class Itinerary extends Component {

    render() {


      return (
        <Fragment>
          <Container className='imgcontainer'>
            <Card inverse>
            <CardImg className='expimg' width="100%" src={require('../../../static/img/chicago_chinatown.jpg')} alt="Card image cap" />
            <CardImgOverlay className='itinerarytext'>
              <CardTitle>
              <big>  Detailed Itinerary</big>
              </CardTitle>
              <CardBody>
              Pickup: Hilton Palmer House Hotel
              </CardBody>

              <CardText>
              Drop off: Downtown Loop
              </CardText>

              <CardText>
              10.30 to 11.30 a.m.: Downtown Loop
              </CardText>
              <CardText>
              11.30 to 12.30 p.m.: Chinatown
              </CardText>
              <CardText>
              12.30 to 1.30 p.m.: Pilsen
              </CardText>
              <CardText>
              1.30 p.m. to 2.30 p.m.: West Loop
              </CardText>
              </CardImgOverlay>
            </Card>

          </Container>
        </Fragment>
      );
    }
  }

export default Itinerary;
