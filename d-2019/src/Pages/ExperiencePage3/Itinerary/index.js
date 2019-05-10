import React, { Component, Fragment } from 'react';
import {Container, Card, CardBody, CardText,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';
import './style.css';

class Itinerary extends Component {

    render() {


      return (
        <Fragment>
          <Container className='imgcontainer'>
            <Card inverse>
            <CardImg className='expimg' width="100%" src={require('../../../static/img/argyle.jpg')} alt="Card image cap" />
            <CardImgOverlay className='itinerarytext'>
              <CardTitle  className="itinery3 title3">
              <big>  Detailed Itinerary</big>
              </CardTitle>
              <div className="itinery3 baby3">
              Pickup: Nha Hang Vietnam Restaurant
              </div>
              <div className="itinery3 baby3">
              Nha Hang Viet Nam
              </div>
              <div className="itinery3 baby3">
              Ba Le Sandwich Shop
              </div>
              <div className="itinery3 baby3">
              Swedish American Museum
              </div>
              <div className="itinery3 baby3">
              Svea Restaurant and Simon’s Tavern
              </div>
              <div className="itinery3 baby3">
              Middle East Bakery & Grocery
              </div>
              <div className="itinery3 baby3">
              First Slice Pie Cafe
              </div>
              <div className="itinery3 baby3">
              Drop Off: 5357 N. Ashland Avenue (one mile from pickup)
              </div>
              </CardImgOverlay>
            </Card>

          </Container>
        </Fragment>
      );
    }
  }

export default Itinerary;
