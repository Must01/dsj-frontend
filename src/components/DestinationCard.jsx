import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStar, FaUsers } from "react-icons/fa";

const DestinationCard = ({ destination }) => {
  if (!destination) {
    return null;
  }

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      <Link to={`/destination/${destination._id}`}>
        <div className="relative">
          {destination.photos?.[0] && (
            <img
              src={destination.photos[0]}
              className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              alt={destination.destinationName}
            />
          )}
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">
            <span className="text-primary font-semibold">
              {destination.price} MAD
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h2 className="text-xl font-bold min-h-14 text-gray-800 hover:text-primary transition-colors">
              {destination.destinationName}
            </h2>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span className="text-sm">{destination.location}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 mr-1" />
                <span className="text-sm font-medium">
                  {destination.averageRating || "New"}
                </span>
              </div>

              <div className="flex items-center text-gray-600">
                <FaUsers className="mr-1" />
                <span className="text-sm">
                  Up to {destination.maxTravelers}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DestinationCard;
