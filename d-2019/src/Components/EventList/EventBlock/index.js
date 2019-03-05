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
      <Card className= "card_margin" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardImg top width="100%" src={require('../../../'+this.props.photo)} alt="static image" />
        <CardBody>
          <CardTitle><h5>{this.props.title}</h5></CardTitle>
          <CardSubtitle>
          <div className="description">
            <h5>Price: <b>{this.props.price}</b>per person</h5>

            <h5>Duration: {this.props.duration}</h5>

            <h5>Group Size: {this.props.groupsize}</h5>
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
