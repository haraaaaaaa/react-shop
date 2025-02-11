import React from "react";

const Button = ({ children, className, type, onClick }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
