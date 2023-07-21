import React from 'react';
import happyfam from '../../pictures/VDTLTE/services-page-1-1.jpg'
import happyfam2 from '../../pictures/VDTLTE/services-page-1-1.jpg'
import './service.css'
import '../icons/style.css'

const ServicesPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="services-page">
        <div className="container">
          <div className="row">
            {/* Services Page Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-page__single">
                <div className="services-page__img-box">
                  <div className="services-page__img">
                    <img src={happyfam} alt="" />
                  </div>
                  <div className="services-page__icon">
                    <span className="icon-pie-chart"></span>
                  </div>
                </div>
                <div className="services-page__content">
                  <h3 className="services-page__title"><a href="#">Enterprise Solution</a></h3>
                  <p className="services-page__text">At vero eos et accusamus et iustoodio digni goikussimos
                    ducimus qui blanp ditiis praesum voluum.</p>
                  <a href="#" className="services-page__read-more">Read More</a>
                </div>
                <div className="services-page__hover-single">
                  <div className="services-page__hover-img">
                  </div>
                  <div className="services-page__hover-content-box">
                    <div className="services-page__hover-icon">
                      <span className="icon-pie-chart"></span>
                    </div>
                    <div className="services-page__hover-content">
                      <h3 className="services-page__hover-title"><a href="#">Enterprise Solution</a></h3>
                      <p className="services-page__hover-text">At vero eos et accusamus et iustoodio digni
                        goikussimos ducimus qui blanp ditiis praesum voluum.</p>
                      <a href="#" className="services-page__hover-read-more">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services Page Single End */}
            {/* Services Page Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-page__single">
                <div className="services-page__img-box">
                  <div className="services-page__img">
                    <img src={happyfam} alt="" />
                  </div>
                  <div className="services-page__icon">
                    <span className="icon-insurance"></span>
                  </div>
                </div>
                <div className="services-page__content">
                  <h3 className="services-page__title"><a href="#">SME Solution</a></h3>
                  <p className="services-page__text">At vero eos et accusamus et iustoodio digni goikussimos
                    ducimus qui blanp ditiis praesum voluum.</p>
                  <a href="#" className="services-page__read-more">Read More</a>
                </div>
                <div className="services-page__hover-single">
                  <div className="services-page__hover-img" style={{ backgroundImage: 'url('+happyfam2+')'}}>
                  </div>
                  <div className="services-page__hover-content-box">
                    <div className="services-page__hover-icon">
                      <span className="icon-insurance"></span>
                    </div>
                    <div className="services-page__hover-content">
                      <h3 className="services-page__hover-title"><a href="services-details.html">SME Solution</a></h3>
                      <p className="services-page__hover-text">At vero eos et accusamus et iustoodio digni
                        goikussimos ducimus qui blanp ditiis praesum voluum.</p>
                      <a href="#" className="services-page__hover-read-more">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services Page Single End */}
            {/* Services Page Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-page__single">
                <div className="services-page__img-box">
                  <div className="services-page__img">
                    <img src={happyfam} alt="" />
                  </div>
                  <div className="services-page__icon">
                    <span className="icon-money-bag"></span>
                  </div>
                </div>
                <div className="services-page__content">
                  <h3 className="services-page__title"><a href="#">Corporate Internet</a></h3>
                  <p className="services-page__text">At vero eos et accusamus et iustoodio digni goikussimos
                    ducimus qui blanp ditiis praesum voluum.</p>
                  <a href="#" className="services-page__read-more">Read More</a>
                </div>
                <div className="services-page__hover-single">
                  <div className="services-page__hover-img" style={{ backgroundImage: "url(../../pictures/VDTLTE/ser)" }}>
                  </div>
                  <div className="services-page__hover-content-box">
                    <div className="services-page__hover-icon">
                      <span className="icon-money-bag"></span>
                    </div>
                    <div className="services-page__hover-content">
                      <h3 className="services-page__hover-title"><a href="#">Corporate Internet</a></h3>
                      <p className="services-page__hover-text">At vero eos et accusamus et iustoodio digni
                        goikussimos ducimus qui blanp ditiis praesum voluum.</p>
                      <a href="#" className="services-page__hover-read-more">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services Page Single End */}
            {/* Services Page Single Start */}
            <div className="col-xl-4 col-lg-6 col-md-6">
              <div className="services-page__single">
                <div className="services-page__img-box">
                  <div className="services-page__img">
                    <img src={happyfam} alt="" />
                  </div>
                  <div className="services-page__icon">
                    <span className="icon-profile"></span>
                  </div>
                </div>
                <div className="services-page__content">
                  <h3 className="services-page__title"><a href="#">Retail Internet</a></h3>
                  <p className="services-page__text">At vero eos et accusamus et iustoodio digni goikussimos
                    ducimus qui blanp ditiis praesum voluum.</p>
                  <a href="#" className="services-page__read-more">Read More</a>
                </div>
                <div className="services-page__hover-single">
                  <div className="services-page__hover-img" style={{ backgroundImage: "url(assets/images/services/services-page-hover-img-1.jpg)" }}>
                  </div>
                  <div className="services-page__hover-content-box">
                    <div className="services-page__hover-icon">
                      <span className="icon-profile"></span>
                    </div>
                    <div className="services-page__hover-content">
                      <h3 className="services-page__hover-title"><a href="#">Retail Internet</a></h3>
                      <p className="services-page__hover-text">At vero eos et accusamus et iustoodio digni
                        goikussimos ducimus qui blanp ditiis praesum voluum.</p>
                      <a href="#" className="services-page__hover-read-more">Read
                        More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services Page Single End */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
