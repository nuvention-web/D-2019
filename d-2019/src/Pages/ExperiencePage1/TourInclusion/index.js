import React, { Component, Fragment } from 'react';
import {Card,Container, CardText} from 'reactstrap';

class TourInclusion extends Component {

    render() {


      return (
        <Fragment>
          <Container>
<Card>
<CardText>
Price: $100
</CardText>
<CardText>
Food Highlights:
1893 World's Fair Brownies,
Locally Crafted Beer (non-alcohol options too),
Dumplings,
Taiwanese Boba (Tapioca) Tea/Smoothie,
Mexican Street Food-Tamales and Carnitas,
Churros,
Italian Bombolinis
​</CardText>
<CardText>
Included:
Informational Guide, All Food and Drinks, CTA Day Pass
</CardText>
</Card>
          </Container>
        </Fragment>
      );
    }
  }

export default TourInclusion;
