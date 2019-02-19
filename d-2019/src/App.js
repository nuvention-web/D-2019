import React, { Component, Fragment } from 'react';
import HostMain from './Components/HostMain/HostMain';
import EventMain from './Components/EventMain/EventMain';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  render() {

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
              <h1>
                FoodPal
              </h1>


          </header>
          <p className="App-content">
            Hi
          </p>
          <a href="https://www.linkedin.com/in/philip-michael-presnell-017aab46/">
            <img className="App-phil" src={require(`./static/img/phil.png`)}/>
          </a>



        </div>

        <div className="HostMain">

        </div>
        <div className="EventMain">

        </div>


      </Fragment>
    );
  }
}

export default App;
