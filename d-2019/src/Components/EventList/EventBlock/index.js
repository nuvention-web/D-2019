import React, { Component, Fragment } from 'react';
import { Host } from 'Components/Users';
import { Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import staticImage1 from 'static/img/event1.png';
import staticImage2 from 'static/img/event2.png';
import staticImage3 from 'static/img/event3.png';
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
      <Card className= "card_margin" body inverse >
        <CardImg top width="100%" src={require('../../../'+this.props.photo)} alt="static image" />
        <CardBody>
          <CardTitle className="description"><h5>{this.props.title}</h5></CardTitle>
          <CardSubtitle>
          <div className="description">
            <h5>Price: {this.props.currency}<b>{this.props.price}</b> per person</h5>

            <h5>Duration: {this.props.duration}</h5>

            <h5>Group Size: {this.props.groupsize}</h5>
            <h5>Category: {this.props.category}</h5>
          </div>
          </CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>

        </CardBody>
      </Card>
    );
  }
}


export default EventBlock;
//<NavLink to='/eventpage'> <Button color="primary">Detail</Button></NavLink>
