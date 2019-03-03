import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './style.css';

class ModalAlert extends Component {
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
      <div>

        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Submit</Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Your Booking Has Been Confirmed</ModalHeader>
          <ModalBody>
            Congratulations, we have confirmed your booking
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Okay</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel Booking</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalAlert;
