import React, { Component, Fragment } from 'react';
import EventBlock from './EventBlock';
import {Container, Row, Col, Card } from 'reactstrap';
import eventdata from './HostedEvents.json'



class EventList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: eventdata['events'], //require('Components/EventList/HostedEvents.json')['events'],
      events: []
    };
  }
    render() {
      let i=0;
      let L =[];

        while (i < this.state.data.length) {
        L.push(<Col sm="4"><EventBlock
          title={this.state.data[i]['title']}
          currency={this.state.data[i]['currency']}
          duration={this.state.data[i]['duration']}
          groupsize={this.state.data[i]['groupsize']}
          price={this.state.data[i]['price']}
          hostid={this.state.data[i]['hostid']}
          photo={this.state.data[i]['photo']} 
          category={this.state.data[i]['category']}/>
          </Col>);
          i++;
        }


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
            <Row>{L}</Row>

          </Container>
      );
    }
  }

  export default EventList;
