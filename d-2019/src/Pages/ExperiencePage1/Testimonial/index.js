import React, { Component, Fragment } from 'react';
import {Container} from 'reactstrap';

class Testimonial extends Component {

    render() {


      return (
        <Fragment>
          <Container>
          <i>“The neighborhoods we visited were unique, diverse and delicious! Kari was a great guide and was knowledgeable and friendly about so many aspects of Chicago.” - rockandrulemom (we will need her name)</i>

          <br></br>
          <br></br>
          <i>“Chinatown and Pilsen were our favorites. I had the best taco pastor ever at the Pilsen stop. Surprisingly the tour was perfect with my 2 year old in tow. Thank you for such a great experience!” - Elizabeth</i>

          </Container>
        </Fragment>
      );
    }
  }

export default Testimonial;
