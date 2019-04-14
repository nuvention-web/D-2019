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


class WideContentBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="banana">
        <CardImg className="wut" src={require('../../../'+this.props.photo)} alt="static image" />
        <h2 className="floatything"> bla bla </h2>
        </div>
    );
  }
}


export default WideContentBlock;
