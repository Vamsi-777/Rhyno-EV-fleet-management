import React from 'react';
import { Link } from 'react-router-dom';
import './components/product.css'

function Footer() {
  return (
    <footer>
    <div className="footer1">
                <div className="footer2">
                    <ul>
                        <li><Link to="/About" class="footer3">About</Link></li>
                        <li><Link to="/Rentals" class="footer3">Rentals</Link></li>
                        <li><Link to="/Contact" class="footer3">Contact</Link></li>
                        
                        
                    </ul>
                </div>
                <div className="footer2">
                    <ul>
                        <li><Link to="/Product1" class="footer3">SEO3 Lite</Link></li>
                        <li><Link to="/Product2" class="footer3">SEO3</Link></li>
                        <li><Link to="/Product3" class="footer3">SEO3 Max</Link></li>
                    </ul></div>
                <div className="footer2 f23">
                <ul>
                        <li> info@rhyno.in</li>
                        <li>+91-9023987528</li>
                        <li>Raisan, Gandhinagar, Gujarat, India.</li>
                    </ul>
                </div>
                <div className="footer2"><ul>
                        <li><Link to="/Privacy" class="footer3">Privacy Policy</Link></li>
                        <li><Link to="/Terms" class="footer3">Terms of services</Link></li>
                        <li><Link to="/Refund" class="footer3"> Refund Policy</Link></li>
                    </ul></div>
                </div>
                <br></br>
              
                <div class="f24">
                
                <a class="btn btn-sm btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/rhyno-wheels/"><i class="fab fa-linkedin-in fw-normal" aria-hidden="true"></i>.</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-sm btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fab fa-instagram fw-normal" aria-hidden="true"></i>.</a>
                <br></br>
                <br></br>
                <p >&copy; All Rights Are Reserved By Rhyno EV</p>
                </div>
    </footer>
  );
}

export default Footer;