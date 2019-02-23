import React, { Component, Fragment } from 'react';
import Menu from './Components/Menu/index.js';
import Navbar from './Components/Navbar/index.js';
import EventList from './Components/EventList/index.js';
import WelcomeBanner from './Components/WelcomeBanner/index.js';
import { Button } from 'reactstrap';

import './App.css';

class App extends Component {


  render() {

    return (
      <Fragment>
        <WelcomeBanner></WelcomeBanner>
        <Navbar></Navbar>
        <EventList></EventList>


      </Fragment>
    );
  }
}

export default App;
