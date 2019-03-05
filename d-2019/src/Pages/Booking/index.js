import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container, Button} from 'reactstrap';
import Header from 'Components/Header';
import {BookingConfirmation} from 'Components/Alerts';
import fire from 'config/Fire';


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
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    
    var ref = storageRef.child('users/'+uid+'/'+this.fileInput.current.files[0].name);
    ref.put(this.fileInput.current.files[0]);
    alert(
      `Submitted file - ${
        this.fileInput.current.files[0].name
      }`
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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

class Booking extends Component {


    render() {
      return (
        <Fragment>
          <Container>
              <header>
                <Header></Header>

                  <Link to={``} ><Button>Back to Main Page</Button>
                  </Link>


                  <Link to={`/eventpage`} > <Button>Back to Previous Page</Button>
                  </Link>

              </header>
              <body>
                <BookingConfirmation/>
                <FileInput id="testphoto" />
              </body>
            </Container>
        </Fragment>
      );
    }
  }
export default Booking;
