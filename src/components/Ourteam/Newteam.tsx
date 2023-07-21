import React from 'react';
import './Newteam.css'
import posture from '../../pictures/VDTCOMM/posture.png'
import '../icons/style.css'
import '../../components/assets/css/style.css'
import '../../components/assets/fontawesome/css/all.min.css'
// Make sure to include the necessary CSS files here

const Newteam: React.FC = () => {
  return (
    <div className="page-wrapper">
      <header className="main-header clearfix">
        {/* Header Content */}
      </header>

      <div className="stricky-header stricked-menu main-menu">
        <div className="sticky-header__content"></div>
      </div>

      <section className="team-page">
        <div className="container">
          <div className="row">
            {/* Team Members */}
            <TeamOneSingle
              imageUrl="assets/images/teams/team-1-1.jpg"
              socialIcons={['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-dribbble']}
              subTitle="Manager"
              name="Thomas Jakson"
            />

            <TeamOneSingle
              imageUrl="assets/images/teams/team-1-1.jpg"
              socialIcons={['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-dribbble']}
              subTitle="Manager"
              name="Thomas Jakson"
            />

            <TeamOneSingle
              imageUrl="assets/images/teams/team-1-1.jpg"
              socialIcons={['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-dribbble']}
              subTitle="Manager"
              name="Thomas Jakson"
            />

            <TeamOneSingle
              imageUrl="assets/images/teams/team-1-1.jpg"
              socialIcons={['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-dribbble']}
              subTitle="Manager"
              name="Thomas Jakson"
            />

            <TeamOneSingle
              imageUrl="assets/images/teams/team-1-1.jpg"
              socialIcons={['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-dribbble']}
              subTitle="Manager"
              name="Thomas Jakson"
            />

            <TeamOneSingle
              imageUrl="assets/images/teams/team-1-1.jpg"
              socialIcons={['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-dribbble']}
              subTitle="Manager"
              name="Thomas Jakson"
            />
            {/* Add more TeamOneSingle components for each team member */}
            {/* <TeamOneSingle ... /> */}
            {/* <TeamOneSingle ... /> */}
          </div>
        </div>
      </section>

      {/* Add other sections and components here */}
      {/* For example, you can add more sections like testimonials, services, etc. */}

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler"></div>
        <div className="mobile-nav__content">
          {/* Mobile Navigation content */}
        </div>
      </div>

      {/* Add scripts at the end */}
      <script src="assets/js/jquery-3.6.4.min.js"></script>
      <script src="assets/js/vdt.js"></script>
    </div>
  );
};

// TeamOneSingle Component
interface TeamOneSingleProps {
  imageUrl: string;
  socialIcons: string[];
  subTitle: string;
  name: string;
}

const TeamOneSingle: React.FC<TeamOneSingleProps> = ({ imageUrl, socialIcons, subTitle, name }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp animated">
      <div className="team-one__single">
        <div className="team-one__img">
          <div className="team-one__img-box">
            <img src={posture} alt="" />
          </div>
          <ul className="list-unstyled team-one__social">
            {socialIcons.map((iconClass, index) => (
              <li key={index}>
                <a href="#"><i className={iconClass}></i></a>
              </li>
            ))}
          </ul>
        </div>
        <div className="team-one__content">
          <p className="team-one__sub-title">{subTitle}</p>
          <h3 className="team-one__name">
            <a href="#">{name}</a>
          </h3>
          <ul className="list-unstyled team-one__social-two">
            <li>
              <a href="#">
                <i className="fas fa-share-alt"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Newteam;
