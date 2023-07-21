import React from 'react';
import './Newspage.css'
import '../assets/css/style.css'
import '../assets/icons/style.css'
import talker from '../../pictures/VDTLTE/Rectangle 372 (3).png'
import talker2 from '../../pictures/VDTLTE/Rectangle 372 (4).png'
import talker3 from '../../pictures/VDTLTE/Rectangle 372 (5).png'

const NewsPage: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="news-page">
        <div className="container">
          <div className="row">
            {/* News One Single Start */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="news-one__single">
                <div className="news-one__img-box">
                  <div className="news-one__img">
                    <img src={talker} alt="" />
                    <a href="news-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__date">
                    <p>30 Mar, 2023</p>
                  </div>
                </div>
                <div className="news-one__content">
                  <ul className="news-one__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-tags"></span>
                      </div>
                      <div className="text">
                        <p>Business</p>
                      </div>
                    </li>
                    <li>
                      <span>/</span>
                      <div className="icon">
                        <span className="fas fa-comments"></span>
                      </div>
                      <div className="text">
                        <p>2 Comments</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="news-one__title">
                    <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                  </h3>
                  <p className="news-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="news-one__hover">
                  <div className="news-one__hover-content">
                    <h3 className="news-one__hover-title">
                      <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                    </h3>
                    <p className="news-one__hover-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="news-one__hover-btn-box">
                    <a href="news-details.html">
                      Read More<span className="icon-right-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* News One Single End */}
            {/* News One Single Start */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="news-one__single">
                <div className="news-one__img-box">
                  <div className="news-one__img">
                    <img src={talker2} alt="" />
                    <a href="news-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__date">
                    <p>30 Mar, 2023</p>
                  </div>
                </div>
                <div className="news-one__content">
                  <ul className="news-one__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-tags"></span>
                      </div>
                      <div className="text">
                        <p>Business</p>
                      </div>
                    </li>
                    <li>
                      <span>/</span>
                      <div className="icon">
                        <span className="fas fa-comments"></span>
                      </div>
                      <div className="text">
                        <p>2 Comments</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="news-one__title">
                    <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                  </h3>
                  <p className="news-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="news-one__hover">
                  <div className="news-one__hover-content">
                    <h3 className="news-one__hover-title">
                      <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                    </h3>
                    <p className="news-one__hover-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="news-one__hover-btn-box">
                    <a href="news-details.html">
                      Read More<span className="icon-right-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* News One Single End */}
            {/* News One Single Start */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="news-one__single">
                <div className="news-one__img-box">
                  <div className="news-one__img">
                    <img src={talker3} alt="" />
                    <a href="news-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__date">
                    <p>30 Mar, 2023</p>
                  </div>
                </div>
                <div className="news-one__content">
                  <ul className="news-one__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-tags"></span>
                      </div>
                      <div className="text">
                        <p>Business</p>
                      </div>
                    </li>
                    <li>
                      <span>/</span>
                      <div className="icon">
                        <span className="fas fa-comments"></span>
                      </div>
                      <div className="text">
                        <p>2 Comments</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="news-one__title">
                    <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                  </h3>
                  <p className="news-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="news-one__hover">
                  <div className="news-one__hover-content">
                    <h3 className="news-one__hover-title">
                      <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                    </h3>
                    <p className="news-one__hover-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="news-one__hover-btn-box">
                    <a href="news-details.html">
                      Read More<span className="icon-right-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* News One Single End */}
            {/* News One Single Start */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="news-one__single">
                <div className="news-one__img-box">
                  <div className="news-one__img">
                    <img src={talker3} alt="" />
                    <a href="news-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__date">
                    <p>30 Mar, 2023</p>
                  </div>
                </div>
                <div className="news-one__content">
                  <ul className="news-one__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-tags"></span>
                      </div>
                      <div className="text">
                        <p>Business</p>
                      </div>
                    </li>
                    <li>
                      <span>/</span>
                      <div className="icon">
                        <span className="fas fa-comments"></span>
                      </div>
                      <div className="text">
                        <p>2 Comments</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="news-one__title">
                    <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                  </h3>
                  <p className="news-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="news-one__hover">
                  <div className="news-one__hover-content">
                    <h3 className="news-one__hover-title">
                      <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                    </h3>
                    <p className="news-one__hover-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="news-one__hover-btn-box">
                    <a href="news-details.html">
                      Read More<span className="icon-right-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* News One Single End */}
            {/* News One Single Start */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="news-one__single">
                <div className="news-one__img-box">
                  <div className="news-one__img">
                    <img src={talker} alt="" />
                    <a href="news-details.html">
                      <span className="news-one__plus"></span>
                    </a>
                  </div>
                  <div className="news-one__date">
                    <p>30 Mar, 2023</p>
                  </div>
                </div>
                <div className="news-one__content">
                  <ul className="news-one__meta list-unstyled">
                    <li>
                      <div className="icon">
                        <span className="fas fa-tags"></span>
                      </div>
                      <div className="text">
                        <p>Business</p>
                      </div>
                    </li>
                    <li>
                      <span>/</span>
                      <div className="icon">
                        <span className="fas fa-comments"></span>
                      </div>
                      <div className="text">
                        <p>2 Comments</p>
                      </div>
                    </li>
                  </ul>
                  <h3 className="news-one__title">
                    <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                  </h3>
                  <p className="news-one__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="news-one__hover">
                  <div className="news-one__hover-content">
                    <h3 className="news-one__hover-title">
                      <a href="news-details.html">VDT Boss, Company bags Outstanding Awards at Africa
                        Digital Awards 2022</a>
                    </h3>
                    <p className="news-one__hover-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  </div>
                  <div className="news-one__hover-btn-box">
                    <a href="news-details.html">
                      Read More<span className="icon-right-arrow"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* News One Single End */}
            {/* You can repeat the above block for each news item */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
