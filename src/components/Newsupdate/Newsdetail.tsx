import React from 'react';
import './Newspage.css'

const Newsdetail: React.FC = () => {
  return (
    <div className="page-wrapper">
      <section className="news-details">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="news-details__left">
                <div className="news-details__img">
                  <img src="assets/images/blog/news-details-img-1.jpg" alt="" />
                  <div className="news-details__date">
                    <p>30 Mar, 2023</p>
                  </div>
                </div>
                <div className="news-details__content">
                  <ul className="news-details__meta list-unstyled">
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
                  <h3 className="news-details__title-1">Discover 10 ways to solve your business problems</h3>
                  <p className="news-details__text-1">
                    Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum. There are many variations of
                    passages of Lorem Ipsum available, but the majority have alteration in some injected or words which
                    don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                    be sure there isn't anything embarrang hidden in the middle of text. All the Lorem Ipsum generators
                    on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                    on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                  <p className="news-details__text-2">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a type simen book. It has survived not only
                    five centuries, but also the leap into electronic typesetting.
                  </p>
                  <p className="news-details__text-3">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. orem Ipsum has been the
                    industry's standard dummy text ever since the when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">{/* Add content for the right column, if needed */}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsdetail;
