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
          <Container>
          <header class="sticky-sidebar">
          <h7><b>Calendar</b></h7>
            <Calendar
            tileClassName={tileClassNames}
            minDate={new Date()}
            tileDisabled={unavailables}
            />
            <h7> <a href="https://www.606tours.com/">www.606tours.com</a></h7>
          </header>
          <div class="sticky-sidebar-content">
            <body class="sandbox">
              <CardDeck>
                <div className="left_column">
                <Card body>
                  <HostDetail/>
                </Card>
                </div>
                <div className="right_column">
                  <Card body>
                    <ExperienceTitle/>
                  </Card>
                  <Card body>
                    <ExperienceDetail/>
                  </Card>
                  <Card body>
                    <ExperienceDescription/>
                  </Card>
                </div>

              </CardDeck>
              <Testimonial/>
              <Itinerary/>
              <BringToTour/>
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
