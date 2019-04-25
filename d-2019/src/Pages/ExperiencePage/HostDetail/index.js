import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText, CardGroup, CardImg}from'reactstrap';
import '../style.css';

class HostDetail extends Component {

    render() {


      return (
        <Fragment>
          <Container>

              <CardImg top width="50%" src={require('../../../static/img/kari.jpg')} alt="Card image cap" />
                <h1>Host: Kari XXX </h1>
                <h2>Contact Me </h2>
                <div>
                  <a href="#" class="fa fa-facebook"></a>
                  <a href="#" class="fa fa-twitter"></a>
                  <a href="#" class="fa fa-google"></a>
                  <a href="#" class="fa fa-linkedin"></a>
                  <a href="#" class="fa fa-youtube"></a>
                  <a href="#" class="fa fa-instagram"></a>
                </div>

          </Container>
        </Fragment>
      );
    }
  }

export default HostDetail;
