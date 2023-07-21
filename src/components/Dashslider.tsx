import React from "react";
import OwlCarousel from "react-owl-carousel";
//import 'react-owl-carousel/owl-carousel/owl.carousel.css';
import 'react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.carousel.css';


import pictureslide1 from '../pictures/VDTCOMM/Rectanglepic.png'
import pictureslide2 from '../pictures/VDTCOMM/Rectangle 2 (1).png' 
import sliderpic from '../pictures/VDTCOMM/main-slider-shape-1.png'
import sliderpic2 from '../pictures/VDTCOMM/main-slider-shape-2.png'

interface DashsliderProps {}

const Dashslider: React.FC<DashsliderProps> = () => {
  const owlCarouselOptions = {
    loop: true,
    items: 1,
    navText: [
      "<span class=\"icon-left-arrow\"></span>",
      "<span class=\"icon-right-arrow\"></span>",
    ],
    margin: 0,
    dots: false,
    nav: true,
    animateOut: "slideOutDown",
    animateIn: "fadeIn",
    active: true,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
  };

  return (
    <section className="main-slider">
      <OwlCarousel
        className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
      >
        <div className="item main-slider__slide-1">
          <div
            className="main-slider__bg"
            style={{
              backgroundImage: "url(../pictures/VDTCOMM/Rectanglepic.png)",
            }}
          ></div>
          <div className="main-slider__shape-1 img-bounce">
            <img
              src={sliderpic}
              alt=""
            />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__shape-2 float-bob-x">
                <img
                  src={sliderpic2}
                  alt=""
                />
              </div>
              <div className="main-slider__title-box">
                <h2 className="main-slider__title">
                  Consulting <br />
                  at a <span>Higher</span> <br /> Level
                </h2>
                <p className="main-slider__text">
                  There are many variations of <br /> passages of lorem
                  ipsum.
                </p>
              </div>
              <div className="main-slider__btn-box">
                <a href="#" className="main-slider__btn thm-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="item main-slider__slide-2">
          <div
            className="main-slider__bg"
            style={{
              backgroundImage: "url(../pictures/VDTCOMM/Rectangle 2 (1).png)",
            }}
          ></div>
          <div className="main-slider__shape-1 img-bounce">
            <img
              src={sliderpic}
              alt=""
            />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__shape-2 float-bob-x">
                <img
                  src={sliderpic2}
                  alt=""
                />
              </div>
              <div className="main-slider__title-box">
                <h2 className="main-slider__title">
                  Consulting <br />
                  at a <span>Higher</span> <br /> Level
                </h2>
                <p className="main-slider__text">
                  There are many variations of <br /> passages of lorem
                  ipsum.
                </p>
              </div>
              <div className="main-slider__btn-box">
                <a href="#" className="main-slider__btn thm-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </section>
  );
};

export default Dashslider;
