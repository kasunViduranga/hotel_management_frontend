// 

import { FaSpa, FaUtensils, FaGlassCheers, FaSwimmer, FaDumbbell, FaHotel } from "react-icons/fa";

const OurServices = () => {

    return (
        <section className="py-10 bg-[#f1f8ff]">
            <div className="container mx-auto px-4">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h6 className="text-[#FEA116] font-semibold uppercase">______ Our Services ______</h6>
                    <h1 className="text-4xl font-bold text-[#FEA116]">Explore Our <span className="text-4xl font-bold text-[#000000] uppercase">Services</span></h1>
                </div>

                {/* Service Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a className="group bg-white shadow-lg p-6 text-center hover:bg-[#FEA116] group-hover:text-[#ffffff] transition duration-1000 hover:duration-500 cursor-pointer">
                        <div className="service-icon flex items-center justify-center w-20 h-20 mx-auto bg-transparent border-double border-8 p-2 mb-10 mt-10 group-hover:bg-[#FEA116] group-hover:text-white transition">
                            <FaHotel className="text-[#FEA116] text-5xl group-hover:text-[#ffffff]" />
                        </div>
                        <h5 className="text-2xl font-bold group-hover:text-[#ffffff] transition">
                            Rooms & Appartment
                        </h5>
                        <p className="text-gray-600 mt-3 mb-10 group-hover:text-[#ffffff]">
                            Experience comfort and elegance in our meticulously designed rooms and apartments, tailored for relaxation and modern living.
                        </p>
                    </a>

                    <a className="group bg-white shadow-lg p-6 text-center hover:bg-[#FEA116] group-hover:text-[#ffffff] transition duration-1000 hover:duration-500 cursor-pointer">
                        <div className="service-icon flex items-center justify-center w-20 h-20 mx-auto bg-transparent border-double border-8 p-2 mb-10 mt-10 group-hover:bg-[#FEA116] group-hover:text-white transition">
                            <FaUtensils className="text-[#FEA116] text-5xl group-hover:text-[#ffffff]" />
                        </div>
                        <h5 className="text-2xl font-bold group-hover:text-[#ffffff] transition">
                            Food & Restuarant
                        </h5>
                        <p className="text-gray-600 mt-3 mb-10 group-hover:text-[#ffffff]">
                            Savor a delightful culinary journey with our exquisite dishes, crafted from fresh ingredients and served in an inviting atmosphere.
                        </p>
                    </a>

                    <a className="group bg-white shadow-lg p-6 text-center hover:bg-[#FEA116] group-hover:text-[#ffffff] transition duration-1000 hover:duration-500 cursor-pointer">
                        <div className="service-icon flex items-center justify-center w-20 h-20 mx-auto bg-transparent border-double border-8 p-2 mb-10 mt-10 group-hover:bg-[#FEA116] group-hover:text-white transition">
                            <FaSpa className="text-[#FEA116] text-5xl group-hover:text-[#ffffff]" />
                        </div>
                        <h5 className="text-2xl font-bold group-hover:text-[#ffffff] transition">
                            Spa & fitness
                        </h5>
                        <p className="text-gray-600 mt-3 mb-10 group-hover:text-[#ffffff]">
                            Rejuvenate your body and mind with our relaxing spa treatments and state-of-the-art fitness facilities, designed for your well-being.
                        </p>
                    </a>

                    <a className="group bg-white shadow-lg p-6 text-center hover:bg-[#FEA116] group-hover:text-[#ffffff] transition duration-1000 hover:duration-500 cursor-pointer">
                        <div className="service-icon flex items-center justify-center w-20 h-20 mx-auto bg-transparent border-double border-8 p-2 mb-10 mt-10 group-hover:bg-[#FEA116] group-hover:text-white transition">
                            <FaSwimmer className="text-[#FEA116] text-5xl group-hover:text-[#ffffff]" />
                        </div>
                        <h5 className="text-2xl font-bold group-hover:text-[#ffffff] transition">
                            Sports & Gaming
                        </h5>
                        <p className="text-gray-600 mt-3 mb-10 group-hover:text-[#ffffff]">
                            Enjoy a perfect blend of excitement and relaxation with our sports activities and gaming experiences, catering to all ages and interests.
                        </p>
                    </a>

                    <a className="group bg-white shadow-lg p-6 text-center hover:bg-[#FEA116] group-hover:text-[#ffffff] transition duration-1000 hover:duration-500 cursor-pointer">
                        <div className="service-icon flex items-center justify-center w-20 h-20 mx-auto bg-transparent border-double border-8 p-2 mb-10 mt-10 group-hover:bg-[#FEA116] group-hover:text-white transition">
                            <FaGlassCheers className="text-[#FEA116] text-5xl group-hover:text-[#ffffff]" />
                        </div>
                        <h5 className="text-2xl font-bold group-hover:text-[#ffffff] transition">
                            Event & Party
                        </h5>
                        <p className="text-gray-600 mt-3 mb-10 group-hover:text-[#ffffff]">
                            Celebrate life's special moments with our exceptional event spaces and party services, tailored to create unforgettable experiences.
                        </p>
                    </a>

                    <a className="group bg-white shadow-lg p-6 text-center hover:bg-[#FEA116] group-hover:text-[#ffffff] transition duration-1000 hover:duration-500 cursor-pointer">
                        <div className="service-icon flex items-center justify-center w-20 h-20 mx-auto bg-transparent border-double border-8 p-2 mb-10 mt-10 group-hover:bg-[#FEA116] group-hover:text-white transition">
                            <FaDumbbell className="text-[#FEA116] text-5xl group-hover:text-[#ffffff]" />
                        </div>
                        <h5 className="text-2xl font-bold group-hover:text-[#ffffff] transition">
                            GYM & Yoga
                        </h5>
                        <p className="text-gray-600 mt-3 mb-10 group-hover:text-[#ffffff]">
                        Achieve balance and strength with our fully equipped gym and serene yoga sessions, promoting health and mindfulness.
                        </p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default OurServices;

