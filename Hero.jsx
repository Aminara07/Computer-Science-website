import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';

const Hero = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.9,
    slidesToScroll: 2.9,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    SwipeToSlide: 3,
  };

  const images = [
    "https://i.pinimg.com/736x/07/82/8b/07828bc5b3663a480697231c7d68d5e4.jpg",
    "https://i.pinimg.com/736x/b9/79/33/b979339219184fcb4946cc50384c8434.jpg",
    "https://i.pinimg.com/736x/d4/1f/37/d41f377cb76abeb045b922ed2cfde6c7.jpg",
    "https://i.pinimg.com/736x/cf/59/72/cf597201a17559884d48b96787dac529.jpg", 
    "https://i.pinimg.com/474x/2f/ca/6f/2fca6f911f86fd27814e358f55dd35da.jpg",
    "https://i.pinimg.com/736x/86/a2/b1/86a2b1cc3e30a07d7b2aa3ec735383b3.jpg",
    "https://i.pinimg.com/736x/04/92/94/04929437ce72e01222ec132e00656444.jpg",


  ];

  return (
    <div className='w-screen overflow-hidden -mt-[-100px] w-[1700px] -ml-[140px]'> {/* Full width and no horizontal overflow */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-[650px] px-4" // Adjust padding if needed
          >
            <img className='w-[650px] object-contain' src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
