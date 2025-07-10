import React from 'react';
import './product.css'
import ImageSlider from './ImageSlider';
import image1 from './img/blue.png';
import image2 from './img/black.png';
import image4 from './img/red.png';
import { useState, useEffect } from 'react';

const images = [
  { url: image1, alt: 'Image 1' },
  { url: image2, alt: 'Image 2' },
  { url: image4, alt: 'Image 3' },
  // Add more images as needed
];

export default function Home(props) {
  const styles = ["Style","Elegance", "Minimalism", "Comfort"];
  const [currentStyle, setCurrentStyle] = useState(styles[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentStyle((prevStyle) => {
        const currentIndex = styles.indexOf(prevStyle);
        return styles[(currentIndex + 1) % styles.length];
      });
    }, 3000);
    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);
  return (
    <>
    <div class='top'></div>
    <section className="featured-section">
    <div className="slider-container">
      <ImageSlider images={images} />
    </div>
    <div className="text-container">
    <h1 className='front-line1'>Let's Elevate Your Ride Experience With Rhyno</h1> <h2 className='front-line2'>- Where Superiority Meets <span className='dynamic-text'>{currentStyle}</span></h2>
    </div>
  </section>
  <br></br>
  <br></br>
  <br></br>
  <div align='center'>
    <h1>Some of the details</h1>
    <p className='home1'>Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems. With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability. Join us as we pioneer a new era in sustainable and dependable electric transportation.</p>
  </div>
  <br></br>
  <br></br>
  <br></br>

  <section class="usp">
        <h2>Our Unique Selling Points</h2>
        <div class="usp-grid">
            <div class="usp-card">
                <h3>LFP Battery</h3>
                <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
renowned for their safety features—eliminating the risk of fire associated with other
Lithium batteries. These batteries boast a broader temperature range, ideal for the
diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
by an Active Balancing Smart Battery Management System (BMS) for extended life
and reduced maintenance.</p>
            </div>
            <div class="usp-card">
                <h3>Wide Tyres</h3>
                <p> Now, say goodbye to skidding and embrace the leaning turns!
Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
beast that ensures stability on different terrains such as wet roads, mud, and sand.
</p>
            </div>
            <div class="usp-card">
                <h3>Range Prediction</h3>
                <p>Many budget-friendly electric scooters overlook this crucial
feature, causing riders to experience range anxiety. With Rhyno, you can ride with
peace of mind, thanks to the scooter providing precise information about the
remaining battery</p>
            </div>
            <div class="usp-card">
                <h3>Extraordinary Experience</h3>
                <p> Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!
</p>
            </div>
            <div class="usp-card">
                <h3>Rugged and Simple Design</h3>
                <p>: We’ve had enough of the EVs looking and feeling like
fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
ending up spending weeks and months at service stations for complex repairs. We
took a bold step of making something raw, rugged, and practical.</p>
            </div>
        </div>
    </section>
  </>
  );
}
