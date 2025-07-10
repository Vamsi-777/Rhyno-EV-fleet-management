// src/components/ImageChanger.js
import React, { useState } from 'react';
import './product.css'
import image1 from './img/blue.png';
import image2 from './img/black.png';
import image3 from './img/gold.png';
import image4 from './img/red.png';

function ImageChanger() {
  const [currentImage, setCurrentImage] = useState(image1);

  const changeImage = (image) => {
    setCurrentImage(image);
  };

  return (
    
    <div align="center">
    <img id="blue" src={currentImage}  className='img1' alt='no img'></img>
    <br></br>
    <br></br>
    <br></br>
  
    <button class="btn btn-info button" onClick={() => changeImage(image1)}>Blue</button>
        <button class="btn btn-secondary button" onClick={() => changeImage(image2)}>Black</button>
        <button class="btn btn-warning button" onClick={() => changeImage(image3)}>Gold</button>
        <button class="btn btn-danger button" onClick={() => changeImage(image4)}>Red</button>
    </div>
  );
}

export default ImageChanger;
