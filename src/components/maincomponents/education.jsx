import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <>
      <div className="edu">
        <div className="eduPart1">image</div>
        <div className="eduPart2">
          <div> Education </div> <span>Basic qualification</span>
        </div>
      </div>
      <div className="education">
        <div className="container">
          <div className="container-heading">
            <div className="cont-head-1"> AlmaBetter, </div>
            <div className="cont-head-2">Full Stack Web Development - MERN</div>
          </div>
          <div className="edu-description">
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptate?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptate?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptate?
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
                voluptate?
              </li>
            </ul>
            <div className="bigButton">
              <Link
                to="https://www.almabetter.com/"
                rel="noreferrer"
                target="_blank"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-heading">
            <div className="cont-head-1"> Bhupal Nobles' University, </div>
            <div className="cont-head-2">BBA, Marketing</div>
          </div>
          <div className="edu-description">
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, velit?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, velit?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci, velit?
              </li>
            </ul>
            <div className="bigButton">
              <Link
                to="https://www.bnuniversity.ac.in/index.html"
                rel="noreferrer"
                target="_blank"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-heading">
            <div className="cont-head-1"> Saraswati Vidhya Mandir, </div>
            <div className="cont-head-2">PCM</div>
          </div>
          <div className="edu-description">
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                ducimus.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                ducimus.
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                ducimus.
              </li>
            </ul>
            <div className="bigButton">
              <Link
                to="https://www.saraswatividyamandir.in/"
                rel="noreferrer"
                target="_blank"
              >
                Visit Website
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
