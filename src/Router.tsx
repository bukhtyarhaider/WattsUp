import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurService from "./pages/OurService/OurService";

const Router: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/about-us" index element={<AboutUs />} />
                <Route path="/contact-us" index element={<ContactUs />} />
                <Route path="/our-service" index element={<OurService />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </div>
    );
};

export default Router;