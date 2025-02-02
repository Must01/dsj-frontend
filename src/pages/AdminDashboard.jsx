import React from "react";
import { destinations } from "../data/destinations";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen w-full mt-16 bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              Destinations
            </h2>
            <div className="space-y-4">
              {destinations.map((destination) => (
                <div
                  key={destination._id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold text-gray-800">
                        {destination.destinationName}
                      </p>
                      <p className="text-gray-600">{destination.location}</p>
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => alert("Edit destination")}
                        className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => alert("Delete destination")}
                        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
