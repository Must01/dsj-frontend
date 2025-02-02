import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner.jsx";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { booking } = state || {};

  const handlePaymentSuccess = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Payment successful! Your booking is confirmed.");
      navigate("/account/bookings");
    }, 2000);
  };

  if (!booking) {
    return <Spinner />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background min-h-screen w-full p-8"
    >
      <h1 className="text-4xl font-bold text-primary mb-8">Payment</h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-card max-w-3xl mx-auto"
      >
        <form onSubmit={handlePaymentSuccess} className="space-y-4">
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-gray-600 font-medium mb-2"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, ""))}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              maxLength="16"
              required
            />
          </div>
          <div>
            <label
              htmlFor="expiryDate"
              className="block text-gray-600 font-medium mb-2"
            >
              Expiry Date:
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              maxLength="5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cvv"
              className="block text-gray-600 font-medium mb-2"
            >
              CVV:
            </label>
            <input
              type="text"
              id="cvv"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              maxLength="3"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-accent transition-colors"
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PaymentPage;
