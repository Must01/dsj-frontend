import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              DreamScapeJourney is your ultimate travel companion, offering
              unforgettable travel experiences around the world.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <motion.a
                  href="/"
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-accent transition-colors"
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/destinations"
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-accent transition-colors"
                >
                  Destinations
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </motion.a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="hover:text-accent transition-colors"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="hover:text-accent transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="hover:text-accent transition-colors"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="hover:text-accent transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="text-sm space-y-2">
              <li>Email: info@dreamscapejourney.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Travel Street, Dream City</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} DreamScapeJourney. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
