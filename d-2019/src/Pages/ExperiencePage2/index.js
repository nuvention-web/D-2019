import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container, CardDeck, Card, CardGroup,Button, Col, Row} from 'reactstrap';
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

class ExperiencePage2 extends Component {
  state = {
      date: new Date(2019, 4, 4),
    }

    onChange = date => this.setState({ date })


    render() {

      return (
        <Fragment>
          <Container>
          <header class="sticky-sidebar">
            <h7><b>Available Dates:</b></h7>
            <Calendar
              onChange={this.onChange}
              value={this.state.date}
            />
            <h7><a href="#">Contact Detail</a></h7>
          </header>
          <div class="sticky-sidebar-content">
            <body class="sandbox">
              <CardDeck>
                <div className="left_column">
                  <Card body className="card_padding light_mintbox">
                    <HostDetail/>
                  </Card>
                </div>
                <div className="right_column">
                  <Card body className="dark_mintbox">
                    <ExperienceTitle/>
                  </Card>
                  <Card body className="light_mintbox">
                    <ExperienceDetail/>
                  </Card>
                  <Card body className="empty_box">
                    <ExperienceDescription />
                  </Card>
                </div>

              </CardDeck>


              <Testimonial/>
              <Itinerary/>


            </body>
              <div className="custom">
                <Customization/>
                <br></br>
                <Col><Button className="button_color">Book Now</Button></Col>
              </div>
          </div>
          </Container>
        </Fragment>
      );
    }
  }

export default ExperiencePage2;
// <TourInclusion/>
// <BringToTour/>
