import React, { Component, Fragment } from 'react';
import { Host } from 'Components/Users';
import { Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import staticImage1 from 'static/img/event1.jpg';
import staticImage2 from 'static/img/event2.jpg';
import staticImage3 from 'static/img/event3.jpg';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


/*
- title
- location
- price 
- category
- duration
- groupsize
- included
- description
- preperations
- photo
*/


class EventBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={staticImage1} alt="static image" />
        <CardBody>
          <CardTitle><h4>{this.props.title}</h4></CardTitle>
          <CardSubtitle>
          <div className="description">
            <h3>Price: {this.props.price}</h3>
            <h4> | </h4>
            <h3>Duration: {this.props.duration}</h3>
            <h4> | </h4>
            <h3>Group Size: {this.props.groupsize}</h3>
            <br></br>
          </div>
          </CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <NavLink to='/eventpage'> <Button color="primary">Detail</Button></NavLink>
        </CardBody>
      </Card>
    );
  }
}


export default EventBlock;
