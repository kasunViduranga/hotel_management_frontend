import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import {
  MdOutlineCategory,
  MdOutlineRoom,
  MdOutlineFeedback,
} from "react-icons/md";
import { FiUsers, FiImage } from "react-icons/fi";
import { useState } from "react";

import AdminBooking from "../admin/Bookings/adminBooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminRooms from "../admin/rooms/adminRooms";
import AdminUsers from "../admin/users/users";
import AdminFeedback from "../admin/feedback/feedback";
import AdminGalleryItems from "../admin/galleryItems/galleryItems";

export default function AdminPage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex items-center justify-between bg-[#101827] text-[#FEA116] px-4 py-3 shadow-md">
        {/* Sidebar Toggle for Mobile */}
        <button
          onClick={toggleSidebar}
          className="block lg:hidden text-white text-2xl"
        >
          ☰
        </button>

        {/* Hotel Name */}
        <div className="text-2xl font-bold lg:text-4xl">LuxeStay</div>

        {/* User Profile */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg text-gray-800 z-50">
              <ul className="py-1">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={() => alert("Profile Clicked")}
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-200"
                    onClick={() => alert("Logout Clicked")}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative top-0 bg-[#101827] h-screen w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 z-40 lg:h-full`}
        >
          <div className="text-white text-2xl font-bold p-4"></div>
          <nav className="flex flex-col space-y-4 px-4">

            <Link
              to="/admin/bookings"
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
            >
              <FiImage />
              <span>Bookings</span>
            </Link>

            <Link
              to="/admin/categories"
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
            >
              <MdOutlineCategory />
              <span>Categories</span>
            </Link>

            <Link
              to="/admin/rooms"
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
            >
              <MdOutlineRoom />
              <span>Rooms</span>
            </Link>

            <Link
              to="/admin/feedback"
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
            >
              <MdOutlineFeedback />
              <span>Feedback</span>
            </Link>

            <Link
              to="/admin/gallery-items"
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
            >
              <FiImage />
              <span>Gallery Items</span>
            </Link>

            <Link
              to="/admin/users"
              onClick={toggleSidebar}
              className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
            >
              <FiUsers />
              <span>Users</span>
            </Link>

          </nav>
        </div>

        {/* Overlay for Sidebar in Mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Content Area */}
        <div className="flex-1 bg-[#f3f4f6] overflow-y-scroll">
          <Routes>
            <Route path="/bookings" element={<AdminBooking />} />
            <Route path="/categories" element={<AdminCategories />} />
            <Route path="/rooms" element={<AdminRooms />} />
            <Route path="/users" element={<AdminUsers />} />
            <Route path="/feedback" element={<AdminFeedback />} />
            <Route path="/gallery-items" element={<AdminGalleryItems />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

/* Sidebar Link Component */
const SidebarLink = ({ to, icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};
