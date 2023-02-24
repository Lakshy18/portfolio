import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="edu">
        <div className="eduPart1">image</div>
        <div className="eduPart2">
          <div> Projects </div>
          {/* <span>Basic qualification</span> */}
        </div>
      </div>
      <div className="education">
        <div className="container">
          <div className="container-heading">
            <div className="cont-head-1"> Gotu Talks, </div>
            <div className="cont-head-2">Live Chat App</div>
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
                to="https://chatapp-381ee.web.app/login"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-heading">
            <div className="cont-head-1"> FlashCard Generator, </div>
            <div className="cont-head-2"></div>
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
                to="https://flashcard-generator-bb814.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-heading">
            <div className="cont-head-1"> Mausam, </div>
            <div className="cont-head-2">Weather App</div>
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
                to="https://weather-app-e44b2.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
