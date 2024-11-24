import { FaStar, FaWifi, FaBed, FaBath } from "react-icons/fa";
import Room1 from "../../../assets/room-1.jpg";
import Room2 from "../../../assets/room-2.jpg";
import Room3 from "../../../assets/room-3.jpg";

const OurRooms = () => {

    return (
        <section className="py-10 bg-[#f1f8ff]" >
            <div className="container mx-auto px-4" >
                {/* Section Heading */}
                < div className="text-center mb-10" >
                    <h6 className="text-[#FEA116] font-semibold uppercase" > ______ Our Rooms ______ </h6>
                    <h1 className="text-4xl font-bold text-[#FEA116]" > Explre Our <span className="text-4xl font-bold text-[#000000] uppercase">Rooms</span> </h1>
                </div>

                {/* Room Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >

                    <div className="bg-white shadow-lg overflow-hidden" >
                        {/* Room Image */}
                        <div className="relative" >
                            <img
                                src={Room1}
                                alt="Deluxe Room"
                                className="w-full h-60 object-cover"
                            />
                            <span className="absolute left-4 top-full -translate-y-1/2 bg-[#FEA116] text-white rounded py-1 px-3" >
                                $200/Night
                            </span>
                        </div>

                        {/* Room Details */}
                        < div className="p-5" >
                            {/* Room Name and Rating */}
                            < div className="flex justify-between items-center mb-3" >
                                <h5 className="text-lg font-bold" > Deluxe Room </h5>
                                < div className="flex space-x-1" >
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                            </div>

                            {/* Room Facilities */}
                            < div className="flex space-x-4 mb-3" >
                                <small className="flex items-center border-r pr-3" >
                                    <FaBed className="inline-block text-[#FEA116] mr-1" />
                                    < span className="ml-1 text-sm text-gray-600" >
                                        1 Bed
                                    </span>
                                </small>
                                <small className="flex items-center border-r pr-3" >
                                    <FaBath className="inline-block text-[#FEA116] mr-1" />
                                    < span className="ml-1 text-sm text-gray-600" >
                                        1 Bed
                                    </span>
                                </small>
                                <small className="flex items-center  pr-3" >
                                    <FaWifi className="inline-block text-[#FEA116] mr-1" />
                                    <FaWifi className="inline-block text-[#FEA116] mr-1" />
                                </small>
                            </div>

                            {/* Room Description */}
                            <p className="text-gray-700 mb-5" > Spacious room with modern amenities and beautiful views. </p>

                            {/* Buttons */}
                            <div className="flex justify-between" >
                                <a
                                    href="#"
                                    className="bg-[#FEA116] text-white text-sm py-2 px-4 hover:bg-[#e58d0a]"
                                >
                                    View Details
                                </a>
                                < a
                                    href="#"
                                    className="bg-gray-800 text-white text-sm py-2 px-4 hover:bg-gray-700"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg overflow-hidden" >
                        {/* Room Image */}
                        < div className="relative" >
                            <img
                                src={Room2}
                                alt="Deluxe Room"
                                className="w-full h-60 object-cover"
                            />
                            <span className="absolute left-4 top-full -translate-y-1/2 bg-[#FEA116] text-white rounded py-1 px-3" >
                                $200/Night
                            </span>
                        </div>

                        {/* Room Details */}
                        < div className="p-5" >
                            {/* Room Name and Rating */}
                            < div className="flex justify-between items-center mb-3" >
                                <h5 className="text-lg font-bold" > Deluxe Room </h5>
                                < div className="flex space-x-1" >
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                            </div>

                            {/* Room Facilities */}
                            < div className="flex space-x-4 mb-3" >
                                <small className="flex items-center border-r pr-3" >
                                    <FaBed className="inline-block text-[#FEA116] mr-1" />
                                    < span className="ml-1 text-sm text-gray-600" >
                                        1 Bed
                                    </span>
                                </small>
                                <small className="flex items-center border-r pr-3" >
                                    <FaBath className="inline-block text-[#FEA116] mr-1" />
                                    < span className="ml-1 text-sm text-gray-600" >
                                        1 Bed
                                    </span>
                                </small>
                                <small className="flex items-center  pr-3" >
                                    <FaWifi className="inline-block text-[#FEA116] mr-1" />
                                    <FaWifi className="inline-block text-[#FEA116] mr-1" />
                                </small>
                            </div>

                            {/* Room Description */}
                            <p className="text-gray-700 mb-5" > Spacious room with modern amenities and beautiful views. </p>

                            {/* Buttons */}
                            <div className="flex justify-between" >
                                <a
                                    href="#"
                                    className="bg-[#FEA116] text-white text-sm py-2 px-4 hover:bg-[#e58d0a]"
                                >
                                    View Details
                                </a>
                                <a
                                    href="#"
                                    className="bg-gray-800 text-white text-sm py-2 px-4 hover:bg-gray-700"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg overflow-hidden" >
                        {/* Room Image */}
                        < div className="relative" >
                            <img
                                src={Room3}
                                alt="Deluxe Room"
                                className="w-full h-60 object-cover"
                            />
                            <span className="absolute left-4 top-full -translate-y-1/2 bg-[#FEA116] text-white rounded py-1 px-3" >
                                $200/Night
                            </span>
                        </div>

                        {/* Room Details */}
                        < div className="p-5" >
                            {/* Room Name and Rating */}
                            < div className="flex justify-between items-center mb-3" >
                                <h5 className="text-lg font-bold" > Deluxe Room </h5>
                                < div className="flex space-x-1" >
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                    <FaStar className="text-yellow-500" />
                                </div>
                            </div>

                            {/* Room Facilities */}
                            < div className="flex space-x-4 mb-3" >
                                <small className="flex items-center border-r pr-3" >
                                    <FaBed className="inline-block text-[#FEA116] mr-1" />
                                    < span className="ml-1 text-sm text-gray-600" >
                                        1 Bed
                                    </span>
                                </small>
                                <small className="flex items-center border-r pr-3" >
                                    <FaBath className="inline-block text-[#FEA116] mr-1" />
                                    < span className="ml-1 text-sm text-gray-600" >
                                        1 Bed
                                    </span>
                                </small>
                                <small className="flex items-center  pr-3" >
                                    <FaWifi className="inline-block text-[#FEA116] mr-1" />
                                    <FaWifi className="inline-block text-[#FEA116] mr-1" />
                                </small>
                            </div>

                            {/* Room Description */}
                            <p className="text-gray-700 mb-5" > Spacious room with modern amenities and beautiful views. </p>

                            {/* Buttons */}
                            <div className="flex justify-between" >
                                <a
                                    href="#"
                                    className="bg-[#FEA116] text-white text-sm py-2 px-4 hover:bg-[#e58d0a]"
                                >
                                    View Details
                                </a>
                                < a
                                    href="#"
                                    className="bg-gray-800 text-white text-sm py-2 px-4 hover:bg-gray-700"
                                >
                                    Book Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurRooms;
