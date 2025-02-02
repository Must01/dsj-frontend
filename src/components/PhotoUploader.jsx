import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaUpload } from "react-icons/fa";

const PhotoUploader = ({ photos, setPhotos }) => {
  const [photoLink, setPhotoLink] = useState("");

  const addPhotoByLink = (e) => {
    e.preventDefault();
    setPhotos([...photos, photoLink]);
    setPhotoLink("");
  };

  const uploadPhoto = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      alert("No files selected.");
      return;
    }

    const newPhotos = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setPhotos([...photos, ...newPhotos]);
  };

  const removePhoto = (index) => {
    const updatedPhotos = photos.filter((_, i) => i !== index);
    setPhotos(updatedPhotos);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Add photo using a link"
          value={photoLink}
          onChange={(e) => setPhotoLink(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button
          onClick={addPhotoByLink}
          className="bg-primary text-white p-2 rounded-lg hover:bg-accent"
        >
          Add Photo
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="relative group">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => removePhoto(index)}
              className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white transition-all duration-300"
            >
              <FaTimes className="text-red-500" />
            </button>
          </div>
        ))}
        <label className="flex flex-col items-center justify-center bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 p-4">
          <FaUpload className="text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">Upload Photos</span>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhoto}
          />
        </label>
      </div>
    </motion.div>
  );
};

export default PhotoUploader;
