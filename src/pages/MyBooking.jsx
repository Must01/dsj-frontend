import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { destinations } from "../data/destinations";

const MyBooking = () => {
  const [bookings, setBookings] = useState([
    {
      _id: "1",
      destination: destinations[0],
      checkIn: "2023-10-01",
      checkOut: "2023-10-05",
      numberTravelers: 2,
      price: 2000,
      paid: false,
    },
    {
      _id: "2",
      destination: destinations[1],
      checkIn: "2023-11-01",
      checkOut: "2023-11-05",
      numberTravelers: 4,
      price: 3000,
      paid: true,
    },
  ]);
  const navigate = useNavigate();

  const handleBookingClick = (bookingId) => {
    navigate(`/bookings/${bookingId}`);
  };

  const handleDeleteBooking = (bookingId) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      setBookings(bookings.filter((booking) => booking._id !== bookingId));
      toast.success("Booking deleted successfully!");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen p-8 w-full"
    >
      <h1 className="text-4xl font-bold mt-8 text-primary mb-8">My Bookings</h1>
      <div className="bg-white p-6 rounded-2xl shadow-card">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <motion.div
              key={booking._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
              onClick={() => handleBookingClick(booking._id)}
            >
              <div className="flex gap-4">
                {booking.destination?.photos?.[0] && (
                  <img
                    src={booking.destination.photos[0]}
                    alt={booking.destination.destinationName}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h2 className="text-xl font-bold text-primary">
                    {booking.destination
                      ? booking.destination.destinationName
                      : "Unknown Destination"}
                  </h2>
                  <p className="text-secondary">
                    {new Date(booking.checkIn).toLocaleDateString()} -{" "}
                    {new Date(booking.checkOut).toLocaleDateString()}
                  </p>
                  <p className="text-secondary">
                    Number of Travelers: {booking.numberTravelers}
                  </p>
                  <p className="text-secondary">
                    Total Price: {booking.price} MAD
                  </p>
                  <p className="text-secondary">
                    Payment Status: {booking.paid ? "Paid" : "Not Paid"}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/bookings/${booking._id}/edit`);
                  }}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteBooking(booking._id);
                  }}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </motion.div>
  );
};

export default MyBooking;
