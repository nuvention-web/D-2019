import React, { Component, Fragment } from 'react';
import {CardImg, Button, Row, Col, Container} from 'reactstrap';
import './style.css';

class HostLandingPage extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <Container>
      <Row className='heading'>
        <Col><Button>How it Works?</Button></Col>
        <Col><Button>Subscription Plan</Button></Col>
        <Col><Button>Register</Button></Col>
        <Col><Button>Login</Button></Col>
        <Col><img className='logo' src={require('static/img/logo2.png')} /></Col>
      </Row>
      <Row className='introducing'>
        <div>
        <img className='bg-small-img logo' src={require('static/img/logo.png')} />
        <h2 className="large-text">Introducing FoodXP <br /> Your place to offer indulgent food experiences</h2>
        <Button>Try FoodXP NOW</Button>
        </div>
      </Row>
      <Row className='details'>
        <Col className='detail'>Fill out the form to share details about your experience</Col>
        <Col className='detail'>A member of our team will contact you for onboarding</Col>
        <Col className='detail'>Your page goes live!</Col>
        <Col className='detail'>You are all set to offer your experience!</Col>
      </Row>
      <Row className='howitworks'>
        <Col><CardImg src={require('static/img/howitworks.png')}></CardImg></Col>
      </Row>
      <Row>
        <div>
        <h2>Sign up to offer your experience <br /> For Free</h2>
        <Button>Start your free trial here</Button>
        </div>
      </Row>
    </Container>
    );
  }
}

export default HostLandingPage