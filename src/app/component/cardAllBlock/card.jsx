import React from "react";
import CounterBlock from "../counterBlock/counterBlock";
import Like from "../../supportUtils/images/collection/greyHeart.svg";

const Card = ({
  title,
  costNft,
  costConvert,
  path,
  bgCard,
  mail,
  cardsAvatar,
  countLike,
}) => {
  return (
    <div className="cardz">
      <div className="cardz-bg">
        <img src={bgCard} alt={mail} />
      </div>
      <div className="cardsAvatar">
        <img src={cardsAvatar} alt={mail} />
      </div>
      <div className="profile-allCard-footer">
        <div className="profile-allCard-footer-title">{title}</div>
        <div className="profile-allCard-footer-costs">
          <div className="profile-allCard-footer-costNft">{costNft}</div>
          <div className="profile-allCard-footer-costConvert">
            {costConvert}
          </div>
        </div>
        <div className="profile-allCard-footer-subfooter">
          <div className="block-userImg">
            <img src={path} alt={title} />
          </div>
          <div className="block-mail">{mail}</div>
          <CounterBlock
            like={Like}
            name={"name"}
            classStyle="like"
            countLike={countLike}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
