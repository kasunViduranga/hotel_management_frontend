import axios from "axios";
import { useEffect, useState } from "react";

const Header = (props) => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual authentication logic
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [name, setName] = useState("");
  const [userimage, setUserImage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/users", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setName(res.data.user.firstName);
          setUserImage("https://via.placeholder.com/40");
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setName("");
          setIsLoggedIn(false);
        });
    } else {
      setName("");
      setIsLoggedIn(false);
    }
  }, []);
 
  return (
    <header
      className="bg-[#0F172B] text-white shadow-md"
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold uppercase" style={{ color: "#FEA116" }}>
          Luxe<span>Stay</span>
        </div>

        {/* Navigation (Desktop) */}
        <nav className="hidden space-x-6 md:flex">
          <a
            href="/"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Home
          </a>
          <a
            href="/about-us"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            About
          </a>
          <a
            href="/our-services"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Services
          </a>
          <a
            href="/our-rooms"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Rooms
          </a>
          <a
            href="/contact-us"
            className="hover:text-[#FEA116] transition uppercase font-medium"
          >
            Contact
          </a>
        </nav>

        {/* User Authentication Section */}
        <div className="hidden md:flex relative">
          {isLoggedIn ? (
            <div className="flex items-center cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src={userimage}
                alt="User"
                className="w-10 h-10 rounded-full border-2 border-[#FEA116]"
              />
              <span className="ml-3 font-medium">{name}</span>
              {dropdownOpen && (
                <div className="absolute right-0 mt-[175px] bg-white text-black rounded-lg shadow-lg w-48 z-50">
                  <a
                    href="#profile"
                    className="block px-4 py-2 hover:rounded-lg m-2 justify-center text-center rounded-lg hover:bg-[#ee9c22] bg-[#fca728] font-bold hover:text-white"
                  >
                    Profile
                  </a>
                  <a
                    href="#logout"
                    className="block px-4 py-2 hover:rounded-lg m-2 justify-center text-center rounded-lg hover:bg-[#ee9c22] bg-[#fca728] font-bold hover:text-white"
                    onClick={() => {
                      setIsLoggedIn(false); // Handle logout logic
                    }}
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="bg-[#ffa318] text-[#000000] py-2 px-6 rounded-full font-medium hover:bg-[#fe9216] hover:text-[#ffffff] transition"
            >
              Login
            </a>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M3.75 5h16.5m-16.5 7h16.5m-16.5 7h16.5" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="bg-gray-800 md:hidden">
          <nav className="px-4 py-4 space-y-2">
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Home
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              About
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Services
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Rooms
            </a>
            <a href="#" className="block text-white hover:text-[#FEA116] uppercase font-medium">
              Contact
            </a>
          </nav>
          <div className="flex justify-center py-4">
            {isLoggedIn ? (
              <a
                href="#profile"
                className="mr-10 bg-[#ffa318] text-[#000000] py-2 px-6 rounded-full font-medium hover:bg-[#fe9216] hover:text-[#ffffff] transition"
              >
                Logout
              </a>

            ) : (
              <a
                href="/login"
                className="bg-[#ffa318] text-[#000000] py-2 px-6 rounded-full font-medium hover:bg-[#fe9216] hover:text-[#ffffff] transition"
              >
                Login
              </a>
            )}

            {isLoggedIn ? (
              <a
                href="#profile"
                className="bg-[#ffa318] text-[#000000] py-2 px-6 rounded-full font-medium hover:bg-[#fe9216] hover:text-[#ffffff] transition"
              >
                Profile
              </a>

            ) : (
              <a > </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
