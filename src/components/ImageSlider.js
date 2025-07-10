// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt={image.alt} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
