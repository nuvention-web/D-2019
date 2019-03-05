import React, { Component, Fragment } from 'react';
import './style.css';
import {Button, Col, Row} from 'reactstrap';
import { NavLink} from 'react-router-dom';
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
        lastlink = <Button onClick={this.logout}>Logout</ Button>
      }
      else {
        lastlink = <Button href='/loginpage'> Login</ Button>
      }
      return (
          <Fragment>



            <div className="title">
              <p>{email}</p>
              <Row>

                <Col xs="2">
                  <a href='/'><img className="logoImage" src={logoImage}  alt="logo" /></a>
                </Col>

                <Col xs="2">
                  <h5><a href='/BecomeHost'>Become a Host</a></h5>
                </Col>

                <Col xs="2">
                  <h5><a href='/signup'>Register</a></h5>
                </Col>


                <Col xs="2">
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
