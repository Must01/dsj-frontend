import React, { useState } from "react";
import { FiCamera, FiEdit, FiSave, FiUser, FiMail } from "react-icons/fi";
import Spinner from "../components/Spinner.jsx";

const MyProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );
  const [coverPicture, setCoverPicture] = useState(
    "https://via.placeholder.com/1200x300"
  );
  const [isUploading, setIsUploading] = useState(false);

  const handleUpdateProfile = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      alert("Profile updated successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-56px)] w-full p-4 mt-14 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="relative h-48 md:h-64 w-full">
          <img
            src={coverPicture}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <label className="absolute bottom-4 right-4 cursor-pointer">
            <input
              type="file"
              onChange={(e) =>
                setCoverPicture(URL.createObjectURL(e.target.files[0]))
              }
              className="hidden"
              disabled={isUploading}
            />
            <div className="bg-white p-2 rounded-full shadow-lg text-gray-700 hover:text-gray-900">
              <FiCamera size={24} />
            </div>
          </label>
        </div>

        <div className="px-8 py-6">
          <div className="relative -mt-24 mb-6">
            <div className="relative w-32 h-32">
              <img
                src={profilePicture}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
              />
              <label className="absolute bottom-0 right-0 cursor-pointer">
                <input
                  type="file"
                  onChange={(e) =>
                    setProfilePicture(URL.createObjectURL(e.target.files[0]))
                  }
                  className="hidden"
                  disabled={isUploading}
                />
                <div className="bg-white p-2 rounded-full shadow-lg text-gray-700 hover:text-gray-900">
                  <FiEdit size={16} />
                </div>
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <FiUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
              />
            </div>

            <div className="relative">
              <FiMail className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
              />
            </div>

            <button
              onClick={handleUpdateProfile}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-md"
              disabled={isUploading}
            >
              <FiSave size={18} />
              {isUploading ? "Uploading..." : "Update Profile"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
