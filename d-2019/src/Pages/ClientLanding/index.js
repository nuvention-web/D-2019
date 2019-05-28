import React, { Component, Fragment } from 'react';
import {Card, CardImg, CardTitle, CardImgOverlay, CardBody, Button, Row, Col, CardText, Container} from 'reactstrap';
import './style.css';
import './_slick-theme.scss';
import './_slick.scss';
import SearchField from 'react-search-field';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const eric = ["Eric", "logansquare", "beer", "breweries", "local beer", "local breweries", "boardgame", "snack", "chicago snack", "weekday", "Thursday", "relaxing", "social", "fun", "interesting", "community", "experiential", "recommendations", "low price", "$22", "below $25", "below $65", "below $100", "3 hours", "intimate", "curated", "best neighborhood", "light", "open", "airy", "fantastic people", "afternoon", "afternoon games", "eating", "drinking", "shopping", "nerdy", "Chicagoan", "40 taps", "21 years elder", "jokes", "stories", "trivia"];
    const kari = ["Kari", "downtown", "Chinatown", "west loop", "Hilton Palmer House Hotel", "Pilsen", "European", "Mexican", "crafted beer", "dumplings", "tea", "boba", "Taiwanese", "Tapioca", "smoothie", "street food", "tacos", "tamales", "carnitas", "churros", "Italian", "Bombolinis", "brownies", "1893 World\u2019s Fair Brownies", "weekday", "Monday", "Thursday", "Friday", "weekend", "Sunday", "CTA day pass", "high price", "4 hours", "below $100", "$99", "guide", "cultural tours", "private", "custom", "weekly", "scheduled", "explore", "neighborhoods", "authentic foods", "connect", "606 tours", "sustainable tourism", "community", "beaten path", "signature", "overview of Chicago", "history", "unique", "architecture", "people", "foods", "Great Chicago Fire", "skyscraper", "metropolis", "adventure", "delicious", "day tour", "oldest hotel", "Palmer House kitchen", "vibrant", "shops", "art murals", "trendy"];
    const phyllis = ["Phyllis", "Argyle", "Andersonville", "north side", "cultures", "cultural tours", "historical tours", "food tours", "immigrants", "Asia", "Southeast Asia Community", "lessons", "making food", "making Vietnamese summer rolls", "Vietnam", "Middle East", "Sweden", "diverse food", "stumble", "film studio", "silent film", "Hollywood", "star", "Vikings", "Swedish", "speakeasy", "Lebanese", "guided tasting", "Middle East spice", "spice tasting", "apple pie", "dessert", "Food & Wine", "best in America", "lunchtime", "Wrigley Field", "activity", "cubs night games", "Persian", "weekend", "Saturday", "Sunday", "walking", "neighborhood", "explore neighborhood", "medium price", "$62", "below $65", "below $100", "3.5 hours", "chicago foodways", "mix of cultures", "local family business", "cozy", "pie shop", "hole-in-the-wall restaurant", "best Vietnamese food", "Nha Hang Vietnam", "banh mi shop", "Michelin rewards", "Zagat awards", "Ba Le Sandwich shop", "first and best", "Swedish American Museum", "royal visit", "Scandinavian crafts", "designer good", "1893 Columbian Exposition", "Svea restaurant and Simon\u2019s tavern", "cute", "tiny", "friendly", "old", "stories", "neighborhood history", "middle east bakery & grocery", "fresh", "pita", "hummus", "1981", "grocery", "taste", "first slice pie cafe", "non-profit", "sweet", "fun", "adventure"];


class ClientLanding extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      exps: ""
    };

    this.toggle = this.toggle.bind(this);
    this.wordyToggle = this.wordyToggle.bind(this);
  }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
      exps: prevState.exps
    }));
  };

  wordyToggle(val,event){
    let explist = [];
    if(kari.includes(val)){
      explist.push('kari');
    }
    if(eric.includes(val)){
      explist.push('eric');
    }
    if(phyllis.includes(val)){
      explist.push('phyllis');
    }
    this.setState(prevState => ({
      modal: !prevState.modal,
      exps: explist.toString()
    }));
  };

  render() {

    const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    
    return (
      <Container>
      <Row className='navheading'>

        <Col xs="8"><Button href="https://forms.gle/mCGoaEppXdJnjqHb7">Be a FoodXP Insider!</Button></Col>

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
      <SearchField 
  placeholder='Search experiences...'
  onEnter={this.wordyToggle}
/>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your Booking Has Been Confirmed</ModalHeader>
          <ModalBody>
            {this.state.exps}
          </ModalBody>
        </Modal>
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

              <Button href='http://d-2019.firebaseapp.com/experiencepage4'>Explore More</Button>
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
