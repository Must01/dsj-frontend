import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { destinations } from "../data/destinations";

const EditBookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "John Doe",
    mobile: "1234567890",
    checkIn: "2023-10-01",
    checkOut: "2023-10-05",
    numberTravelers: 2,
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Booking updated successfully!");
    navigate("/account/bookings");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen w-full p-8"
    >
      <div className="flex gap-6 mb-6">
        {destinations[0]?.photos?.[0] && (
          <img
            src={destinations[0].photos[0]}
            alt={destinations[0].destinationName}
            className="w-48 h-48 object-cover rounded-lg"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-2">
            {destinations[0].destinationName}
          </h2>
          <p className="text-secondary">{destinations[0].location}</p>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-primary mb-8">Edit Booking</h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
        <form onSubmit={handleUpdate} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 font-medium mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-gray-600 font-medium mb-2"
            >
              Mobile:
            </label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="checkIn"
              className="block text-gray-600 font-medium mb-2"
            >
              Check-in Date:
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={(e) =>
                setFormData({ ...formData, checkIn: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="checkOut"
              className="block text-gray-600 font-medium mb-2"
            >
              Check-out Date:
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              value={formData.checkOut}
              onChange={(e) =>
                setFormData({ ...formData, checkOut: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label
              htmlFor="numberTravelers"
              className="block text-gray-600 font-medium mb-2"
            >
              Number of Travelers:
            </label>
            <input
              type="number"
              id="numberTravelers"
              name="numberTravelers"
              value={formData.numberTravelers}
              onChange={(e) =>
                setFormData({ ...formData, numberTravelers: e.target.value })
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
              min="1"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Update Booking
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default EditBookingPage;
