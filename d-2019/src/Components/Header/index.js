import React, { Component, Fragment } from 'react';
import './style.css';
import {Button, Col, Row} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import fire from 'config/Fire';
import logoImage from 'static/img/logo.png';

var email = 'not logged in';
var isuser = false;




fire.auth().onAuthStateChanged(function(user) {
  if (user) {
    email = user.email;
    isuser = true;
  }
  else {
    email = 'not logged in';
    isuser = false;
  }
});
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          user: 'not logged in'
        }
        this.logout = this.logout.bind(this);
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
      let lastlink;
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
      if (isuser){
        lastlink = <h5><element onClick={this.logout}>Logout</ element></h5>
      }
      else {
        lastlink = <h5><NavLink to='/loginpage'>Login</ NavLink></h5>
      }
      return (
          <Fragment>
            <div className="title">
              <p>{email}</p>
              <Row>
                <Col>
                  <NavLink to='/'><img className="logoImage" src={logoImage}  alt="logo" /></NavLink>
                </Col>
                <Col>
                  <h5><NavLink to='/becomehost'>Become a Host</NavLink></h5>
                </Col>
                <Col>
                  <h5><NavLink to='signup'>Register</NavLink></h5>
                </Col>
                <Col>
                {lastlink}
                </Col>
              </Row>
            </div>
            <ColoredLine/>
          </Fragment>

      );
    }
  }

  export default Header;
