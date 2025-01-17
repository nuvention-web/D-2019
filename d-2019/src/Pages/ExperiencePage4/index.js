import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container, CardDeck, Card, CardGroup,Button, Col} from 'reactstrap';
// import Header from 'Components/Header';
// import EventList from 'Components/EventList';
import HostDetail from './HostDetail';
import ExperienceDetail from './ExperienceDetail';
import Testimonial from './Testimonial';
import Itinerary from './Itinerary';
import TourInclusion from './TourInclusion';
import BringToTour from './BringToTour';
import Customization from './Customization';
import ExperienceTitle from './ExperienceTitle';
import ExperienceDescription from './ExperienceDescription';
import Video from './Video';
import Carousel from './Carousel';
import './style.css';
import Calendar from 'react-calendar';




class ExperiencePage4 extends Component {

    render() {

      const tileClassNames = ({ date, view }) => (date.getDate() < 8 && date.getDay() === 4) || (date.getDate() > 14 && date.getDate() < 21 && date.getDay() === 4) ? 'eventdate' : '';
      const availables = ({ date, view }) => (date.getDate() < 8 && date.getDay() === 4) || (date.getDate() > 14 && date.getDate() < 21 && date.getDay() === 4) === 4;
      const unavailables = ({ date, view }) => !((date.getDate() < 8 && date.getDay() === 4) || (date.getDate() > 14 && date.getDate() < 21 && date.getDay() === 4));


      return (
        <Fragment>
          <Container className="cc">

          <header class="sticky-sidebar">
          <h7><b>Calendar</b></h7>
            <Calendar
            tileClassName={tileClassNames}
            minDate={new Date()}
            tileDisabled={unavailables}
            />
            <Button href="https://www.airbnb.com/experiences/509428">Book Now</Button>
          </header>
          <div class="sticky-sidebar-content" >
            <body className="background_color" class="sandbox" >
              <CardDeck className="background_color">
                <div className="left_column">
                  <Card body className="card_padding light_mintbox background_color">
                    <HostDetail/>
                  </Card>
                </div>
                <div className="right_column background_color">
                  <Card body className="dark_mintbox background_color">
                    <ExperienceTitle/>
                  </Card>
                  <Card body className="light_mintbox background_color">
                    <ExperienceDetail/>
                  </Card>
                  <Card body className="empty_box111  dark_mintbox  background_color">
                    <ExperienceDescription />
                  </Card>
                </div>


              </CardDeck>
              <br></br>
              <Carousel/>
              <Itinerary/>
              <div className='bringit'>
                <BringToTour/>
                </div>

            </body>
            <div className="custom">
              <Button className="button_color"  href="https://www.chicagofoodways.com/faqs/">Ask Eric a Question!</Button>
              </div>
          </div>
          </Container>
        </Fragment>
      );
    }
  }

export default ExperiencePage4;

//
// <div className='itllmakeyouliveforever'>
//   <Testimonial/>
//   </div>
