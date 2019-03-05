import React, { Component, Fragment } from 'react';
import EventBlock from './EventBlock';
import {Container} from 'reactstrap';

class EventList extends Component {


    render() {
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
      return (
          <Container>
            <h2>Featured Food Journeys</h2>
            <ColoredLine color="black" />
            <EventBlock  
              title="such event, much fun"
              currency="$"
              price={49.99}
              duration="1.5 hours"
              groupsize="3-5" />
          </Container>
      );
    }
  }

  export default EventList;
