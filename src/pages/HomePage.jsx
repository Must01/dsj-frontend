import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard";
import Spinner from "../components/Spinner";
import { FaArrowRight, FaMapMarkerAlt, FaStar, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center w-full justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen w-full"
    >
      <section className="h-screen relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Hero Background"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
        </div>

        <div className="relative h-full flex items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Experience breathtaking destinations and create memories that last
              a lifetime.
            </p>
            <Link
              to="/destinations"
              className="inline-flex items-center space-x-3 bg-accent text-white px-8 py-4 rounded-full hover:bg-accent/90 transition-all transform hover:scale-105"
            >
              <span>Explore Destinations</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our hand-picked selection of amazing destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.slice(0, 4).map((destination, index) => (
              <motion.div
                key={destination._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="transform hover:scale-105 transition-all duration-300"
              >
                <DestinationCard destination={destination} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/destinations"
              className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 font-semibold"
            >
              <span>View All Destinations</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
