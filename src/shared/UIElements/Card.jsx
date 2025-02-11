import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`p-4 shadow-md rounded-lg ${className}`}>{children}</div>
  );
};

export default Card;
