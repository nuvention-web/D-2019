import React, { Component, Fragment } from 'react';
import Host from '../../Host';
import {Row, Col, Container, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
import staticImage1 from '../../../static/img/event1.jpg';
import staticImage2 from '../../../static/img/event2.jpg';
import staticImage3 from '../../../static/img/event3.jpg';
import EventDesc from './EventDesc';
import './style.css';
import {  Link , NavLink} from 'react-router-dom';




class EventBlock extends Component {


  state = {
    title: "JazzBar"
  };

    render() {
      return (
          <Container>
            <Row>
              <Col>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                  <CardImg top width="100%" src={staticImage1} alt="static image" />
                  <CardBody>
                    <CardTitle><h4>{this.state.title}</h4></CardTitle>
                    <CardSubtitle>
                        <EventDesc/>
                    </CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <NavLink to='/eventpage'> <Button color="primary">Detail</Button></NavLink>
                  </CardBody>
                </Card>
               </Col>
               <Col>
                <Card body inverse color="primary">
                  <CardImg top width="100%" src={staticImage2} alt="static image" />
                  <CardBody>
                    <CardTitle><h4>{this.state.title}</h4></CardTitle>
                    <CardSubtitle>
                        <EventDesc/>
                    </CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <NavLink to='/eventpage'><Button> Detail</Button></NavLink>
                  </CardBody>
                </Card>
              </Col>
              <Col>
               <Card body inverse color="info">
                 <CardImg top width="100%" src={staticImage3} alt="static image" />
                 <CardBody>
                   <CardTitle><h4>{this.state.title}</h4></CardTitle>
                   <CardSubtitle>
                       <EventDesc/>
                   </CardSubtitle>
                   <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                   <NavLink to='/eventpage'><Button> Detail</Button></NavLink>
                 </CardBody>
               </Card>
             </Col>
            </Row>

            <Host>
            </Host>
          </Container>

      );
    }
  }

  export default  EventBlock;
