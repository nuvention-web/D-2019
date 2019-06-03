import React, { Component, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Container, CardDeck, Card, CardGroup,Button, Col} from 'reactstrap';
// import Header from 'Components/Header';
// import EventList from 'Components/EventList';
// import HostDetail from './HostDetail';
// import ExperienceDetail from './ExperienceDetail';
// import Testimonial from './Testimonial';
// import Itinerary from './Itinerary';
// import TourInclusion from './TourInclusion';
// import BringToTour from './BringToTour';
// import Customization from './Customization';
// import ExperienceTitle from './ExperienceTitle';
// import ExperienceDescription from './ExperienceDescription';
// import Video from './Video';
// import Carousel from './Carousel';
import './style.css';
// import Calendar from 'react-calendar';




class Static extends Component {

    render() {


      return (

          <Container>

          <table className="tablet1">
            <tr>
              <th className="th_image"><img width="100%" src={require('../../static/img/50263540_980805668785843_5504239883926896640_n.jpg')} alt="1" /></th>
              <th className="th1">
                <h4>606 Tours</h4>
                <h6>Kari Thirsk</h6>
                <h6>info@606tours.com</h6>
                <h6>(615) 390-8572</h6>
              </th>
              <th className="th_image"><img width="80%" src={require('../../static/img/logo2.png')} alt="1" /></th>
            </tr>
            </table>
            <table className="tablet1">
              <tr>
                <th className="th_analytics">
                  <img top width="10%" src={require('../../static/img/logo2.png')} alt="1" />
                  <b>FoodXP Analytics Summary</b>
                </th>
            </tr>
            </table>





            <table className="tablet1">
            <tr>
              <th className="th_metric">Metrics Title:</th>
              <th className="th_metric">A.</th>
              <th className="th_metric">B.</th>
              <th className="th_metric">C.</th>
              <th className="th_metric">D.</th>
              <th className="th_metric">E.</th>
              <th className="th_metric">F.</th>
            </tr>
            <tr>
              <td className="td1">This Week</td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
            </tr>
            <tr>
              <td className="td1">Last Week</td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
            </tr>
            <tr>
              <td className="td1">Past Month</td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
            </tr>
            <tr>
              <td className="td1">Null</td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
              <td className="td1"></td>
            </tr>
            </table>

            <table className="tablet1">
            <tr>
              <th className="th1">My experiences</th>
            </tr>
            </table>
            <table className="tablet1">
            <tr>
              <th className="th_image"><a href="https://d-2019.firebaseapp.com/experiencepage1">
                <img top width="100%" src={require('../../static/img/chinatown.jpg')} alt="1" /></a>
                <h6>Chicago Tour</h6>
              </th>
              <th className="th1"><a href="https://docs.google.com/forms/d/e/1FAIpQLScCu0uFGDuoj_dBwiUFpurNMPmhzDJODaGjKIvOf8PI81PSlQ/viewform">Add New Experience</a></th>
            </tr>

            </table>
            <table className="tablet1">
            <tr>
              <th className="th1">My Current Goals</th>
            </tr>
            </table>
            <table className="tablet1">
            <tr>
              <th className="th1">
                <h5>Vet and forge community partners: concierges, event planners, etc.</h5>
                <h5>Tweak the food offerings and tour stops based on client feedback from tests</h5>
                <h5>General discovery and getting the word out in Chicago about 606 tours </h5>
<div>
                <Button className="button_1" href="https://docs.google.com/forms/d/1xqc0nd-P6Weoe6k9nE_U_rBcOp7ixCAWOl9tP9M_qgw/edit">Schedule a Consultation with FoodXP</Button>
</div>
              </th>

            </tr>

            </table>
            <table className="tablet1">
            <tr>
              <th className="th1">Subscription Information</th>
            </tr>
            </table>
            <table className="tablet1">
            <tr>
              <th className="th1">
                <h5>Subscription Type: FoodXP Beta </h5>
                <div>
                  <Button className="button_1" href="#">Change my Subscription</Button>
                </div>
              </th>

            </tr>

            </table>






          </Container>

      );
    }
  }

export default Static;
//
//
// <table className="tablet1">
// <tr>
//   <th className="th1">Metrics Title:</th>
//   <th className="th1">A.</th>
//   <th className="th1">B.</th>
//   <th className="th1">C.</th>
//   <th className="th1">D.</th>
//   <th className="th1">E.</th>
//   <th className="th1">F.</th>
// </tr>
// <tr>
//   <td className="td1">This Week</td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
// </tr>
// <tr>
//   <td className="td1">Last Week</td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
// </tr>
// <tr>
//   <td className="td1">Past Month</td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
// </tr>
// <tr>
//   <td className="td1">Null</td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
//   <td className="td1"></td>
// </tr>
// </table>
