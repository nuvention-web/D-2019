import React from 'react';
import Firebase, { FirebaseContext } from './simplified/chunks/Firebase';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
// import EventPage from './Pages/EventPage';
import SiteRoutes from './SiteRoutes';




// You can choose your kind of history here (e.g. browserHistory)
// import { Router, hashHistory as history } from 'react-router';
// Your routes.js file
// import routes from './routes';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <SiteRoutes/>
  </FirebaseContext.Provider>
  , document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
