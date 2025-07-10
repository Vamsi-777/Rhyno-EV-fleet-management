import React from 'react';
import './product.css';
import img2 from './img/grp.png';
import ImageChanger from './ImageChanger';

function product1() {
    return ( 
        <div className='top'>
        <h1 align="center">SEO3 Lite</h1>
        <br></br>
        
        <ImageChanger />
      <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section id="pcontent">
        <h3>Specifications of SEO3 Lite</h3>
        <div id="pcenter">
          <p id="pdetails">
          Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
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
            <h2>Our Unique Selling Points about SEO3 Lite</h2>
            <div class="usp-grid">
                <div class="usp-card">
                    <h3>LFP Battery</h3>
                    <p> 1.8Kwh, LFP with 1500 cycles
                        Active Balancing
                        Waterproof (IP67),
                        Battery warranty:
                        3 Years, 
                        Charging time
                        3 hours (12A)
                        
                        
                        
                        
                         </p>
                </div>
                <div class="usp-card">
                    <h3>Motor and warranty</h3>
                    <p>
                        Motor
                        1500W,
                        Warranty on electronics
                        1 year for every product
                                                
                        
                        </p>
                </div>
                <div class="usp-card">
                    <h3>Speed and Range Prediction</h3>
                    <p> 
                        Max speed
                        50 km/h. 
                        Max range (@30km/h)
                        100 km,
                        Max range (@45km/h)
                        90 km,
                        Max range (@full speed)
                        70 km.
                        
                        
                        
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


export default product1;

