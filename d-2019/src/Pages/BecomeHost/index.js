import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Button } from 'reactstrap';
import Header from 'Components/Header';

/*
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
*/
class GoHostMode extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            bio : '',
            name : '',
        }
    }
    /*
    handleSubmit(event) {
        event.preventDefault();
        fire.database().ref('users/' + uid).set({
            name: this.state.name,
            profile_picture : 'users/' + uid + '/' + this.fileInput.current.files[0].name,
            bio: this.state.bio
          });
        var ref = storageRef.child('users/' + uid + '/' + this.fileInput.current.files[0].name);
        ref.put(this.fileInput.current.files[0]);
        alert(
            `Submitted file - ${
            this.fileInput.current.files[0].name
            } and made host profile for ${uid}`
        );
    }*/

    handleBioChange(event){
        this.setState({
            bio: event.target.value,
            name: this.state.name
        });
    }

    handleNameChange(event){
        this.setState({
            bio: this.state.bio,
            name: event.target.value
        });
    }

    render() {
        return (
        <form >{/*onSubmit={this.handleSubmit}>*/}
                Name: <input type="text" value={this.state.name} onChange={this.handleNameChange} />
              <br></br><br></br>
                Profile Photo: <input type="file" ref={this.fileInput} />
              <br></br><br></br>
                Brief Bio: <textarea value={this.state.bio} onChange={this.handleBioChange} />
              <br></br><br></br>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

class BecomeHost extends Component {


    render() {
        return (
            <Fragment>
                <Container>
                    <header>
                        <Header />
                    </header>
                    <body>
                        <GoHostMode />
                    </body>
                </Container>
            </Fragment>
        );
    }
}
export default BecomeHost;
