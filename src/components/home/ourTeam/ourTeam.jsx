import React from "react";
import TeamMember1 from "../../../assets/team-1.jpg"; // Replace with your image paths
import TeamMember2 from "../../../assets/team-2.jpg";
import TeamMember3 from "../../../assets/team-3.jpg";
import TeamMember4 from "../../../assets/team-4.jpg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const team = [
    {
        image: TeamMember1,
        name: "John Doe",
        designation: "Manager",
    },
    {
        image: TeamMember2,
        name: "Jane Smith",
        designation: "Receptionist",
    },
    {
        image: TeamMember3,
        name: "Robert Brown",
        designation: "Chef",
    },
    {
        image: TeamMember4,
        name: "Emily White",
        designation: "Housekeeping",
    },
];

const socialIcons = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
];

const OurTeam = () => {
    return (
        <section className="py-10 bg-[#f1f8ff]">
            <div className="container mx-auto px-4">
                <div className="mb-16"> </div>
                <div className="text-center mb-10">
                    <h6 className="text-[#FEA116] font-semibold uppercase">______ Our Team ______</h6>
                    <h1 className="text-4xl font-bold text-[#FEA116]">Explore Our <span className="text-4xl font-bold text-[#000000] uppercase">Staffs</span></h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg overflow-hidden group"
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-64 object-cover"
                                    src={item.image}
                                    alt={item.name}
                                />
                                <div className="absolute inset-0 bg-primary bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <div className="flex space-x-3">
                                        {socialIcons.map((val, idx) => (
                                            <a
                                                key={idx}
                                                href={val.href}
                                                className="w-10 h-10 bg-[#FEA116] rounded-full flex items-center justify-center text-primary hover:bg-[#fe7e16] hover:text-white transition-colors"
                                            >
                                                {val.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center py-4">
                                <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
                                <p className="text-sm text-gray-500">{item.designation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
