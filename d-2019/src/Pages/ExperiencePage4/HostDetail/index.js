import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText, CardGroup, CardImg}from'reactstrap';
import '../style.css';

class HostDetail extends Component {

    render() {


      return (
        <Fragment>
          <Container>

              <CardImg top width="50%" src={require('../../../static/img/eric.jpg')} alt="Card image cap" />
                <h3>Host: Eric </h3>
                <h5><a className='color_email1' href="mailto:eslepak@gmail.com">Contact Me</a></h5>
          </Container>
        </Fragment>
      );
    }
  }

export default HostDetail;

// <div>
//   <a href="https://www.facebook.com/chicagofoodways/" class="fa fa-facebook"></a>
//   <a href="https://www.instagram.com/chicagofoodways/" class="fa fa-instagram"></a>
//   <a href="https://www.yelp.com/biz/chicago-foodways-tours-chicago"><img src={require('../../../static/img/yelp.png')} class="fa1" alt="s"></img></a>
//   <a href="https://www.tripadvisor.com/Attraction_Review-g35805-d7144526-Reviews-Chicago_Foodways_Tours-Chicago_Illinois.html"><img src={require('../../../static/img/tripadvisor.png')} class="fa1" alt="s"></img></a>
//
//
// </div>
