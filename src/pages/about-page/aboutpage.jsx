import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import About from "../../components/home/about/about";
import Testimonials from "../../components/home/testimonial/testimonial";
import OurTeam from "../../components/home/ourTeam/ourTeam";

const HomePage = () => {
  
  return (
    <>
    <Header />
    <About/>
    <Testimonials/>
    <OurTeam/>
    <Footer/>
    </>
  );
};

export default HomePage;