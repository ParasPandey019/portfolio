import React from "react";

const Button = ({ name, site }) => {
  return (
    <a href={site} target="_blank" rel="noreferrer">
      <button className="btn">{name}</button>
    </a>
  );
};

export default Button;
