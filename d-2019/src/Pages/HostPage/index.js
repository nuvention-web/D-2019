import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from 'Components/Header';
import EventList from 'Components/EventList';
import firebase from 'firebase';
// import Host from 

var storage = firebase.storage();
var storageRef = storage.ref();

class HostPage extends Component {

    render() {
      return (
        <Fragment>
          <Container>
              <header>
                <Header></Header>
              </header>
              <body>
                <EventList/>

              </body>
            </Container>
        </Fragment>
      );
    }
  }

export default HostPage;