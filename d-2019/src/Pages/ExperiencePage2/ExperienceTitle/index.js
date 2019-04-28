import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';

import './style.css';
// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceTitle extends Component {
  state = {
    title: 'May the 4th Be With You Pop-Up Bar',
    detail: 'Velvet Buffalo Cafe is known for its expertly crafted wine list and culinary menu, featuring small plates and stone-fired pizza, located in downtown Beloit, WI.'

  };
    render() {


      return (
        <Fragment>
        <Container>

          <h4><CardTitle><b>{this.state.title}<img className='logog' src={require('static/img/logo.png')} /></b></CardTitle></h4>
          <CardText>{this.state.detail}</CardText>


        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceTitle;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
