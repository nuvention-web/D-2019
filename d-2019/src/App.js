import React, { Component, Fragment } from 'react';
import HostLandingPage from './Pages/HostLanding/index.js';
import './App.css';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-139316218-1');
ReactGA.pageview('/hostlanding');
ReactGA.pageview('/experiencepage1');
ReactGA.pageview('/experiencepage2');


class App extends Component {

  render() {
    return (
        <HostLandingPage />
    );
  }
}

export default App;
