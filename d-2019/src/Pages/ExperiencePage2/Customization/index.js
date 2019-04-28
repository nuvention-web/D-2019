import React, { Component, Fragment } from 'react';
import {Container,Row, Col, Button} from 'reactstrap';
import '../style.css';

class Customization extends Component {

    render() {


      return (
        <Fragment>
          <Container>
<div>
            <h5><b>Customization</b></h5>
</div>
<div>
            <h7>Ask Velvet Buffalo if you have ...</h7>
</div>

            <Row className="row_size">
              <Col>
                <Button className="button_color">dietary restrictions</Button>
              </Col>
              <Col>
                <Button className="button_color">Special requests</Button>
              </Col>

            </Row>
          </Container>
        </Fragment>
      );
    }
  }

export default Customization;
