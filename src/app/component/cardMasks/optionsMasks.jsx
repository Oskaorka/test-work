import React from "react";
import "./optionMasks.scss";
const OptionMasks = ({ pathImg, title }) => {
  return (
    <div className="cardOptionMasks">
      <img className="round" src={pathImg} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default OptionMasks;
