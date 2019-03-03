import React, { Component, Fragment } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Calendar from 'react-calendar';
import DateTimePicker from 'react-datetime-picker'

import Input1 from './Input1';


class BookingConfirmation extends Component {

  state={
    date: new Date(),
    date1: new Date(),
  }
   onChange = date => this.setState({ date })
   onChange = date1 => this.setState({ date1 })

    render() {
      return (
        <Fragment>
        <br></br>
        <Calendar/>
          <br></br>
                <div>
                Choose Start Date:
                  <DateTimePicker
                    onChange={this.onChange}
                    value={this.state.date}
                  />
                </div>
                <div>
                Choose End Date:
                  <DateTimePicker
                    onChange={this.onChange}
                    value={this.state.date1}
                  />
                </div>

                <br></br>

                <Input1/>

        </Fragment>
      );
    }
  }
export default BookingConfirmation;
