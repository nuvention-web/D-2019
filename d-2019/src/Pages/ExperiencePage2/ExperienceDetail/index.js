import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';


// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceDetail extends Component {
  state = {
    currency: "$",
    value: "10 cover charge",
    time_start: "10.30 a.m",
    time_end: "2.30 p.m",
    time: "5 p.m. | Live music starts at 8 p.m.",
    transportation: "Public Transit",
    duration_hr: 4,
    date: "SATURDAY MAY 4, 2019",
    age: "21+"

  };
    render() {


      return (
        <Fragment>
        <Container>
                <CardText>Date: {this.state.date}</CardText>
                <CardText>Price: {this.state.currency}{this.state.value}</CardText>
                <CardText>Duration: {this.state.duration_hr} hrs </CardText>
                <CardText>Time: {this.state.time}</CardText>
                <CardText>Ages: {this.state.age} </CardText>
                <CardText>Mode of transportation: {this.state.transportation}</CardText>
        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceDetail;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
