import React, { Component, Fragment } from 'react';
import { Host } from 'Components/Users';
import { Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


class WideImageBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (typeof this.props.contents !== 'undefined') {
      return (
        <div className="wcb" style={{
          backgroundImage: 'url('+this.props.photo+')'
        }}>
          {this.props.contents}
        </div>
      );
    } else {
      return (
        <div className="wcb" style={{
          backgroundImage: 'url('+this.props.photo+')'
        }}>
        {this.props.contents}
        </div>
    );
    }
  }
}


export default WideImageBlock;
