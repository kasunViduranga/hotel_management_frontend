import axios from "axios";
import { Link, Route, Routes } from "react-router-dom";
import {
  MdOutlineDashboardCustomize,
  MdOutlineCategory,
  MdOutlineRoom,
  MdOutlineFeedback,
} from "react-icons/md";
import { FiUsers, FiImage } from "react-icons/fi";
import { useState, useEffect } from "react";

// Importing Components
import AdminBooking from "../admin/Bookings/adminBooking";
import AdminCategories from "../admin/categories/adminCategories";
import AdminRooms from "../admin/rooms/adminRooms";
import AdminUsers from "../admin/users/users";
import AdminFeedback from "../admin/feedback/feedback";
import AdminGalleryItems from "../admin/galleryItems/galleryItems";
import AdminHomeDashboard from "../admin/adminHome/adminHome";

export default function AdminPage(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const Header = (props) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [name, setName] = useState("");
    const [userImage, setUserImage] = useState("");

    //Login Function
    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
        axios
          .get(`${import.meta.env.VITE_BACKEND_URL}/api/users`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res);
            setName(res.data.user.firstName);
            setUserImage("https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png");
            setIsLoggedIn(true);
          })
          .catch((err) => {
            console.log(err);
            setName("");
            setIsLoggedIn(false);
            window.location.href = "/login"
          });
      } else {
        setName("");
        setIsLoggedIn(false);
        window.location.href = "/login"
      }
    }, []);

    //Logout Function
    const logout = () => {
      
      localStorage.removeItem("token");
    
      setIsLoggedIn(false);
    
      window.location.href = "/login";
    };

    return (
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
        <div className="relative flex items-center">
          <img
            src={userImage}
            alt="User Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          />
          <span className="ml-3 font-medium">{name}</span>
          {dropdownOpen && (
            <div className="absolute right-0 mt-[150px] w-40 bg-white rounded shadow-lg text-gray-800 z-50">
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
                    onClick={logout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    );
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative top-0 bg-[#101827] h-screen w-64 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition-transform duration-300 z-40 lg:h-full`}
        >
          <div className="text-white text-2xl font-bold p-4"></div>
          <nav className="flex flex-col space-y-4 px-4 mt-[30px]">
            <SidebarLink
              to="/admin/"
              icon={<MdOutlineDashboardCustomize />}
              label="Dashboard"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="/admin/bookings"
              icon={<FiImage />}
              label="Bookings"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="/admin/categories"
              icon={<MdOutlineCategory />}
              label="Categories"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="/admin/rooms"
              icon={<MdOutlineRoom />}
              label="Rooms"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="/admin/feedback"
              icon={<MdOutlineFeedback />}
              label="Feedback"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="/admin/gallery-items"
              icon={<FiImage />}
              label="Gallery Items"
              onClick={toggleSidebar}
            />
            <SidebarLink
              to="/admin/users"
              icon={<FiUsers />}
              label="Users"
              onClick={toggleSidebar}
            />
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
            <Route path="/" element={<AdminHomeDashboard />} />
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
const SidebarLink = ({ to, icon, label, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center gap-2 text-white text-lg hover:font-bold hover:bg-blue-500 px-4 py-2 rounded"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};
