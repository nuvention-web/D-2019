import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';


// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceDescription extends Component {

    render() {


      return (
        <Fragment>
        <Container>


<CardText>
Flavorful Highlights:
​</CardText>
<CardText>
Hands-on lesson in making Vietnamese summer rolls
​</CardText>
<CardText>
Toast with the Viking as you sip Swedish glögg
​</CardText>
<CardText>
Guided Lebanese and Persian spice tasting
​</CardText>
<CardText>
Apple pie that made Food & Wine’s list of Best in America
​</CardText>

        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceDescription;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
