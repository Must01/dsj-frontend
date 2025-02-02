import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaHeart,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Destinations", path: "/destinations" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo}
              alt="DreamScapeJourney"
              className="h-12 w-12 object-contain"
            />
            <span
              className={`text-2xl font-bold ${
                isScrolled ? "text-primary" : "text-white"
              } transition-colors`}
            >
              DreamScapeJourney
            </span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg focus:outline-none ${
              isScrolled ? "text-primary" : "text-white"
            }`}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-8`}
          >
            <div className="md:flex md:items-center md:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 md:px-2 md:py-1 font-medium rounded-lg ${
                    isScrolled || isMenuOpen
                      ? "text-gray-700 hover:text-accent"
                      : "text-white hover:text-accent"
                  } transition-colors`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 px-4 md:px-0">
              <Link
                to="/login"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/80 transition-colors text-center mb-2 md:mb-0"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-accent text-white px-6 py-2 rounded-lg hover:bg-accent/80 transition-colors text-center"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
