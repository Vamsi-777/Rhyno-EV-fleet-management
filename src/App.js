import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import './components/product.css'
import Home from './components/Home';
import About from './components/About';
import Product1 from './components/Product1';
import Product2 from './components/Product2';
import Product3 from './components/Product3';
import Prebook from './components/Prebook';
import Contact from './components/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Refund from './components/Refund';
import logo from './components/img/rhyno.png'
import Footer from './Footer';
import NoMatch from './components/NoMatch';
import CompareAll from './components/CompareAll';
import Rentals from './components/Rentals';

function App() {
  return (
    <Router>
      <div class=" text-lg-start  header2">
                <div class="d-inline-flex align-items-center">
                    <small class="me-3 text-dark"><i class="fa fa-map-marker-alt me-2" aria-hidden="true"></i>Raisan, Gandhinagar, Gujarat, India</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <small class="me-3 text-dark"><i class="fa fa-phone-alt me-2" aria-hidden="true"></i>+91-9023987528</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <small class="me-3 text-dark"><i class="fa fa-envelope-open me-2" aria-hidden="true"></i>info@rhyno.in</small>
                </div>
            
            <div class="d-inline-flex align-items-center header">
                    <a class="btn btn-sm btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/company/rhyno-wheels/"><i class="fab fa-linkedin-in fw-normal" aria-hidden="true"></i>.</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a class="btn btn-sm btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fab fa-instagram fw-normal" aria-hidden="true"></i>.</a>
                </div>
                </div>
      <nav className='nav' >
       <Link to='/' className='img'> <img src={logo} alt='no img' className='img'></img></Link>
      
        <Link to="/" style={{ padding: 5 }} className='anc'>
          Home
        </Link>
      
        <Link to="/About" style={{ padding: 5 }} className='anc'>
          About
        </Link>
        <Link to="#" style={{ padding: 5 }} className='anc'>
          <div className='dropdown'>Products
            <div className='dropdown-content'>
            <Link to="/Product1"  style={{ padding: 5 }} className='anc' id='link'>
          SEO3 Lite
        </Link>
        <Link to="/Product2" style={{ padding: 5 }} className='anc' id='link'>
          SEO3
        </Link>
        <Link to="/Product3" style={{ padding: 5 }} className='anc' id='link'>
          SEO3 Max
        </Link>
        <Link to="/CompareAll" style={{ padding: 5 }} className='anc' id='link'>
          CompareAll
        </Link>
        <Link to="/Rentals"></Link>
        <Link to="/Privacy"></Link>
        <Link to="/Terms"></Link>
        <Link to="/Refund"></Link>
              </div>
              </div>
        </Link>
        <Link to="/Prebook" style={{ padding: 5 }} className='anc'>
          Prebook
        </Link>
        <Link to="/Contact" style={{ padding: 5 }} className='anc'>
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product1" element={<Product1 />} />
        <Route path="/Product2" element={<Product2 />} />
        <Route path="/Product3" element={<Product3 />} />
        <Route path="/Prebook" element={<Prebook />} />
        <Route path="/CompareAll" element={<CompareAll />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/Rentals" element={<Rentals/>}/>
        <Route path="/Privacy" element={<Privacy/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/Refund" element={<Refund/>}/>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
