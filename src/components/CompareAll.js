import React from 'react';
import './product.css';
import image5 from './img/compare1.png';
import image6 from './img/compare2.png';

function CompareAll() {
    return ( 
        <div className='top'>
        <h1 align="center">SEO3 Lite <a class="btn btn-lg btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fa-solid fa-star"></i></a>
        &nbsp;SEO3 <a class="btn btn-lg btn-outline-dark btn-sm-square rounded-circle me-2" href="https://www.instagram.com/rhyno.in/?hl=en"><i class="fa-solid fa-star"></i></a>
        &nbsp;SEO3 Max</h1>
        <br></br>
        <div class="image6">
        <img src={image5} class="image5" alt="none"></img>
        <img src={image6} class="image5" alt="none"></img>
        </div>
        <section align="center">
            <button class="btn btn-warning buy button2">Buy now</button>
        </section>
        <div class="table1">
        <table>
            <tr class="table-secondary">
                <th>Specifications</th>
                <th>SEO3 Lite</th>
                <th>SEO3 </th>
                <th>SEO3 Max</th>
            </tr>
            <tr class="table2">
                <td>Battery</td>
                <td>1.8Kwh</td>
                <td>2.7Kwh</td>
                <td>2.7Kwh</td>
            </tr>
            <tr class="table2">
                <td>Battery
features
</td>
                <td>LFP with
1500 cycles
Active
Balancing
Waterproof
(IP67)</td>
                <td>LFP with 1500
cycles
Active
Balancing
Waterproof
(IP67)
</td>
                <td>LFP with 1500
cycles
Active
Balancing
Waterproof
(IP67)
</td>
            </tr>
            <tr class="table2">
                <td>Battery
                warranty</td>
                <td>3 Years</td>
                <td>3 Years</td>
                <td>3 Years</td>
            </tr>
            <tr class="table2">
                <td>Charging time </td>
                <td>3 hours (12A)</td>
                <td>4 hours (12A)</td>
                <td>4 hours (12A)</td>
            </tr>
            <tr class="table2">
                <td>Motor</td>
                <td>1500W</td>
                <td>1500W</td>
                <td>2000W</td>
            </tr>
            <tr class="table2">
                <td>Max speed </td>
                <td>55 km/h</td>
                <td>55 km/h</td>
                <td>65 km/h</td>
            </tr>
            <tr class="table2">
                <td>Warranty on
                electronics</td>
                <td>1 year</td>
                <td>1 year</td>
                <td>1 year</td>
            </tr>
            <tr class="table2">
                <td>Max range
(@30km/h)
</td>
                <td>100 km </td>
                <td>150 km </td>
                <td>120 km </td>
            </tr>
            <tr class="table2">
                <td>Max range
                (@45km/h)</td>
                <td>90 km </td>
                <td>110 km </td>
                <td>100 km </td>
            </tr>
            <tr class="table2">
                <td>Max range
                (@45km/h)</td>
                <td>60 km </td>
                <td>90 km </td>
                <td>80 km </td>
            </tr>
        </table>
        </div>
      </div>
      
     );
}


export default CompareAll;

