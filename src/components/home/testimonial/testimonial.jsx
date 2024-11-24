import React, { useState } from 'react';

const testimonials = [
  { id: 1, name: "John Doe", profession: "Developer", description: "Great place to stay!", img: "path/to/img1.jpg" },
  { id: 2, name: "Jane Smith", profession: "Designer", description: "Loved the experience!", img: "path/to/img2.jpg" },
  { id: 3, name: "Alice Brown", profession: "Manager", description: "Would visit again!", img: "path/to/img3.jpg" },
  { id: 4, name: "Bob White", profession: "Engineer", description: "Perfect stay for families.", img: "path/to/img4.jpg" },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container-xxl my-5 py-5 bg-dark">
      <div className="container">
        <h2 className="text-center text-white mb-4">What Our Guests Say</h2>
        <div className="testimonial-slider flex justify-between items-center">
          {/* Left Arrow Button */}
          <button onClick={prevSlide} className="text-white bg-primary p-2 rounded-full">
            &#10094;
          </button>

          <div className="testimonial-cards flex overflow-hidden">
            {/* Testimonial Cards */}
            {testimonials.slice(currentIndex, currentIndex + 2).map((item) => (
              <div key={item.id} className="testimonial-item text-white p-4 bg-white rounded-lg mx-2">
                <div className="flex items-center">
                  <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h6 className="font-bold">{item.name}</h6>
                    <small>{item.profession}</small>
                  </div>
                </div>
                <p className="mt-3">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button onClick={nextSlide} className="text-white bg-primary p-2 rounded-full">
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}
