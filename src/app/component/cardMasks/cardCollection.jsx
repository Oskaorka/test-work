import React from "react";
import CounterBlock from "../counterBlock/counterBlock";

const CardCollection = ({
  path,
  name,
  price,
  title,
  like,
  bg,
  Shape,
  countLike,
  countViews,
}) => {
  return (
    <div className={`profile-topCollection-card ${bg}`}>
      <CounterBlock
        like={Shape}
        name={name}
        classStyle="shape"
        countLike={countViews}
      />
      <div className="masks">Masks</div>
      <p className="title">{title}</p>
      <div className="collection-card-footer">
        <div>
          <img className="avatar" src={path} alt="img" />
        </div>
        <div>
          <p>Creator</p>
          <p>{name}</p>
        </div>
        <div>
          <p>Price</p>
          <p>{price}</p>
        </div>
        <CounterBlock
          like={like}
          name={name}
          classStyle="like"
          countLike={countLike}
        />
      </div>
    </div>
  );
};

export default CardCollection;
