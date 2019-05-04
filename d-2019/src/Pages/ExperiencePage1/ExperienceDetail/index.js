import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';


// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceDetail extends Component {
  state = {
    description: 'You will arrive at Off Color Taproom and get a beverage of your choice (pairing suggestions are provided). Then we will go over a brief 101, then go into a tasting of 5 artisanal cheeses each paired with an accompaniment and bread or crackers. You will hear the stories behind the cheese and learn how to properly enjoy them. Each person gets about 1/4lb of cheese so expect to leave feeling full and satisfied.',
    currency: "$",
    value: "99",
    time_start: "10.30 a.m",
    time_end: "2.30 p.m",
    transportation: "CTA Public Transit",
    duration_hr: 4

  };
    render() {


      return (
        <Fragment>
        <Container>
                <CardText>Price: {this.state.currency}{this.state.value}</CardText>
                <CardText>Duration: {this.state.duration_hr} hrs </CardText>
                <CardText>Time: {this.state.time_start} to {this.state.time_end} </CardText>
                <CardText>Mode of transportation: {this.state.transportation}</CardText>
        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceDetail;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
