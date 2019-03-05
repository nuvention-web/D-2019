import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from 'config/Fire';
import Header from 'Components/Header';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).then((u) => { console.log(u) })
            .catch((error) => {
                console.log(error);
        })
    }
    render() {
        return (
            <div className="col-md-6">
                <Header />
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">Must be in format username@email.com</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        <small id="passwordHelp" className="form-text text-muted">Must be in longer than 7 characters</small>
                    </div>
                    <button type="submit" onClick={this.signup} style={{ marginLeft: '25px' }} className="btn btn-success">Signup</button>
                </form>
            </div>
        );
    }
}
export default SignUp;
