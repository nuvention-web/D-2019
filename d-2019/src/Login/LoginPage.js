import fire from '../config/Fire';
import Login from './Login';
import Home from './Home';
import App from '../App';
import React, { Component, Fragment } from 'react';


class LoginPage extends Component{

  constructor(props){
    super(props);
    this.state={
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

authListener(){
  fire.auth().onAuthStateChanged((user)=>{
    console.log(user);
    if(user){
      this.setState({ user });
      // localStorage.setItem('user', user.uid);
    }else {
      this.setState({user:null});
        // localStorage.setItem('user', user);
    }
  });
}

render() {
  return (
    <div className="LoginPage">
      {this.state.user ? (<App />) : (<Login/>)}
    </div>

  );
}


}
export default LoginPage;
