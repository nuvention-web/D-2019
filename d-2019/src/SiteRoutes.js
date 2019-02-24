import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import EventPage from './Pages/EventPage';
// import Submit from './Submit';
import EventBlock from './Components/EventList/EventBlock';
import Booking from './Pages/Booking';
import LoginPage from './Login/LoginPage';

const SiteRoutes = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>

      <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/eventpage' component={EventPage}/>
          <Route exact path='/bookpage' component={Booking}/>
          <Route exact path='/loginpage' component={LoginPage}/>
      </Switch>

  </BrowserRouter>
  );

export default SiteRoutes;
