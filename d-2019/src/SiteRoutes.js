import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import EventPageV2 from './Pages/EventPageV2';
// import Submit from './Submit';
import EventBlock from './Components/EventList/EventBlock';
import Booking from './Pages/Booking';
import LoginPage from './Pages/Login/LoginPage';
import SignUp from './Pages/SignUp';
import BecomeHost from './Pages/BecomeHost';
import HostPage from './Pages/HostPage';
import HostLandingPage from './Pages/HostLanding';
import ExperiencePage from './Pages/ExperiencePage';

const SiteRoutes = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>

      <Switch>
          <Route exact path='/' component={App}/>
          <Route exact path='/eventpage' component={EventPageV2}/>
          <Route exact path='/bookpage' component={Booking}/>
          <Route exact path='/loginpage' component={LoginPage}/>
          <Route exact path='/signup' component={SignUp}/>
          <Route exact path='/hostpage' component={HostPage}/>
          <Route exact path='/becomehost' component={BecomeHost}/>

          <Route path='/hostlanding' component={HostLandingPage}/>
          <Route exact path='/experiencepage' component={ExperiencePage}/>
          <Route path='/eventpage/:id' component={EventPageV2}/>
      </Switch>

  </BrowserRouter>
  );

export default SiteRoutes;
