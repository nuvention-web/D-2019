import React, { Component, Fragment } from 'react';
import Menu from './Components/Menu/index.js';
import Header from './Components/Header/index.js';
import SearchBar from './Components/SearchBar/index.js';
import EventList from './Components/EventList/index.js';
import {Container, Row, Col, Card } from 'reactstrap';
import WideImageBlock from './Components/WideContentList/WideImageBlock/index.js'
import WelcomeBanner from './Components/WelcomeBanner/index.js';
import HostLandingPage from './Pages/HostLanding/index.js';
import './App.css';
import { NavLink } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <HostLandingPage />
    );
  }
}

export default App;
