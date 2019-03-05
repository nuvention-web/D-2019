import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import EventPage from './Pages/EventPage';
// import Submit from './Submit';
import EventBlock from './Components/EventList/EventBlock';
import Booking from './Pages/Booking';
import LoginPage from './Pages/Login/LoginPage';
import SignUp from './Pages/SignUp';
import BecomeHost from './Pages/BecomeHost';

const SiteRoutes = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>

      <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/eventpage' component={EventPage}/>
          <Route exact path='/bookpage' component={Booking}/>
          <Route exact path='/loginpage' component={LoginPage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/becomehost' component={BecomeHost}/>
      </Switch>

  </BrowserRouter>
  );

export default SiteRoutes;
