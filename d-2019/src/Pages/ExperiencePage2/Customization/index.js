import React, { Component, Fragment } from 'react';
import {Container,Row, Col, Button} from 'reactstrap';

class Customization extends Component {

    render() {


      return (
        <Fragment>
          <Container>
<Row>
            <h1>Customization</h1>
            </Row>
            <Row>
            <h3>Ask Velvet Buffalo if you have ...</h3>
            </Row>

            <Row>
              <Col>
                <Button>dietary restrictions</Button>
              </Col>
              <Col>
                <Button>Special requests</Button>
              </Col>
              <Col>
                <Button>Others</Button>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }

export default Customization;
