import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';


// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceDescription extends Component {

    render() {


      return (
        <Fragment>
        <Container>
        <Card>

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
Guide,
All food and drinks (noted above),
CTA day pass,
</CardText>
</Card>
        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceDescription;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
