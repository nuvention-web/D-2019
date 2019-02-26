import React, { Component, Fragment } from 'react';
import './style.css';
import {Col, Row} from 'reactstrap';
import { NavLink} from 'react-router-dom';
import {Button} from 'reactstrap';
import fire from 'config/Fire';
import logoImage from 'static/img/logo.png';

class Header extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }


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

                <Col xs="2">
                  <img className="logoImage" src={logoImage}  alt="logo" />
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
                <h5>  <NavLink to='/loginpage'> Log In</NavLink></h5>
                <button onClick={this.logout}>Logout</button>
                </Col>
              </Row>
            </div>
            <ColoredLine/>

          </Fragment>

      );
    }
  }

  export default Header;
