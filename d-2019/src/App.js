import React, { Component, Fragment } from 'react';
import Menu from './Components/Menu/index.js';
import Header from './Components/Header/index.js';
import SearchBar from './Components/SearchBar/index.js';
import EventList from './Components/EventList/index.js';
import WelcomeBanner from './Components/WelcomeBanner/index.js';
import { Container } from 'reactstrap';


import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <header>
              <Header></Header>
            </header>
            <body>
              <WelcomeBanner></WelcomeBanner>
              <SearchBar></SearchBar>
              <br></br>
              <EventList></EventList>
            </body>
          </Container>
      </Fragment>
    );
  }
}

export default App;
