import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-cover bg-center p-4 w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-2 mt-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-accent/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-accent text-xl" />
                <span>123 Travel Street, Dream City</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-accent text-xl" />
                <span>+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-accent text-xl" />
                <span>info@dreamscapejourney.com</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      <Icon size={24} />
                    </a>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
