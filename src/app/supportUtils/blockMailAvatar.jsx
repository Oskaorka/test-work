import React from "react";

const BlockMail = ({ mail, pathImg, styleName }) => {
  return (
    <div className={styleName}>
      <img src={pathImg} alt={mail} />
      <div className="">{mail}</div>
    </div>
  );
};

export default BlockMail;
