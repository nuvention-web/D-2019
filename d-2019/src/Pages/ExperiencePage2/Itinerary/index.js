import React, { Component, Fragment } from 'react';
import {Container, Card, CardBody, CardText,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';

import './style.css';

class Itinerary extends Component {

    render() {


      return (
        <Fragment>
          <Container>
            <Card inverse>
            <CardImg width="100%" src={require('../../../static/img/velvet_background.png')} alt="Card image cap" />
            <CardImgOverlay>
              <CardTitle className="itinery no_indent">
              Detailed Itinerary
              </CardTitle>
              <CardText className="itinery indent">DATE: SATURDAY MAY 4, 2019
              </CardText>

              <CardText className="itinery indent">PRICE: $10 cover charge (Star Wars fan or not, come dressed in costume and we'll waive the cover charge)
              </CardText>

              <CardText className="itinery indent">
              Ages 21+
              </CardText>
              <CardText className="itinery indent">
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
