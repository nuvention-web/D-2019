import React, { Component, Fragment } from 'react';
import {Card,Container, CardText} from 'reactstrap';
import '../style.css';

class TourInclusion extends Component {

    render() {


      return (
        <Fragment>
          <Container>
<Card className="empty_box2">
<CardText>
Food Highlights:
​</CardText>
<CardText>
Included:
</CardText>

</Card>
          </Container>
        </Fragment>
      );
    }
  }

export default TourInclusion;
