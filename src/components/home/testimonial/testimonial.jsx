import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Testimonial1 from "../../../assets/testimonial-1.jpg";
import Testimonial2 from "../../../assets/testimonial-2.jpg";
import Testimonial3 from "../../../assets/testimonial-3.jpg";
import Testimonial4 from "../../../assets/testimonial-4.jpg";
import BackgroundImage from "../../../assets/carousel-2.jpg";

const testimonial = [
  {
    description:
      "LuxeStay exceeded my expectations! The rooms were spotless, and the staff was incredibly attentive. A truly unforgettable stay!",
    img: Testimonial1,
    name: "Ana Maria",
    profession: "Travel Blogger",
    icon: <FaQuoteLeft className="text-[#FEA116] text-3xl" />,
  },
  {
    description:
      "Amazing ambiance and fantastic service! LuxeStay is my go-to destination for relaxation and luxury.",
    img: Testimonial2,
    name: "Jane Smith",
    profession: "Entrepreneur",
    icon: <FaQuoteLeft className="text-[#FEA116] text-3xl" />,
  },
  {
    description:
      "From the food to the spa, everything was top-notch. I can't wait to visit LuxeStay again!",
    img: Testimonial3,
    name: "Robert Brown",
    profession: "Photographer",
    icon: <FaQuoteLeft className="text-[#FEA116] text-3xl" />,
  },
  {
    description:
      "The best hotel experience I've had! LuxeStay truly lives up to its name with impeccable service and facilities.",
    img: Testimonial4,
    name: "Emily White",
    profession: "Designer",
    icon: <FaQuoteLeft className="text-[#FEA116] text-3xl" />,
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: true,
  };

  return (
    <section
      className="testimonial-section py-10"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4" style={{ padding: "0 25px" }}>
        <Slider {...settings} className="testimonial-slider">
          {testimonial.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 "
            >
              <div className="mb-4">{item.icon}</div>
              <p className="text-gray-700 italic mb-6">{item.description}</p>
              <div className="flex items-center">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-2 border-[#FEA116] mr-4"
                />
                <div>
                  <h5 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h5>
                  <small className="text-gray-600">{item.profession}</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
