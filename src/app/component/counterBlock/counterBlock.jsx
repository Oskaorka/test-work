import React from "react";

const CounterBlock = ({ like, name, classStyle, countLike }) => {
  return (
    <div className={classStyle}>
      <div>
        <img src={like} alt={name} />
      </div>
      <span>{countLike}</span>
    </div>
  );
};

export default CounterBlock;
