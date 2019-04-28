import React, { Component, Fragment } from 'react';
import {CardImg, Button, Row, Col, Container} from 'reactstrap';
import './style.css';
import './_slick-theme.scss';
import './_slick.scss';
import Carousel from './Carousel';



class HostLandingPage extends Component {
  constructor(props){
    super(props);
  }


  render() {

    const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
//<Col><Button>How it Works?</Button></Col>}
//<Col><Button>Subscription Plan</Button></Col>
//<Col><Button>Login</Button></Col>
    return (
      <Container>
      <Row className='navheading'>

        <Col xs="8"><Button  className='pull-left' href="https://docs.google.com/forms/d/19MSCHVHIKyJ6RbTH5JfDslj4OgPwJj0AuOmBV2__Im0/edit">Register</Button></Col>

        <Col><a  href="./"><CardImg className='logo paddedlogo pull-right' src={require('static/img/logo2.png')} /></a></Col>
      </Row>
      <Row className='introducing'>
        <div>
        <img className='bg-small-img logo' src={require('static/img/logo.png')} />
        <h2 className="large-text">Introducing FoodXP <br /> Your place to offer indulgent food experiences</h2>
        <Button href="https://docs.google.com/forms/d/19MSCHVHIKyJ6RbTH5JfDslj4OgPwJj0AuOmBV2__Im0/edit">Try FoodXP NOW</Button>
        </div>
      </Row>
      <Row className='details justify-content-center'>
        <Col className='detail detail1'>
        <img className='icons4' src={require('static/img/pen.png')} />
        Fill out the form to share details about your experience
        </Col>
        <Col className='detail detail2'>
        <img className='icons4' src={require('static/img/headphones.png')} />
        A member of our team will contact you for onboarding</Col>
        <Col className='detail detail3'>
        <img className='icons4' src={require('static/img/clock.png')} />
        Your page goes live!</Col>
        <Col className='detail detail4'>
        <img className='icons4' src={require('static/img/glasses.png')} />
        You are all set to offer your experience!</Col>
      </Row>
      <Row className='howitworks'>
        <Col><CardImg className='hiwimg' src={require('static/img/howitworks.png')}></CardImg></Col>
      </Row>
      <Row>
        <div>
        <h2>Sign up to offer your experience <br /> For Free</h2>
        <Button href="https://docs.google.com/forms/d/19MSCHVHIKyJ6RbTH5JfDslj4OgPwJj0AuOmBV2__Im0/edit">Start your free trial here</Button>
        </div>
      </Row>
      <Row>
        <div>
          <h5>Shoot us a message at <b><a className='color_email' href="mailto:foodxpnu@gmail.com">foodxpnu@gmail.com</a> with any questions!</b> with any questions</h5>
        </div>
      </Row>
    </Container>
    );
  }
}

export default HostLandingPage

//
// <Col><Button  href="#">How it works</Button></Col>
// <Col><Button  href="#">Subscription Plan</Button></Col>
//   <Col><Button href="#">Login</Button></Col>
