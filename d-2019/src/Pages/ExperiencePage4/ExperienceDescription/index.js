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
Food Highlights:
​</CardText>
<CardText>
Local beers and brews


​</CardText>
<CardText>
Chicago snacks (local products whenever possible!)
​</CardText>


        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceDescription;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
