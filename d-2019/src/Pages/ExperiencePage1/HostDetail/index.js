import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText, CardGroup, CardImg}from'reactstrap';
import '../style.css';

class HostDetail extends Component {

    render() {


      return (
        <Fragment>
          <Container>

              <CardImg top width="50%" src={require('../../../static/img/kari.jpg')} alt="Card image cap" />
                <h3>Host: Kari </h3>

<h5><a className='color_email1' href="mailto:info@606tours.com">Contact Me</a></h5>

                <div>
                  <a href="https://www.facebook.com/606tourschicago/?ref=br_rs" class="fa fa-facebook"></a>
                  <a href="https://www.instagram.com/explorechicago606/" class="fa fa-instagram"></a>

                </div>

          </Container>
        </Fragment>
      );
    }
  }

export default HostDetail;
