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
import ExperiencePage1 from './Pages/ExperiencePage1';
import ExperiencePage2 from './Pages/ExperiencePage2';
import ExperiencePage3 from './Pages/ExperiencePage3';
import ExperiencePage4 from './Pages/ExperiencePage4';
import ClientLanding from './Pages/ClientLanding';

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
          <Route exact path='/experiencepage1' component={ExperiencePage1}/>
          <Route exact path='/experiencepage2' component={ExperiencePage2}/>
          <Route exact path='/experiencepage3' component={ExperiencePage3}/>
          <Route exact path='/experiencepage4' component={ExperiencePage4}/>

          <Route path='/eventpage/:id' component={EventPageV2}/>
          <Route path='/welcome' component={ClientLanding}/>
      </Switch>

  </BrowserRouter>
  );

export default SiteRoutes;
