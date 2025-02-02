import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/Navbar.jsx";
import HomePage from "./pages/Homepage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import MyProfile from "./pages/MyProfile";
import MyBooking from "./pages/MyBooking";
import PaymentPage from "./pages/PaymentPage";
import Footer from "./components/Footer";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import DestinationsPage from "./pages/DestinationsPage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <div className="bg-gray-600 flex flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destination/:id" element={<DestinationPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/account" element={<MyProfile />} />
          <Route path="/account/bookings" element={<MyBooking />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
