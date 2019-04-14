import React, { Component, Fragment } from 'react';
import Menu from './Components/Menu/index.js';
import Header from './Components/Header/index.js';
import SearchBar from './Components/SearchBar/index.js';
import EventList from './Components/EventList/index.js';
import WideContentList from './Components/WideContentList/index.js'
import WelcomeBanner from './Components/WelcomeBanner/index.js';
import { Container, Button } from 'reactstrap';
import './App.css';
import { NavLink } from 'react-router-dom';



class App extends Component {

  render() {
    return (
      <Fragment>

                  <WideContentList></WideContentList>
                <Button className="sticky-sidebar" tag={NavLink} to='/becomehost'>Become a Host Now</Button>

      </Fragment>
    );
  }
}

export default App;
