import React, { Component, Fragment } from 'react';
import {Container, Card, CardBody, CardText,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';

class Itinerary extends Component {

    render() {


      return (
        <Fragment>
          <Container>
            <Card inverse>
            <CardImg width="100%" src={require('../../../static/img/velvet_background.png')} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle>
              <big>  Detailed Itinerary</big>
              </CardTitle>
              <CardBody>
              DATE: SATURDAY MAY 4, 2019
              </CardBody>

              <CardText>
              PRICE: $10 cover charge (Star Wars fan or not, come dressed in costume and we'll waive the cover charge)
              </CardText>

              <CardText>
              Ages 21+
              </CardText>
              <CardText>
              Time: 5 p.m. | Live music starts at 8 p.m.
              </CardText>
              
              </CardImgOverlay>
            </Card>

          </Container>
        </Fragment>
      );
    }
  }

export default Itinerary;
