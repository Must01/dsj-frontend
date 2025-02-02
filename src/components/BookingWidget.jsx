import React, { useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BookingWidget = ({ destination }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberTravelers, setNumberTravelers] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const numberOfNights = differenceInCalendarDays(
    new Date(checkOut),
    new Date(checkIn)
  );

  const totalPrice = numberOfNights * destination.price * numberTravelers;

  const handleBooking = async () => {
    if (!checkIn || !checkOut || !numberTravelers || !name || !mobile) {
      alert("Please fill in all fields.");
      return;
    }

    if (new Date(checkIn) >= new Date(checkOut)) {
      alert("Check-in date must be before check-out date.");
      return;
    }

    setLoading(true);
    try {
      // Simulate a booking process
      const booking = {
        destination: destination._id,
        name,
        mobile,
        checkIn,
        checkOut,
        numberTravelers,
        price: totalPrice,
        paid: false,
      };
      console.log("Booking details:", booking);
      navigate("/payment", { state: { booking } });
    } catch (error) {
      console.error("Error booking tour:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-2xl shadow-card"
    >
      <h2 className="text-2xl font-bold text-primary mb-4">Book This Tour</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Number of Travelers
          </label>
          <input
            type="number"
            value={numberTravelers}
            onChange={(e) => setNumberTravelers(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Mobile</label>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <button
          onClick={handleBooking}
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-accent transition-colors"
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>
    </motion.div>
  );
};

export default BookingWidget;
