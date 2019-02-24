import React, { Component, Fragment } from 'react';
import EventBlock from './EventBlock';
// import LineDivisor from '../LineDivisor';
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
            <EventBlock>
            </EventBlock>
          </Container>
      );
    }
  }

  export default EventList;
