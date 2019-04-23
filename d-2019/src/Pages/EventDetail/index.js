import React, { Component, Fragment } from 'react';
import {Button, Container} from 'reactstrap';
import Map from 'Components/Map';
import {Row, Col, Card }from'reactstrap';
import {  Link , NavLink} from 'react-router-dom';
import './style.css';
import staticImage1 from '../../static/img/event1.jpg';
import staticImage2 from '../../static/img/event1_host1.png';


class EventDetail extends Component {

  state = {
    name: 'Cheese 101 & Luxury Tasting',
    description: 'You will arrive at Off Color Taproom and get a beverage of your choice (pairing suggestions are provided). Then we will go over a brief 101, then go into a tasting of 5 artisanal cheeses each paired with an accompaniment and bread or crackers. You will hear the stories behind the cheese and learn how to properly enjoy them. Each person gets about 1/4lb of cheese so expect to leave feeling full and satisfied.',
    location: '1460 N Kingsbury St, Chicago, IL 60642',
    currency: "$",
    value: "80.00 per person",
    groupsize: "1-6",//we need to make this all connected. currently hard coded
    duration_hr: 2,
    // duration_min: 30,
    prepare: "This experience includes alcohol. Only guests who meet the legal drinking age will be served alcoholic beverages. Guests will also need to complete a form that indicates their preference of food choices and food allergies that they may have.",
    host_desc: "Susan Smith is a former cheesemonger turned cheese preacher. She began her cheese career behind the counter at Chicago's local cheese shop, Pastoral. She now devotes herself to enlightening cheese lovers with cheese classes and events.",
    included: "5 cheeses",
    category: "Food Tasting",
    address: "1460 N Kingsbury St, Chicago, IL 60642"

  };



    render() {

      return (
        <Container>
          <h1 className="location_name">{this.state.name}</h1>
          <br></br>
            <img top width="70%" src={staticImage1} alt="static image"/>

          <Row>

            <Col>

              <div className="description">
              <br></br>
                <h5>Price: {this.state.currency}{this.state.value}</h5>
                <h5>Duration: {this.state.duration_hr} hrs </h5>
                <h5>Group Size: {this.state.groupsize}</h5>
                <h5>Category: {this.state.category}</h5>
                <h5>Address: {this.state.address}</h5>
                <br></br>
                <h5>Event Description: </h5><h7>{this.state.description}</h7>
                <h5>What to prepare: </h5>
                  <h7>{this.state.prepare}</h7>
              </div>
              <div>
              <br></br>
                <h5>About this Host: </h5>
                  <img top width="50%" src={staticImage2} alt="static image"/>
                  <br></br>
                  <h7>{this.state.host_desc}</h7>
              </div>
              <br></br>
          </Col>
          <Col>
          <br></br>
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
