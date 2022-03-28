import React from "react";
import { Link, withRouter } from "react-router-dom";

const Footer = () => {
  const profile = (
    <div className="footer-profile-container">
      <div className="footer-col-name">
        <img id="self-portrait" src="images/portrait.jpg" />
      </div>
      <div className="footer-col-name">
        <h2>KATIE (YUCHEN) HANG</h2>
        <div className="footer-col-item">
          <a
            href="https://www.linkedin.com/in/yuchen-katie-hang-443b27a4/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div className="footer-col-item">
          {" "}
          <a href="https://github.com/johnda911" target="_blank">
            Github
          </a>
        </div>
        <div className="footer-col-item">
          {" "}
          <a href="https://angel.co/u/katie-yuchen-hang">AngelList</a>
        </div>
      </div>
      <div className="footer-col-name">
        <h2>TECHNOLOGIES</h2>
        <div>
          <div className="footer-col-item">React</div>
          <div className="footer-col-item">JavaScript, Ruby, SCSS</div>
          <div className="footer-col-item">Amazon Web Services S3</div>
          <div className="footer-col-item">Ruby on Rails</div>
          <div className="footer-col-item">PostgreSQL</div>
          <div className="footer-col-item">Redux</div>
        </div>
      </div>
      <div className="footer-col-name">
        <h2>ABOUT AUTHOR</h2>
        <div>
          <ul className="author-info">
            <li>
              <a
                href="https://www.linkedin.com/in/yuchen-katie-hang-443b27a4/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin fa-lg"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/johnda911" target="_blank">
                <i className="fa-brands fa-github fa-lg"></i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/katie-yuchen-hang" target="_blank">
                <i className="fa-brands fa-angellist"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const compliance = (
    <div className="compliance">
      <ul>
        <li>Terms of Use</li>
        <li>Do Not Sell</li>
        <li>Not a Link</li>
      </ul>
      <p>
        Copyright © 2022 ResTable, Inc. ResTable Street, New York, NY 10000 -
        All rights reserved.
      </p>
    </div>
  );

  return (
    <footer>
      <div className="footer-container">
        <div>{profile}</div>
        <div>{compliance}</div>
      </div>
    </footer>
  );
};

export default withRouter(Footer);
