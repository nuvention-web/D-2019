import React, { Component, Fragment } from 'react';
import {Container} from 'reactstrap';
import './style.css';

class EventDesc extends Component {
  state = {

    description: 'This event is really fun',
    location: '1925 Sherman Ave, IL 60201',
    currency: "$",
    value: 49.99,
    groupsize: 10,
    duration_hr: 3,
    duration_min: 30

  };
    render() {
      const { events }  = this.props;
      return (
        <Fragment>

          <div class="description">
            <h3>Price: {this.state.currency} {this.state.value}</h3>
            <h4> | </h4>
            <h3>Duration: {this.state.duration_hr} hr {this.state.duration_min} min</h3>
            <h4> | </h4>
            <h3>Group Size: {this.state.groupsize}</h3>
            <br></br>
            <h7>{this.state.description}</h7>
          </div>

        </Fragment>
      );
    }
  }

  export default EventDesc;
