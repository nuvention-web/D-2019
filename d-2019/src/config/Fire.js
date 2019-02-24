import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyAN0rKxQAiXk1tP1tHB8PzPZ3ZB5w3a1Ls",
    authDomain: "d-2019.firebaseapp.com",
    databaseURL: "https://d-2019.firebaseio.com",
    projectId: "d-2019",
    storageBucket: "d-2019.appspot.com",
    messagingSenderId: "715662726305"
  };
  const fire = firebase.initializeApp(config);
  export default fire;
