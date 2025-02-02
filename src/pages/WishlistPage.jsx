import React from "react";
import DestinationCard from "../components/DestinationCard.jsx";
import { destinations } from "../data/destinations";

const WishlistPage = () => {
  const wishlist = destinations.slice(0, 2); // Simulate wishlist with first 2 destinations

  return (
    <div className="bg-background min-h-screen p-8 w-full">
      <h1 className="text-4xl font-bold text-primary mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;
