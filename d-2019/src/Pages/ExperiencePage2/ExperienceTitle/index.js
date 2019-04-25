import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';


// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceTitle extends Component {
  state = {
    title: 'May the 4th Be With You Pop-Up Bar',
    detail: 'Themed cocktails, small plates, live music by the Justin Jay Trio, and a fully stocked cash bar.'

  };
    render() {


      return (
        <Fragment>
        <Container>

          <CardTitle>{this.state.title}</CardTitle>
          <CardText>{this.state.detail}</CardText>


        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceTitle;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
