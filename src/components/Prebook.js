import React from 'react';
import './product.css';
import image7 from './img/Prebook.png'

function Prebook() {
    return ( 
        <div className='top'>
          <div align="center">
        <h1> Book Your Ride</h1>
        <img src={image7} alt='none' className='prebook1'></img>
        </div>
        <div className='prebook2'>
          <fieldset>
            <legend> Enjoy the ride</legend>
            <form>
            <label for="fname">First Name:</label>
            <input type='text' autoComplete='on' autoFocus required placeholder='Enter your first name' id='fname' name='fname'></input>
            <label for="lname">Last Name:</label>
            <input type='text' autoComplete='on' required placeholder='Enter your last name' id='lname' name='lname'></input>
            <label for="phone">Phone No:</label>
            <input type='tel' autoComplete='on' required placeholder='+91' id='phone' name='phone' maxlength="10" pattern="[0-9]{10}"></input>
            <label for="Bike">Choose Bike:</label>
            <select name='Bike' id='Bike'>
              <option value='SEO3 Lite'>SEO3 Lite</option>
              <option value='SEO3'>SEO3</option>
              <option value='SEO3 Max'>SEO3 Max</option>
            </select>
            <br></br>
            <label for="color">Bike Color</label>
            <select name='color' id='color'>
              <option value="Red">Red</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Gold">Gold</option>
            </select><br></br>
            <label for="pincode">Enter Pincode:</label>
        <input type="text" id="pincode" name="pincode" pattern="[0-9]{6}" placeholder='Pincode pls' required></input>
        
            <label for="date">Select a date:</label>
            <input type="date" id="date" name="date" required></input>
            <br></br>
            <button type='Reset' className='prebook3'>Reset</button>
            <button type='Submit' className='prebook3'>Submit</button>
           
            </form>
          </fieldset>
         
          </div>
          <div align='center'>
          <br></br>
                <a class="btn btn-lg btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fa-brands fa-google-play"></i></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a class="btn btn-lg btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fa-brands fa-apple"></i></a>
                </div>
                
      </div>
      
     );
}


export default Prebook;

