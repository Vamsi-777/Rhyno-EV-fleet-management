import React from 'react';
import './product.css';
import img2 from './img/grp.png';
import ImageChanger from './ImageChanger';

function product3() {
    return ( 
        <div className='top'>
        <h1 align="center">SEO3 Max</h1>
        <br></br>
        
        <ImageChanger />
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section id="pcontent">
        <h3>Specifications of SEO3 Max</h3>
        <div id="pcenter">
          <p id="pdetails">
          This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches. 
          </p>
          <img src={img2} alt='no img' id='img'></img>
        </div>
        </section>
        
        <section align="center">
            <button class="btn btn-warning buy button2">Buy now</button>
        </section>
        <br></br><br></br><br></br>
        <br></br><br></br>
        <br></br><section class="usp">
            <h2>Our Unique Selling Points about SEO3 Max</h2>
            <div class="usp-grid">
                <div class="usp-card">
                    <h3>LFP Battery</h3>
                    <p>  2.7Kwh,
LFP with 1500 cycles
Active Balancing
Waterproof (IP67)

Battery warranty:
3 Years
Charging time
4 hours (12A)
                        
                        
                        
                        
                         </p>
                </div>
                <div class="usp-card">
                    <h3>Motor and warranty</h3>
                    <p>
                    Motor
                        2000W,
                        Warranty on electronics
                        1 year for every product
                                                
                        
                        </p>
                </div>
                <div class="usp-card">
                    <h3>Speed and Range Prediction</h3>
                    <p> 
                    Max speed
                        65 km/h,
                        Max range (@30km/h)
                        120 km,
                        Max range (@45km/h)
                        100 km,
                        Max range (@full speed)
                        80 km.
                        
                        
                        
                        </p>
                </div>
                <div class="usp-card">
                    <h3>Other key benefits</h3>
                    <p>
                        Fire-safe battery,
                        Range prediction,
                        Comfortable ride,
                        Stable and safe,
                        
                        </p>
                    </div>
            </div>
        </section>
 
      </div>
      
      
     );
}


export default product3;

