import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';

import './style.css';
import '../style.css';
// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceTitle extends Component {
  state = {
    title: 'Drink Beer, Play Games, Love Chicago',
    detail: 'Are you a nerdy Chicagoan or traveler who loves beer and board games? If so, you’ve come to the right place. An avid board games player since 2009, I will teach you how to play new games or we can play one you already enjoy! Bottom line: get your game on and enjoy the best of Chicago breweries!'

  };
    render() {


      return (
        <Fragment>
        <Container>


          <h4><CardTitle><b>{this.state.title}<img className='logog' src={require('static/img/logo.png')} /></b></CardTitle></h4>
          <CardText>{this.state.detail}</CardText>
          <div>
            <Button  href="/">Book Now</Button>
            </div>

        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceTitle;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
