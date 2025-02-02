import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "../components/BookingWidget.jsx";
import Spinner from "../components/Spinner.jsx";
import PhotoGrid from "../components/PhotoGrid.jsx";
import { destinations } from "../data/destinations.js";
import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaHeart,
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaParking,
  FaSnowflake,
  FaTv,
  FaShower,
  FaCoffee,
  FaWater,
  FaTimesCircle,
  FaPaw,
  FaSpa,
  FaDumbbell,
  FaPlane,
  FaMapMarkedAlt,
  FaChild,
  FaCocktail,
  FaHiking,
  FaUmbrellaBeach,
  FaLeaf,
} from "react-icons/fa";

const DestinationPage = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(
    destinations.find((dest) => dest._id === id)
  );
  const [isLiked, setIsLiked] = useState(false);

  if (!destination) {
    return <Spinner />;
  }

  const featureIcons = {
    wifi: <FaWifi className="text-primary text-xl" />,
    pool: <FaSwimmingPool className="text-primary text-xl" />,
    restaurant: <FaUtensils className="text-primary text-xl" />,
    parking: <FaParking className="text-primary text-xl" />,
    ac: <FaSnowflake className="text-primary text-xl" />,
    tv: <FaTv className="text-primary text-xl" />,
    shower: <FaShower className="text-primary text-xl" />,
    coffee: <FaCoffee className="text-primary text-xl" />,
    breakfast: <FaUtensils className="text-primary text-xl" />,
    "private-bathroom": <FaShower className="text-primary text-xl" />,
    "ocean-view": <FaWater className="text-primary text-xl" />,
    "free-cancellation": <FaTimesCircle className="text-primary text-xl" />,
    "pet-friendly": <FaPaw className="text-primary text-xl" />,
    spa: <FaSpa className="text-primary text-xl" />,
    "fitness-center": <FaDumbbell className="text-primary text-xl" />,
    "airport-transfer": <FaPlane className="text-primary text-xl" />,
    "guided-tours": <FaMapMarkedAlt className="text-primary text-xl" />,
    "child-friendly": <FaChild className="text-primary text-xl" />,
    "all-inclusive": <FaCocktail className="text-primary text-xl" />,
    "outdoor-activities": <FaHiking className="text-primary text-xl" />,
    "beach-access": <FaUmbrellaBeach className="text-primary text-xl" />,
    "eco-friendly": <FaLeaf className="text-primary text-xl" />,
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-gradient-to-br from-background to-gray-100 min-h-screen w-full p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl p-6 md:p-12">
        <h1 className="text-5xl font-bold text-primary mb-8 hover:text-accent transition-colors duration-300 tracking-tight">
          {destination.destinationName}
        </h1>

        <div className="space-y-8">
          <PhotoGrid destination={destination} />
          <p className="text-secondary mt-6 leading-relaxed text-lg font-light">
            {destination.description}
          </p>

          <div className="mt-8 bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 hover:text-primary transition-colors duration-300">
              <FaMapMarkerAlt className="text-primary text-2xl" />
              <span className="text-secondary text-xl font-medium">
                {destination.location}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-8 mt-6">
              <div className="flex items-center hover:transform hover:scale-105 transition-transform duration-300">
                <FaStar className="text-yellow-500 text-2xl mr-2" />
                <span className="text-secondary text-lg">
                  {destination.averageRating || "No ratings yet"}
                </span>
              </div>
              <div className="flex items-center hover:transform hover:scale-105 transition-transform duration-300">
                <FaUsers className="text-primary text-2xl mr-2" />
                <span className="text-secondary text-lg">
                  {destination.maxTravelers} travelers
                </span>
              </div>
              <div className="flex items-center hover:transform hover:scale-105 transition-transform duration-300">
                <FaHeart className="text-red-500 text-2xl mr-2" />
                <span className="text-secondary text-lg">
                  {destination.likes} likes
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary mb-6">
              Included Features:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {destination.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl hover:bg-white transition-all duration-300"
                >
                  {featureIcons[feature]}
                  <span className="text-gray-700 capitalize">
                    {feature.replace(/-/g, " ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6">
            <button
              onClick={handleLike}
              className={`${
                isLiked ? "bg-red-500" : "bg-primary"
              } text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center space-x-3 font-medium`}
            >
              <FaHeart className={`${isLiked ? "text-white" : ""} text-lg`} />
              <span>{isLiked ? "Unlike" : "Like"}</span>
            </button>
          </div>
        </div>

        <div className="mt-12">
          <BookingWidget destination={destination} />
        </div>
      </div>
    </div>
  );
};

export default DestinationPage;
