import React, { Component, Fragment } from 'react';
import EventBlock from './EventBlock';
import {Container, Row, Col, Card } from 'reactstrap';

class EventList extends Component {
  constructor(props){
    super(props);
    this.state = { 
      data: require('Components/EventList/HostedEvents.json')['events'],
      events: []
    };
  }


    render() {
      /*
      let j;
      let L;
      let E = [];
      for (let i=0; i < this.state.data.length; i++){
        
        L = []
        j = i+3;
        while (i < j) {
        L.push(<EventBlock 
          title={this.state.data[i]['title']}
          currency={this.state.data[i]['currency']}
          duration={this.state.data[i]['duration']}
          groupsize={this.state.data[i]['groupsize']}
          price={this.state.data[i]['price']}
          hostid={this.state.data[i]['hostid']} />
          );
          i++;
        }
        E.push(
          <Row>{L}</Row>
        );
      }*/
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
          </Container>
      );
    }
  }

  export default EventList;
