import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText, CardGroup, CardImg}from'reactstrap';
import '../style.css';

class HostDetail extends Component {

    render() {


      return (
        <Fragment>
          <Container>

              <CardImg  src={require('../../../static/img/velvet.png')} alt="Card image cap" />
                <h4>Host: Velvet Buffalo Cafe </h4>
                <h4>Contact Me </h4>
                <div>

                  <a href="#" class="fa fa-twitter"></a>

                  <a href="#" class="fa fa-instagram"></a>
                  <a href="#" class="ba">Website</a>
                </div>

          </Container>
        </Fragment>
      );
    }
  }

export default HostDetail;

// <a href="#" class="fa fa-facebook"></a>
// <a href="#" class="fa fa-google"></a>
// <a href="#" class="fa fa-linkedin"></a>
// <a href="#" class="fa fa-youtube"></a>
