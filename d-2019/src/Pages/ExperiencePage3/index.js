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
import './style.css';
import Calendar from 'react-calendar';




class ExperiencePage3 extends Component {

    render() {

      const tileClassNames = ({ date, view }) => date.getDate() === 4 && date.getMonth() === 4 ? 'eventdate' : '';
      const availables = ({ date, view }) => date.getDate() === 4 && date.getMonth() === 4;
      const unavailables = ({ date, view }) => !(date.getDate() === 4 && date.getMonth() === 4);

      return (
        <Fragment>
          <Container>

          <header class="sticky-sidebar">
          <h7><b>Calendar</b></h7>
            <Calendar
            tileClassName={tileClassNames}
            minDate={new Date()}
            tileDisabled={unavailables}
            />
<br></br>
          <Button href="https://www.chicagofoodways.com/tour/saigon-stockholm-food-tour/">Book Now</Button>
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
                  <Card body className="empty_box11 background_color">
                    <ExperienceDescription />
                  </Card>
                </div>


              </CardDeck>
              <br></br>
              <div>
              <Video/>
              </div>

              <div className='itllmakeyouliveforever'>
                <Testimonial/>
                </div>
              <Itinerary/>
              <div className='bringit'>
                <BringToTour/>
                </div>

            </body>
            <div className="custom">
              <Button className="button_color"  href="https://www.chicagofoodways.com/faqs/">Ask Phyllis a Question!</Button>
              </div>
          </div>
          </Container>
        </Fragment>
      );
    }
  }

export default ExperiencePage3;
