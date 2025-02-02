import React from "react";
import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";
import { motion } from "framer-motion";

const BookingDetailsPage = () => {
  const { id } = useParams();
  const booking = {
    _id: id,
    destination: destinations[0],
    checkIn: "2023-10-01",
    checkOut: "2023-10-05",
    numberTravelers: 2,
    price: 2000,
    paid: false,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen p-8 w-full"
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Booking Details</h1>
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
        <div className="flex gap-6 mb-6">
          {booking.destination?.photos?.[0] && (
            <img
              src={booking.destination.photos[0]}
              alt={booking.destination.destinationName}
              className="w-48 h-48 object-cover rounded-lg"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-2">
              {booking.destination
                ? booking.destination.destinationName
                : "Unknown Destination"}
            </h2>
            <p className="text-secondary">{booking.destination?.location}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <p className="text-gray-600 font-medium">Check-in:</p>
            <p className="text-lg">
              {new Date(booking.checkIn).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Check-out:</p>
            <p className="text-lg">
              {new Date(booking.checkOut).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Number of Travelers:</p>
            <p className="text-lg">{booking.numberTravelers}</p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Total Price:</p>
            <p className="text-lg font-bold text-primary">
              {booking.price} MAD
            </p>
          </div>
          <div>
            <p className="text-gray-600 font-medium">Payment Status:</p>
            <p
              className={`text-lg font-bold ${
                booking.paid ? "text-green-600" : "text-red-600"
              }`}
            >
              {booking.paid ? "Paid" : "Not Paid"}
            </p>
          </div>
        </div>

        {!booking.paid && (
          <button
            onClick={() => alert("Proceed to payment")}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            Proceed to Payment
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default BookingDetailsPage;
