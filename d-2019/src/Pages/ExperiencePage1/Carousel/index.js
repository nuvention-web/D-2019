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
         <img className="productSlider" src={require('../../../static/img/IMG_0326.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0392.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0403.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0412.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0413.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0439.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0463.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0492.JPG')} />
       </div>
       <div >
         <img className="productSlider" src={require('../../../static/img/IMG_0507.JPG')} />
       </div>
       </Slider>
     </div>
   );
 }
}

// <div style={{ width: 200 }}>
