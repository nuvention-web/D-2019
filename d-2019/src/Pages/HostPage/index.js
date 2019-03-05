import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from 'Components/Header';
import EventList from 'Components/EventList';
import firebase from 'firebase';
import fire from 'config/Fire';
// import Host from 

var storage = fire.storage();
var storageRef = storage.ref();
var uid = '';
var email = '';
fire.auth().onAuthStateChanged(function (user) {
    if (user) {
        email = user.email;
        uid = user.uid;
    }
    else {
        email = '';
        uid = '';
    }
});

var storage = firebase.storage();
var storageRef = storage.ref();

class HostPage extends Component {

    render() {
      
      /*var name;
      var pic;
      var picurl;
      var bio;
      firebase.database().ref('/users/' + uid).once('value').then(function(snapshot) {
        name = snapshot.val().name;
        bio = snapshot.val().bio;
        pic = snapshot.val().profile_picture;
      });
      var picref = storageRef.child(pic);
      picref.getDownloadURL().then(function(url){
        picurl = url;
      });*/
      return (
        <Fragment>
          <Container>
              <header>
                <Header />
              </header>
              <body>
                <p>{email}</p>
                <EventList/>

              </body>
            </Container>
        </Fragment>
      );
    }
  }

export default HostPage;