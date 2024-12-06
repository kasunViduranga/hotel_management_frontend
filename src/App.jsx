import Header from "./components/header/header";
import './App.css';
import HomePage from "./pages/client-page/homePage";
import AboutPage from "./pages/about-page/aboutpage";
import ServicesPage from "./pages/services-page/servicespage";
import RoomsPage from "./pages/rooms-page/roomspage";
import ContactPage from "./pages/contact-page/contactpage";
import AdminPage from "./pages/adminpage/admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "./components/test/test";
import LoginPage from "./pages/login/login";
import 'animate.css';
import React from 'react';
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes path="/*">

        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/our-Rooms" element={<RoomsPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
