import React, { Component, Fragment } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ModalAlert from './ModalAlert';

class Input1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

    render() {
      return (
        <Form>
          <FormGroup row>
          <Label for="textarea" sm={2}>Name</Label>
          <Col sm={10}>
            <Input type="text" name="text" id="user_name" placeholder="Enter your name" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleText" sm={2}>Additional Request</Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" placeholder="Write your request here"/>
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="checkbox2" sm={2}>Do you agree to ~~</Label>
          <Col sm={{ size: 10 }}>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" id="checkbox2" />{' '}
                I agree to ~~~
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup>
          <ModalAlert/>
        </FormGroup>

        </Form>

      );
    }
  }
export default Input1;
