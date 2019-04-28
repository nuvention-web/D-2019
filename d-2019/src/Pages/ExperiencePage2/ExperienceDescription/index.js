import React, { Component, Fragment } from 'react';
import {Button, Container, Card, CardTitle, CardText }from'reactstrap';
import '../style.css';

// import staticImage1 from '../../static/img/event1.jpg';
// import staticImage2 from '../../static/img/event1_host1.png';


class ExperienceDescription extends Component {

    render() {


      return (
        <Fragment>
        <Container>
                <CardText className="description_style">
                In a galaxy far, far away... Celebrate Star Wars Day in style at downtown Beloit’s only rooftop event venue featuring themed cocktails, like:
                </CardText>
                <CardText className="description_style description_inner">
                Creamy Bantha Milk
                <br></br>
                “Death Star” Black Berry Martini
                <br></br>
                “Boba Fett” Avocado Cream Margarita
                </CardText>
                <CardText className="description_style">
                Enjoy live music by the Justin Jay Trio, and a fully stocked cash bar. Star Wars fan or not, come dressed in costume and we'll waive the cover charge. This pop-up bar is going to be out of this world and will make you question your allegiance to the Rebellion and consider joining the "darkside". May the 4th be with you.
                </CardText>


        </Container>
        </Fragment>
      );
    }
  }

export default ExperienceDescription;

// <br></br>
//   <img top width="70%" src={staticImage1} alt="static image"/>
