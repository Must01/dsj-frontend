import React from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(/both_in_lake.jpg)` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <section className="relative h-[400px] flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto px-4">
            Dedicated to creating unforgettable travel experiences
          </p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 relative z-10 bg-white rounded-t-3xl -mt-10 shadow-xl">
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to DreamScapeJourney, your ultimate travel companion. We
              are dedicated to providing you with unforgettable travel
              experiences. Our team of experts carefully curates each
              destination to ensure you have the best adventure of your life.
              Whether you're looking for a relaxing beach getaway or an exciting
              mountain trek, we've got you covered.
            </p>
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO & Founder",
                email: "john.doe@example.com",
                phone: "+123 456 7890",
              },
              {
                name: "Jane Smith",
                role: "Travel Expert",
                email: "jane.smith@example.com",
                phone: "+123 456 7890",
              },
              {
                name: "Mike Johnson",
                role: "Customer Support",
                email: "mike.johnson@example.com",
                phone: "+123 456 7890",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <FaUser
                      className="text-4xl text-gray-400"
                      alt="User Icon"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-accent" alt="Email Icon" />
                    <span className="text-gray-600">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-accent" alt="Phone Icon" />
                    <span className="text-gray-600">{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive to exceed expectations in every journey we plan.",
              },
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty and transparency.",
              },
              {
                title: "Innovation",
                description:
                  "We continuously seek new ways to enhance your travel experience.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default AboutPage;
