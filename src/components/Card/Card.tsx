import React from "react";
import { CardProps } from "../../types/types";

const Card: React.FC<CardProps> = ({ src, alt, subject }) => {
  return (
    <div className="w-60 bg-color-scheme-lightgrey shadow-lg rounded-lg overflow-hidden">
      <div
        className="flex justify-center items-center mb-4"
        style={{ minHeight: "250px" }}
      >
        <img
          src={src}
          alt={alt || "image"}
          className="object-cover w-60 h-40"
        />
      </div>
      <div className="text-center p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate mb-2">
          {subject}{" "}
        </h3>
        <p className="text-gray-600">
          Placeholder description for the card content. This is a brief summary.
        </p>
        <p className="text-gray-600">Additional placeholder text.</p>
      </div>
    </div>
  );
};

export default Card;
