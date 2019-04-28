import React, { Component, Fragment } from 'react';
// import EventList from './Components/EventList/index.js';
import { Container } from 'reactstrap';
import './style.css';


class SideBar extends Component {
  render() {
    return (
      <Fragment>
          <Container>
          <header class="sticky-sidebar">

          </header>
          <div class="sticky-sidebar-content">
                <body class="sandbox">

                </body>
          </div>
          </Container>
      </Fragment>
    );
  }
}
export default SideBar;
