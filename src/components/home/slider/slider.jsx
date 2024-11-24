import SliderImage1 from "../../../assets/carousel-1.jpg"
import SliderImage2 from "../../../assets/carousel-2.jpg"
import Box from "../booking/booking"

import React, { useState, useEffect } from "react";

const Slider = () => {
  // State for slider
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [SliderImage1, SliderImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Function to go to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
<section className="relative h-screen">
    <div className="relative w-full h-screen bg-[f1f8ff]]">
      {/* Full-screen Image Slider */}
      <div
        className="relative w-full h-full transition-all duration-700 bg-center bg-cover"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        {/* Overlay for transparency */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Animated Text */}
        <div className="absolute text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h4 className="text-2xl text-[#ffa318] font-bold animate__animated animate__fadeIn animate__delay-1s">
            __ Luxury living __
          </h4>
          <h1 className="max-lg:text-4xl font-bold md:text-6xl animate__animated animate__fadeIn animate__delay-1s">
            Discover A Brand Luxurious Hotel
          </h1>
        </div>

        {/* Buttons */}
        <div className="absolute flex space-x-14 transform -translate-x-1/2 bottom-32 left-1/2">
          <button className="px-6 py-3 text-white uppercase transition duration-200 bg-[#FEA116] hover:bg-[#f3af4a] hover:text-black text-1xl font-medium">
            Our Room
          </button>
          <button className="px-6 py-3 text-black uppercase transition duration-200 bg-white text-1xl font-medium">
            Book Room
          </button>
        </div>

        {/* Slider Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute p-10 text-6xl text-[#363636] transition duration-200 transform -translate-y-1/2 rounded-full left-4 top-1/2 hover:text-[#b9b9b9]"
        >
          &#60;
        </button>
        <button
          onClick={nextSlide}
          className="absolute p-10 text-6xl text-[#363636] transition duration-200 transform -translate-y-1/2  rounded-full right-4 top-1/2 hover:text-[#b9b9b9]"
        >
          &#62;
        </button>
        
      </div>
      
    </div>
    </section>
  );
};

export default Slider;
