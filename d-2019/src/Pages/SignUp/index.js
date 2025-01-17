import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import fire from 'config/Fire';
import Header from 'Components/Header';

/*
var storage = fire.storage();
var storageRef = storage.ref();
var uid = '';
var email = '';
fire.auth().onAuthStateChanged(function(user) {
  if (user) {
    email = user.email;
    uid = user.uid;
  }
  else {
    email = '';
    uid = '';
  }
});
*/

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    /*
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    */
  }
  /*
  handleSubmit(event) {
    event.preventDefault();
    
    var ref = storageRef.child('users/'+uid+'/'+this.fileInput.current.files[0].name);
    ref.put(this.fileInput.current.files[0]);
    alert(
      `Submitted file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }*/
  render() {
    return (
      <form >{/*onSubmit={this.handleSubmit}>*/}
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      email: '',
      password: ''
    };
  }
/*
  writeUserData(userId, name, email, imageUrl, userType) {
    fire.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl,
      userType: userType,
    });
  }
*/
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
/*
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }*/
  render() {
    return (
        
       <div className="col-md-6">
         {/*
       <Header />
       <form>
      <div class="form-group">
       <label for="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">Must be in format username@email.com</small>
      </div>
       <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
      <small id="passwordHelp" class="form-text text-muted">Must be in longer than 7 characters</small>
      </div>
      <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
         </form>*/}

 </div>
    );
  }
}
export default SignUp;