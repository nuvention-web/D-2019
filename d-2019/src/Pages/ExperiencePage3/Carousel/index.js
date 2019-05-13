import React, { Component } from "react";
import Slider from "react-slick";
import './style.css';

export default class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]


      // adaptiveHeight: true
    };
    return (
      <div>
       <Slider {...settings}>
       <div >
         <img className="productSlider" src={require('../../../static/img/p_Slideshow1.jpg')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/p_Slideshow2.jpg')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/p_Slideshow3.jpg')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/p_Slideshow4.jpg')} />
       </div>
       </Slider>
     </div>
   );
 }
}

// <div style={{ width: 200 }}>
