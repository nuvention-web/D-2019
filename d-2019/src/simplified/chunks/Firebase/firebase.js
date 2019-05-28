
import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAN0rKxQAiXk1tP1tHB8PzPZ3ZB5w3a1Ls",
    authDomain: "d-2019.firebaseapp.com",
    databaseURL: "https://d-2019.firebaseio.com",
    projectId: "d-2019",
    storageBucket: "d-2019.appspot.com",
    messagingSenderId: "715662726305"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }
    doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email,password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export default Firebase;