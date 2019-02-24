import React, { Component, Fragment } from 'react';
import './style.css';
import {Col, Row} from 'reactstrap';

class Header extends Component {
    render() {
      const ColoredLine = ({ color, style }) => (
          <hr
              style={{
                  color: color,
                  backgroundColor: color,
                  height: 1,
                  border:style
              }}
          />
      );
      return (
          <Fragment>



            <div class="title">
              <Row>
                <Col xs="4">
                  <h3>TravelPal</h3>
                </Col>

                <Col xs="2">
                  <h5><a href='/'>Book Now</a></h5>
                </Col>

                <Col xs="2">
                  <h5><a href='/'>Become a Host</a></h5>
                </Col>


                <Col xs="2">
                  <h5><a href='/'>Register</a></h5>
                </Col>


                <Col xs="2">
                  <h5><a href='/'>Log In</a></h5>
                </Col>
              </Row>
            </div>
            <ColoredLine/>

          </Fragment>

      );
    }
  }

  export default Header;
