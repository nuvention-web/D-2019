import React, { Component, Fragment } from 'react';
import {Container} from 'reactstrap';

class Testimonial extends Component {

    render() {


      return (
        <Fragment>
          <Container>
          <i>“Fabulous food tour! Phyllis led us through the Argyle and Andersonville neighborhoods sampling foods and drinks from local Vietnamese, Swedish and Lebanese restaurants. Along with the food the group had a great history lesson on the area and the culture. Our guide was personable, knowledgeable and fun! Thoroughly enjoyed the tour and highly recommend it.” - Mel</i>

          <br></br>
          <br></br>
          <i>“We've lived near the Argyle and Andersonville neighborhoods for a few years and had no idea about some of the gems in our backyard! Phyllis is a fantastic guide who introduced us to restaurants and dishes we would not have found on our own. She pairs the culinary delights with historical context and interesting anecdotes for the locals on the tour. I highly recommend it!” - Ryan</i>
          <br></br>
          <br></br>
          <i>“I cannot say how FANTASTIC this tour was. Every new restaurant we went to I learned a new fact about the city's culture. Delicious, interesting, and so well executed. I would recommend this tour to anyone and definitely will be sending people to her in the future! I look forward to trying some of her other tours soon.” - Lindsay</i>

          </Container>
        </Fragment>
      );
    }
  }

export default Testimonial;
