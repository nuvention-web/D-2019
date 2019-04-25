import React, { Component, Fragment } from 'react';
import {Container} from 'reactstrap';

class Testimonial extends Component {

    render() {


      return (
        <Fragment>
          <Container>
          <i>““We recently had a company meeting here. For lunch they served us buffet style with a great selection of sandwiches, salad and pizza! Everyone loved the food and the service was great.” -BClarke292 (we need names)</i>

          <br></br>
          <br></br>
          <i>“Came here for opening night and was delighted by the food and cocktails. Classy location with a well executed menu” - Laura</i>

          </Container>
        </Fragment>
      );
    }
  }

export default Testimonial;
