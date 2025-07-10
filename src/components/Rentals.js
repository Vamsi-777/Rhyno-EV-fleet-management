import React from 'react';
import './product.css';
import image7 from './img/rentals.png';

function Rentals() {
    return ( 
        <div className='top'>
            <div>
                <h1 align="center">Feel free to choose Bike</h1>
                <div class="r1">
                    <div class="r2">Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.<br></br>
                    Additionally, we're redefining campus commuting with our rental fleet tailored for college  students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.

                    </div>
                    
                        <img src={image7} alt='none' class="r3"></img>
                    
                </div>
                <div align="center">
                <h1>Here you can get the App</h1>
                <br></br>
                <a class="btn btn-lg btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fa-brands fa-google-play"></i></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-lg btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fa-brands fa-apple"></i></a>
                </div>
            </div>
        </div>
      
      
     );
}


export default Rentals;

