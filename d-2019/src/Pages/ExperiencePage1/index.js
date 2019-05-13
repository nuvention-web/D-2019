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
import './style.css';

import Calendar from 'react-calendar';




class ExperiencePage1 extends Component {

    render() {

        var days = [1, 4, 5, 0]
      const tileClassNames = ({ date, view }) => days.includes(date.getDay()) ? 'eventdate' : '';
      const availables = ({ date, view }) => days.includes(date.getDay());
      const unavailables = ({ date, view }) => !(days.includes(date.getDay()));

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
            <h7>Tours run on Mondays, Thursdays, Fridays and Sundays</h7>
            <br></br><Button href="https://www.606tours.com/">Book Now</Button>
          </header>
          <div class="sticky-sidebar-content">
            <body className="background_color" class="sandbox">
              <CardDeck  className="background_color">
                <div className="left_column">
                <Card body className="card_padding light_mintbox background_color">
                  <HostDetail/>
                </Card>
                </div>
                <div className="right_column background_color">
                  <Card body className="dark_mintbox background_color">
                    <ExperienceTitle/>
                  </Card>
                  <Card body className=" light_mintbox background_color">
                    <ExperienceDetail/>
                  </Card>
                  <Card body className="empty_box0 dark_mintbox background_color">
                    <ExperienceDescription />
                  </Card>
                </div>

              </CardDeck>
              <div className='itllmakeyouliveforever'>
                <Testimonial className='empty_box0'/>
                </div>
              <Itinerary/>
              <div className='bringit'>
                <BringToTour/>
                </div>
                <div className='othernotes'>
                <Card className="empty_box0 background_color">
                <ul>
                <p>Your CTA pass will let you explore Chicago after the tour is done for the rest of the day
<br></br>
You’ll choose your menu options in advance to account for dietary preferences
<br></br>
Yes, you can bring your baby, just let Kari know in advance</p>
</ul>
                </Card>
                </div>
            </body>
            <div className="custom">
              <Button href="mailto:info@606tours.com">Ask Kari a Question!</Button>
              </div>
          </div>
          </Container>
        </Fragment>
      );
    }
  }

export default ExperiencePage1;
