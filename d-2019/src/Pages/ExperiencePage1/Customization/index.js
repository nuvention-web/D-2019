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
            <h3>Ask Kari if you want ...</h3>
            </Row>

            <Row>
              <Col>
                <Button>dietary restrictions</Button>
              </Col>
              <Col>
                <Button>CTA pass</Button>
              </Col>
              <Col>
                <Button>Bring a baby</Button>
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    }
  }

export default Customization;
