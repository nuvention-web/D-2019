import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText, CardGroup, CardImg}from'reactstrap';
import '../style.css';

class HostDetail extends Component {

    render() {


      return (
        <Fragment>
          <Container>

              <CardImg top width="50%" src={require('../../../static/img/kari.jpg')} alt="Card image cap" />
                <h1>Host: Kari </h1>
                <h2>Contact Me </h2>
                <div>
                  <a href="https://www.facebook.com/606tourschicago/?ref=br_rs" class="fa fa-facebook"></a>
                  <a href="https://www.instagram.com/explorechicago606/" class="fa fa-twitter"></a>
                  
                </div>

          </Container>
        </Fragment>
      );
    }
  }

export default HostDetail;
