import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { motion } from "framer-motion";

const PhotoGrid = ({ destination }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-black bg-opacity-90 w-full h-full z-50 flex flex-col"
      >
        <div className="flex justify-between items-center p-4 md:p-6">
          <h2 className="text-lg md:text-xl text-white font-bold">
            Photos of: {destination.destinationName}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-white/90 hover:bg-white text-primary hover:text-secondary transition-all duration-300 px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl text-sm md:text-base border border-primary/20"
            onClick={() => setShowAllPhotos(false)}
          >
            <CiSquareRemove size={22} />
            <span className="font-semibold">Close Gallery</span>
          </motion.button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 md:p-8 grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-black">
          {destination?.photos?.length > 0 &&
            destination.photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                <img
                  src={photo}
                  className="aspect-video object-cover rounded-lg w-full h-full shadow-lg"
                  alt={`${destination.destinationName} - Photo ${i + 1}`}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2">
        {destination?.photos?.length > 0 && (
          <div className="flex relative group">
            <img
              src={destination.photos[0]}
              onClick={() => setShowAllPhotos(true)}
              className="w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl cursor-pointer aspect-video object-cover"
              alt={`${destination.destinationName} - Main Photo`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"></div>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {destination?.photos?.length > 1 && (
            <div className="flex relative group">
              <img
                src={destination.photos[1]}
                onClick={() => setShowAllPhotos(true)}
                className="w-full md:rounded-tr-2xl cursor-pointer aspect-video object-cover"
                alt={`${destination.destinationName} - Secondary Photo`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 md:rounded-tr-2xl"></div>
            </div>
          )}
          {destination?.photos?.length > 2 && (
            <div className="flex relative group">
              <img
                src={destination.photos[2]}
                onClick={() => setShowAllPhotos(true)}
                className="w-full rounded-b-2xl md:rounded-b-none md:rounded-br-2xl cursor-pointer aspect-video object-cover"
                alt={`${destination.destinationName} - Tertiary Photo`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-b-2xl md:rounded-b-none md:rounded-br-2xl"></div>
            </div>
          )}
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute bottom-2 right-2 py-0.5 px-1.5 border border-primary flex items-center gap-1.5 rounded-lg bg-white/90 hover:bg-white shadow-md hover:shadow-lg transition-all duration-300 group"
      >
        <CgMenuGridO className="w-4 h-4 opacity-75 group-hover:opacity-100" />
        <span className="font-medium text-xs md:text-sm opacity-75 group-hover:opacity-100">
          Show all photos
        </span>
      </button>
    </motion.div>
  );
};

export default PhotoGrid;
