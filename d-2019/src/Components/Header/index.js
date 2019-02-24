import React, { Component, Fragment } from 'react';
import './style.css';

class Header extends Component {


    render() {

      return (
          <Fragment>
            <div class="title">
              <h3>TravelPal</h3>

              <h4><a href='/'>Book Now</a></h4>
              <h4> | </h4>

              <h4> | </h4>
              <h4><a href='/'>Become a Host</a></h4>

              <h4> | </h4>
              <h4><a href='/'>Register</a></h4>

              <h4> | </h4>
              <h4><a href='/'>Log In</a></h4>
            </div>
          </Fragment>

      );
    }
  }

  export default Header;
