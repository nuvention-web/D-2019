import React, { Component, Fragment } from 'react';
import {Card, CardImg, CardTitle, CardImgOverlay, CardBody, Button, Row, Col, CardText, Container} from 'reactstrap';
import './style.css';
import './_slick-theme.scss';
import './_slick.scss';
// import Carousel from './Carousel';



class ClientLanding extends Component {
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

        <Col xs="8"><Button  className='pull-left' href="https://forms.gle/mCGoaEppXdJnjqHb7">Sign Up to Receive Updates on Both New and Current Experiences</Button></Col>

        <Col><a  href="./"><CardImg className='logo paddedlogo pull-right' src={require('static/img/logo2.png')} /></a></Col>
      </Row>
      <Row className='introducing'>
        <div>




<div className="banner imgimg">
      <Card   inverse>
          <CardImg className="banner" width="100%" src={require('static/img/landing_banner.png')} alt="Card image cap" />
          <CardImgOverlay className='overlaything imgimg1'>
            <CardTitle>
            <big> Indulge in flavorful local experiences</big>
            </CardTitle>
            </CardImgOverlay>
          </Card>
</div>



        <h3 className="hi">FoodXP connects foodies (like you!) with Chicago area tour guides and venues offering local and unique culinary experiences</h3>
        </div>
      </Row>
      <Row className='block2'>
        <div>
        <h2 className="large-text">Explore the Chicago Area Food Scene</h2>
        </div>
      </Row>

      <Row className='details justify-content-center'>
      <h1 className="large-text one"><b>How It Works</b></h1>
        <Col className='detail detail1'>
        <h2 className='blob'> Select A Featured Experience </h2>
        <h4> Pick from neighborhood tours and unique events </h4>
        </Col>
        <Col className='detail detail2'>
        <h2 className='blob'> Learn About The Experience </h2>
        <h4> Browse dates and times, location, general itinerary, menu options, and diet accommodations </h4></Col>
        <Col className='detail detail3'>
        <h2 className='blob'> Learn About Your Host </h2>
        <h4> Ask questions, connect on social, and see what others have to say </h4></Col>
        <Col className='detail detail4'>
        <h2 className='blob'> Book and Attend Your Experience </h2>
        <h4> Reserve your spot, receive confirmation, and enjoy the best of Chicago's local eats </h4></Col>
      </Row>

      <Row>

      <h1 className="large-text  one two">Featured Experiences </h1><br></br>
      </Row>
      <Row>
          <Col>
        <Card inverse>
            <CardImg className='expimg' width="100%" src={require('static/img/Chicago.png')} alt="Card image cap" />
            <CardImgOverlay className='overlaything'>
              <CardTitle className='three'>
              <big>  The Chicago Tour</big>
              </CardTitle>
              <CardBody>
              Neighborhoods: Downtown, Chinatown, Pilsen, and West Loop
              </CardBody>

              <CardText>
            Price: <br />
              Duration: 4 hours
              </CardText>
              <Button href='http://d-2019.firebaseapp.com/experiencepage1'>Explore More</Button>
              </CardImgOverlay>
            </Card>
            </Col>
            <Col>
            <Card inverse>
            <CardImg className='expimg' width="100%" src={require('static/img/Eric_crop.png')} alt="Card image cap" />
            <CardImgOverlay className='overlaything'>
              <CardTitle className='three'>
              <big>  Drink Beer, Play Games, Love Chicago</big>
              </CardTitle>
              <CardBody>
              Price: $22
              </CardBody>

              <CardText>
              Location: Navigator Taproom, Logan Square
              </CardText>

              <CardText>
              Time: 6:30pm
              </CardText>

              <Button href='http://d-2019.firebaseapp.com/experiencepage3'>Explore More</Button>
              </CardImgOverlay>
            </Card>
            </Col>

      </Row>
      <Row>
      <Col>
      <Card inverse>
      <CardImg className='expimg' width="50%" src={require('static/img/Saigo_crop.png')} alt="Card image cap" />
      <CardImgOverlay className='overlaything'>
        <CardTitle className='three'>
        <big>  Saigon to Stockholm Food Tour</big>
        </CardTitle>
        <CardBody>
        Price: $62 per guest
        </CardBody>

        <CardText>
        Time: 11:30am - 3:00pm
        </CardText>

        <CardText>
        Duration: 3.5 hours
        </CardText>

        <Button href='http://d-2019.firebaseapp.com/experiencepage3'>Explore More</Button>
        </CardImgOverlay>
      </Card>
      </Col>
      <Col>
      </Col>

      </Row>
      <Row>
        <div>
          <h5>Hit us up on <b><a className='color_email' href="mailto:foodxpnu@gmail.com">foodxpnu@gmail.com</a> with any questions</b></h5>
        </div>

      </Row>
    </Container>
    );
  }
}

export default ClientLanding

//
// <Col><Button  href="#">How it works</Button></Col>
// <Col><Button  href="#">Subscription Plan</Button></Col>
//   <Col><Button href="#">Login</Button></Col>
