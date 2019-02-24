import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container, Button} from 'reactstrap';
import Header from '../../Components/Header';
import Alert from './Alert';


class Booking extends Component {


    render() {
      return (
        <Fragment>
          <Container>
              <header>
                <Header></Header>

                  <Link to={``} ><Button>Back to Main Page</Button>
                  </Link>


                  <Link to={`/eventpage`} > <Button>Back to Previous Page</Button>
                  </Link>

              </header>
              <body>
                <Alert/>
              </body>
            </Container>
        </Fragment>
      );
    }
  }
export default Booking;
