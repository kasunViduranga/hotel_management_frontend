import AboutImage1 from "../../../assets/about-1.jpg";
import AboutImage2 from "../../../assets/about-2.jpg";
import AboutImage3 from "../../../assets/about-3.jpg";
import AboutImage4 from "../../../assets/about-4.jpg";
import React from "react";
import {FaUsers,FaHotel,FaUsersCog,} from "react-icons/fa";

const About = () => {
    return (
        <div className="bg-[#f1f8ff] text-gray-900">

            {/* About Section */}
            <section className="container mx-auto px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Column - Text and Info Boxes */}
                    <div>
                        <h6 className="text-lg font-semibold text-[#FEA116] uppercase">
                            About Us
                        </h6>
                        <h1 className="text-4xl font-bold mb-6">
                            Welcome to <span className="text-[#FEA116]">LuxeStay</span>
                        </h1>
                        <p className="text-gray-700 mb-6">
                            LuxeStay offers premium hospitality with luxurious rooms, world-class
                            amenities, and an unforgettable experience. We prioritize your comfort
                            and satisfaction.
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Room Count */}
                            <div className=" border-double border-8 p-4 text-center">
                                <div className="flex items-center justify-center">
                                    <FaHotel className="text-[#FEA116] text-5xl mb-2" />
                                </div>
                                <h2 className="text-3xl font-bold">7561</h2>
                                <p className="text-gray-600 uppercase">Rooms</p>
                            </div>
                            {/* Staff Count */}
                            <div className="border-double border-8 p-4 text-center">
                                <div className="flex items-center justify-center">
                                    <FaUsers className="text-[#FEA116] text-5xl mb-2" />
                                </div>
                                <h2 className="text-2xl font-bold">1154</h2>
                                <p className="text-gray-600 uppercase">Staff</p>
                            </div>
                            {/* Client Count */}
                            <div className="border-double border-8 p-4 text-center">
                                <div className="flex items-center justify-center">
                                    <FaUsersCog className="text-[#FEA116] text-5xl mb-2" />
                                </div>
                                <h2 className="text-2xl font-bold">5339</h2>
                                <p className="text-gray-600 uppercase">Clients</p>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="bg-[#FEA116] text-white px-12 py-4 hover:bg-[#e58d0a]"
                        >
                            Explore More
                        </a>
                    </div>

                    {/* Right Column - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col space-y-4">
                            <img
                                src={AboutImage1}
                                alt="About Image 1"
                                className="rounded-md w-3/4 self-end"
                            />
                            <img
                                src={AboutImage2}
                                alt="About Image 2"
                                className="rounded-md w-full"
                            />
                        </div>

                        <div className="flex flex-col space-y-4">
                            <img
                                src={AboutImage3}
                                alt="About Image 3"
                                className="rounded-md w-full self-end"
                            />
                            <img
                                src={AboutImage4}
                                alt="About Image 4"
                                className="rounded-md w-3/4"
                            />
                        </div>

                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default About;
