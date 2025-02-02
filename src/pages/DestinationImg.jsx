import React from "react";

const DestinationImg = ({ destination, index = 0 }) => {
  const fallbackImage = "https://via.placeholder.com/300";

  return (
    <>
      {destination.photos?.[0] && (
        <img
          className="rounded-lg aspect-square object-cover w-full h-full"
          src={destination.photos[index]}
          alt={destination.destinationName}
          onError={(e) => {
            e.target.src = fallbackImage;
          }}
        />
      )}
    </>
  );
};

export default DestinationImg;
