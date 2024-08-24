import React from 'react';

const CustomPopupContent = ({ feature }) => {
  const attributes = feature.graphic.attributes;

  console.log("I am here");

  return (
    <div className="custom-popup-content">
      <h2>{attributes.name}</h2>
      <p>Additional information: {attributes.description}</p>
      <button id="viewDetailsBtn">View Details</button>
      <button id="editFeatureBtn">Edit Feature</button>
    </div>
  );
};

export default CustomPopupContent;