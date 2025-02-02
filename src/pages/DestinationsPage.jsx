import React, { useState } from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../components/DestinationCard.jsx";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";

const DestinationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.destinationName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-background mt-14 min-h-screen w-full p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-primary text-center mb-8">
          All Destinations
        </h1>
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg mb-8"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination, index) => (
            <motion.div
              key={destination._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DestinationsPage;
