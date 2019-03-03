import React, { Component, Fragment } from 'react';
import {Button, Container} from 'reactstrap';
import EventDesc from 'Components/EventList/EventBlock/EventDesc';
import Map from 'Components/Map';
import {Row, Col, Card }from'reactstrap';
import {  Link , NavLink} from 'react-router-dom';
import './style.css';

class EventDetail extends Component {

  state = {
    name: 'Historic Jazz Bar',
    detail: 'video/image about this tour',
    description: 'This event is really fun',
    location: '1925 Sherman Ave, IL 60201',
    currency: "$",
    value: 49.99,
    groupsize: 10,//we need to make this all connected. currently hard coded
    duration_hr: 3,
    duration_min: 30,
    prepare: "Prepare X, Y, Z",
    host_desc: "This host is awesome",



  };



    render() {

      return (
        <Container>
          <h1 className="location_name">{this.state.name}</h1>
          <h3>{this.state.detail}</h3>

          <Row>

            <Col>

              <div class="description">
                <h4>Price: {this.state.currency} {this.state.value}</h4>
                <h4> | </h4>
                <h4>Duration: {this.state.duration_hr} hr {this.state.duration_min} min</h4>
                <h4> | </h4>
                <h4>Group Size: {this.state.groupsize}</h4>
                <br></br>
                <h7>{this.state.description}</h7>
              </div>
              <div>
                <h5>Event Description: {this.state.description}</h5>
                <h5>About this Host: {this.state.host_desc}</h5>
                <h5>What to prepare: {this.state.prepare}</h5>
              </div>
          </Col>
          <Col>
              <div className="map">

              <Map/>
              </div>

            </Col>

          </Row>
          <NavLink to='/bookpage'> <Button>Book Now</Button></NavLink>



        </Container>
      );
    }
  }

  export default EventDetail;
