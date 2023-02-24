import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="namePart">
          <div className="name">Lakshy Raj Singh Dodiya</div>
          <p>
            Creating web and mobile applications. Maintaining, optimizing,
            troubleshooting, and improving websites. Enthusiast about learning
            new technologies. I give my best and work hard in the task I
            assigned and make the result satisfactory.
          </p>
          <div className="socialLogo">
            <Link
              to="https://www.linkedin.com/in/lakshy-raj-singh-dodiya/"
              target="_blank"
              rel="noreferrer"
              className="fa-brands fa-linkedin"
            ></Link>

            <Link
              to="https://github.com/Lakshy18"
              className="fa-brands fa-github"
              target="_blank"
              rel="noreferrer"
            ></Link>

            <Link
              className="fa-brands fa-google"
              target="_blank"
              rel="noreferrer"
              to="mailto:lakshyraj187@gmail.com"
            ></Link>

            <Link
              target="_blank"
              rel="noreferrer"
              to=""
              className="fa-brands fa-instagram"
            ></Link>

            <Link
              target="_blank"
              rel="noreferrer"
              to=""
              className="fa-brands fa-twitter"
            ></Link>
          </div>
          <div className="bigButton">
            <Link target="_blank" rel="noreferrer" to="">
              See My Resume
            </Link>
          </div>
        </div>
        <div className="imgPart"><svg id="b52d7e2d-d80f-4111-b6ed-d15502ee1edd" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="711.1879" height="669.68268" viewBox="0 0 711.1879 669.68268">…</svg></div>
      </div>
      <div className="wid">What I Do?</div>
      <div className="home2">
        <div className="imgPart2">image</div>
        <div className="namePart2">
          <div className="frnotEndHeading">
            <span>Front End Developer</span>
          </div>
          <div className="grid-container">
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3"></i>
            <i className="fa-brands fa-node-js"></i>
            <i className="fa-brands fa-java"></i>
            <i className="fa-brands fa-npm"></i>
            <i className="fa-brands fa-sass"></i>
          </div>
          <div className="list">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nihil?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nihil?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, nihil?
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
