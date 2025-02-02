import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhotoUploader from "../components/PhotoUploader.jsx";
import { FaPlus, FaSave } from "react-icons/fa";
import {
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
import Spinner from "../components/Spinner.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDestinationPage = () => {
  const [destinationName, setDestinationName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [maxTravelers, setMaxTravelers] = useState("");
  const [tourDuration, setTourDuration] = useState("");
  const [features, setFeatures] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const featureOptions = [
    { value: "wifi", label: "Wi-Fi", icon: <FaWifi /> },
    { value: "pool", label: "Pool", icon: <FaSwimmingPool /> },
    { value: "restaurant", label: "Restaurant", icon: <FaUtensils /> },
    { value: "parking", label: "Parking", icon: <FaParking /> },
    { value: "ac", label: "Air Conditioning", icon: <FaSnowflake /> },
    { value: "tv", label: "TV", icon: <FaTv /> },
    { value: "shower", label: "Shower", icon: <FaShower /> },
    { value: "coffee", label: "Coffee", icon: <FaCoffee /> },
    { value: "breakfast", label: "Breakfast Included", icon: <FaUtensils /> },
    {
      value: "private-bathroom",
      label: "Private Bathroom",
      icon: <FaShower />,
    },
    { value: "ocean-view", label: "Ocean View", icon: <FaWater /> },
    {
      value: "free-cancellation",
      label: "Free Cancellation",
      icon: <FaTimesCircle />,
    },
    { value: "pet-friendly", label: "Pet Friendly", icon: <FaPaw /> },
    { value: "spa", label: "Spa Services", icon: <FaSpa /> },
    { value: "fitness-center", label: "Fitness Center", icon: <FaDumbbell /> },
    { value: "airport-transfer", label: "Airport Transfer", icon: <FaPlane /> },
    { value: "guided-tours", label: "Guided Tours", icon: <FaMapMarkedAlt /> },
    { value: "child-friendly", label: "Child Friendly", icon: <FaChild /> },
    { value: "all-inclusive", label: "All-Inclusive", icon: <FaCocktail /> },
    {
      value: "outdoor-activities",
      label: "Outdoor Activities",
      icon: <FaHiking />,
    },
    { value: "beach-access", label: "Beach Access", icon: <FaUmbrellaBeach /> },
    { value: "eco-friendly", label: "Eco-Friendly", icon: <FaLeaf /> },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Destination created successfully!");
      navigate("/destinations");
    }, 2000);
  };

  const handleFeatureChange = (feature) => {
    setFeatures((prevFeatures) =>
      prevFeatures.includes(feature)
        ? prevFeatures.filter((f) => f !== feature)
        : [...prevFeatures, feature]
    );
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen mt-20 bg-background-50 w-full mb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white shadow-soft rounded-2xl px-8 py-6">
          <h1 className="text-3xl font-bold text-primary text-center mb-8">
            Add New Destination
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter destination name"
                  value={destinationName}
                  onChange={(e) => setDestinationName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[120px]"
                placeholder="Enter destination description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Travelers
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter max travelers"
                  value={maxTravelers}
                  onChange={(e) => setMaxTravelers(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tour Duration (days)
                </label>
                <input
                  type="number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Enter duration"
                  value={tourDuration}
                  onChange={(e) => setTourDuration(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Features
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {featureOptions.map((feature) => (
                  <div
                    key={feature.value}
                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      features.includes(feature.value)
                        ? "bg-primary/10 border-primary"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => handleFeatureChange(feature.value)}
                  >
                    <div className="text-primary">{feature.icon}</div>
                    <span className="text-gray-700">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Destination Photos
              </label>
              <PhotoUploader photos={photos} setPhotos={setPhotos} />
            </div>

            <div className="flex justify-end pt-6">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="btn-secondary mr-4"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-primary flex items-center"
                disabled={loading}
              >
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <FaPlus className="mr-2" />
                    Add Destination
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDestinationPage;
