import React, { Component, Fragment } from 'react';
import { Host } from 'Components/Users';
import { Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
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


class WideImageBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.words !== 'undefined') {
      return (
          <div className="wcb">
          <CardImg className="wcb-bgimg" src={require(this.props.photo)} alt="static image" />
          <div className="wcb-body">this.props.words</div>
          </div>
      );
    } else {
      return (
        <div className="wcb">
        <CardImg className="wcb-bgimg" src={require(this.props.photo)} alt="static image" />
        </div>
    );
    }
  }
}


export default WideImageBlock;
