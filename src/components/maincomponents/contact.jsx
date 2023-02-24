import React from "react";
import { Link } from "react-router-dom";
import contact from "../../img/contact.jpg"

const Contact = () => {
  return (
    <>
      <div className="home">
        <div className="imgPart image"></div>
        <div className="namePart">
          <div className="name">Contact Me</div>
          
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nulla porro fuga facilis. Ea, minus?
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
        </div>
      </div>
      <div className="bigButton">
        <Link to="" target="_blank">
          See My Resume
        </Link>
      </div>

      <div className="home">
        <div className="namePart">
          <div className="number">
            Phone Number <div>+(91) xxxxxxxxxx</div>
          </div>
        </div>
        <div className="imgPart image"><img src={contact} alt=""></img></div>
      </div>
    </>
  );
};

export default Contact;
