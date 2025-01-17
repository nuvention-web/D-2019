import React, { Component, Fragment } from 'react';
import {CardImg, Button, Row, Col, Container} from 'reactstrap';
import './style.css';

class EventPageV2 extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <Container>
      <Row className='navheading'>
        <Col><Button>How it Works?</Button></Col>
        <Col><Button>Subscription Plan</Button></Col>
        <Col><Button href="https://docs.google.com/forms/d/e/1FAIpQLSe2id-CFYI0ZQK8Uno8f8u6em9Ly7O2Ez-yX3W2italwIYbAA/viewform">Register</Button></Col>
        <Col><Button>Login</Button></Col>
        <Col><img className='logo' src={require('static/img/logo2.png')} /></Col>
      </Row>
      <Row className='introducing'>
        <div>
        <img className='bg-small-img logo' src={require('static/img/logo.png')} />
        <h2 className="large-text">Introducing FoodXP <br /> Your place to offer indulgent food experiences</h2>
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSe2id-CFYI0ZQK8Uno8f8u6em9Ly7O2Ez-yX3W2italwIYbAA/viewform">Try FoodXP NOW</Button>
        </div>
      </Row>
      <Row className='details'>
        <Col className='detail detail1'>Fill out the form to share details about your experience</Col>
        <Col className='detail detail2'>A member of our team will contact you for onboarding</Col>
        <Col className='detail detail3'>Your page goes live!</Col>
        <Col className='detail detail4'>You are all set to offer your experience!</Col>
      </Row>
      <Row className='howitworks'>
        <Col><CardImg className='hiwimg' src={require('static/img/howitworks.png')}></CardImg></Col>
      </Row>
      <Row>
        <div>
        <h2>Sign up to offer your experience <br /> For Free</h2>
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSe2id-CFYI0ZQK8Uno8f8u6em9Ly7O2Ez-yX3W2italwIYbAA/viewform">Start your free trial here</Button>
        </div>
      </Row>
    </Container>
    );
  }
}

export default EventPageV2