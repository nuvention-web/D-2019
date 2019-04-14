import React, { Component, Fragment } from 'react';
import WideContentBlock from './WideContentBlock';
import {Container, Row, Col, Card } from 'reactstrap';
import blockdata from './HostRegistrationBlocks.json';
import './style.css';


class WideContentList extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: blockdata['blocks'], 
      events: []
    };
  }
    render() {
      let i=0;
      let L =[];

        while (i < this.state.data.length) {
        L.push(<Col className="widecontentblock"><WideContentBlock
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

      return (
          <Container className="wclcontainer" fluid="false">
            {L}

          </Container>
      );
    }
  }

  export default WideContentList;
