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




class ExperiencePage2 extends Component {

    render() {

      return (
        <Fragment>
          <Container>
          <header class="sticky-sidebar">
            <h5>Available Dates: 12/1,~~~</h5>
            <h5>Contact Detail: </h5>
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
              <TourInclusion/>
              <BringToTour/>
            </body>
              <div className="custom">
                <Customization/>
                <br></br>
                <Col><Button>Book Now</Button></Col>
              </div>
          </div>
          </Container>
        </Fragment>
      );
    }
  }

export default ExperiencePage2;
