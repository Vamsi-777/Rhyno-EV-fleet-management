import React from 'react';
import img2 from './img/grp.png';
import image1 from './img/blue.png';
import image2 from './img/black.png';
import image4 from './img/red.png';

function About() {
  return (
    <div className='top'>
      <h1 align='center'>About Rhyno</h1>
      <br></br>
        <br></br>
        <br></br>
        
        <section id="pcontent">
        <h3>Our History and Start</h3>
        <div id="pcenter">
          <p id="pdetails">Established in 2019 by an automotive engineer with a vision for sustainable and robust
mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team
of young individuals passionately driving innovation in the electric vehicle industry. We
believe in engineering solutions that solve problems.
With our first product, we've taken a bold step to create something more than just a vehicle;
it's a unique experience of elegance, comfort and style, addressing the pitfalls of
conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and
ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet
operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically
appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new
era in sustainable and dependable electric transportation.
          </p>
          <img src={img2} alt='no img' id='img'></img>
        </div>
        </section>
        
        <section align="center">
            <button class="btn btn-warning buy button2">Prebook now</button>
        </section>

        <div id="boxflex">
        <div id="mybox">
          <img
            src={image1}
            id="box-image"
            alt="no img"
            width="85px"
          ></img>
         
          <p id="below-boximage">
            <span>Blue</span><br />
            <br />
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
          </p>
          <a href="#" id="learn-more">Learn more</a>
        </div>
        <div id="mybox">
          <img
            src={image2}
            id="box-image"
            alt="no img"
            width="85px"
          ></img>
          <p id="below-boximage">
            <span>Black</span><br />
            <br />
            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
          </p>
          <a href="#" id="learn-more">Learn more</a>
        </div>
        <div id="mybox" >
          <img
            src={image4}
            id="box-image"
            alt="no img"
            width="85px"
          ></img>
          <p id="below-boximage">
            <span>Red</span><br />
            <br />
            This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.
            
          </p>
          <a href="" id="learn-more">Learn more</a>
        </div>
      </div>
      
    </div>
  );
}

export default About;