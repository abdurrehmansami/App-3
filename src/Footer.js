import React from "react";
import 'ionicons'
import "./index.css";
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <NavLink href="#">Web design</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Development</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Hosting</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <NavLink href="#">Company</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Team</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Legacy</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <NavLink href="#">Job openings</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Employee success</NavLink>
                  </li>
                  <li>
                    <NavLink href="#">Benefits</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 item social">
                <NavLink href="#">
                  <i className="icon ion-social-facebook"></i>
                </NavLink>
                <NavLink href="#">
                  <i className="icon ion-social-twitter"></i>
                </NavLink>
                <NavLink href="#">
                  <i className="icon ion-social-snapchat"></i>
                </NavLink>
                <NavLink href="#">
                  <i className="icon ion-social-instagram"></i>
                </NavLink>
                <p className="copyright">Company Name © 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
