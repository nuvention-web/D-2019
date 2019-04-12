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
              <header class="sticky-sidebar">
                <Header></Header>
              </header>
              <div class="sticky-sidebar-content">
                <body class="sandbox">
                  <EventList></EventList>
                </body>
              </div>
          </Container>
      </Fragment>
    );
  }
}

export default App;
