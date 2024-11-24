import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172B] text-white py-10 px-4">
      <div className="container mx-auto space-y-8">
        {/* Subscribe Section */}
        <div className="text-center">
          <h3 className="mb-4 text-5xl font-bold">Subscribe Our <span className="text-[#FEA116]">Newsletter</span></h3>
          <form className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-gray-700 focus:outline-none md:w-1/2"
            />
            <button
              type="submit"
              className="bg-[#FEA116] hover:bg-[#e58d0a] text-white px-6 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="grid gap-8 lg:grid-cols-4">
          {/* 1st Row: Newsletter Box */}
          <div className="bg-[#FEA116]">
            <h4 className="my-8 mb-4 text-lg text-4xl font-bold text-center uppercase">LuxeStay</h4>
            <p className="mx-1 font-medium text-center text-white">
            LuxeStay offers luxurious accommodations and exceptional services for an unforgettable experience, blending elegance and comfort for every guest.
            </p>
          </div>

          {/* 2nd Row: Contact Details */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-[#ffffff]">Contact Us __________</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#ffffff]" />
                1234 Hotel Street, Galle, Sri lanka
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#ffffff]" />
                +94 234 567 890
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#ffffff]" />
                contact@hotelbooking.com
              </p>
            </div>
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                className="bg-white text-gray-700 hover:bg-[#FEA116] hover:text-white p-2 rounded-full transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-white text-gray-700 hover:bg-[#FEA116] hover:text-white p-2 rounded-full transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-white text-gray-700 hover:bg-[#FEA116] hover:text-white p-2 rounded-full transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-white text-gray-700 hover:bg-[#FEA116] hover:text-white p-2 rounded-full transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* 3rd Row: Company Details */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Company __________</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />About Us</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Contact Us</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Support</a></li>
            </ul>
          </div>

          {/* 4th Row: Services */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Services __________</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Food & Restaurant</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Spa & Fitness</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Sports & Gaming</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />Event & Party</a></li>
              <li><a href="#" className="hover:text-[#FEA116] flex items-center gap-2"><FaAngleDoubleRight className="text-[#ffffff]" />GYM & Yoga</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
