import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from 'Components/Header';
import EventDetail from './EventDetail';

class EventPage extends Component {


    render() {
      return (
        <Fragment>
          <Container>
              <header>
                <Header></Header>
                <Link to={``} >Back
                </Link>
              </header>
              <body>
                <EventDetail/>

              </body>
            </Container>
        </Fragment>
      );
    }
  }
export default EventPage;
