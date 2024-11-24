import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import Slider from "../../components/home/slider/slider";
import BookingBox from "../../components/home/booking/booking";
import About from "../../components/home/about/about";
import OurRooms from "../../components/home/ourRooms/ourRooms";
import OurServises from "../../components/home/ourService/ourService";
import Testimonials from "../../components/home/testimonial/testimonial";
import OurTeam from "../../components/home/ourTeam/ourTeam";

const HomePage = () => {
  
  return (
    <>
    <Header />
    <Slider/>
    <BookingBox/>
    <About/>
    <OurRooms/>
    <OurServises/>
    <Testimonials/>
    <OurTeam/>
    <Footer/>
    </>
  );
};

export default HomePage;