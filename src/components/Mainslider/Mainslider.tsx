import React from 'react';
import backgroundslide from '../../pictures/VDTCOMM/backgroundslide.png'
import backgroundslide1 from '../../pictures/VDTCOMM/Rectanglepic.png'
import '../assets/css/slider.css'
import '../assets/css/slider-responsive.css'
import '../assets/owl-carousel/owl.carousel.min.css'
import '../assets/owl-carousel/owl.theme.default.min.css'
import '../assets/animate/animate.min.css'
import '../assets/animate/custom-animate.css'
import '../assets/css/style.css'

const MainSlider: React.FC = () => {
  return (
    <section className="main-slider">
      <div
        className="main-slider__carousel owl-carousel owl-theme thm-owl__carousel"
        data-owl-options='{"loop": true, "items": 1, "navText": ["<span class=\"icon-left-arrow\"></span>","<span class=\"icon-right-arrow\"></span>"], "margin": 0, "dots": false, "nav": true, "animateOut": "slideOutDown", "animateIn": "fadeIn", "active": true, "smartSpeed": 1000, "autoplay": true, "autoplayTimeout": 7000, "autoplayHoverPause": false}'
      >
        <div className="item main-slider__slide-1">
          <div
            className="main-slider__bg"
            style={{ backgroundImage: 'url(../../pictures/VDTCOMM/Rectanglepic)' }}
          ></div>
          <div className="main-slider__shape-1 img-bounce">
            <img src="../assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__shape-2 float-bob-x">
                <img src="../assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__title-box">
                <h2 className="main-slider__title">
                  Consulting <br />
                  at a <span>Higher</span> <br />
                  Level
                </h2>
                <p className="main-slider__text">There are many variations of <br /> passages of lorem ipsum.</p>
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
            style={{ backgroundImage: 'url(../../pictures/VDTCOMM/backgroundslide.png)' }}
          ></div>
          <div className="main-slider__shape-1 img-bounce">
            <img src="../assets/images/shapes/main-slider-shape-1.png" alt="" />
          </div>
          <div className="container">
            <div className="main-slider__content">
              <div className="main-slider__shape-2 float-bob-x">
                <img src="../assets/images/shapes/main-slider-shape-2.png" alt="" />
              </div>
              <div className="main-slider__title-box">
                <h2 className="main-slider__title">
                  Consulting <br />
                  at a <span>Higher</span> <br />
                  Level
                </h2>
                <p className="main-slider__text">There are many variations of <br /> passages of lorem ipsum.</p>
              </div>
              <div className="main-slider__btn-box">
                <a href="#" className="main-slider__btn thm-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
