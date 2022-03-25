import React from "react";
import CardCollection from "../cardMasks/cardCollection";
import Marvin from "../../supportUtils/images/collection/userAvatar/Marvin.png";
import Agnes from "../../supportUtils/images/collection/userAvatar/Agnes.png";
import Charles from "../../supportUtils/images/collection/userAvatar/Charles.png";
import Like from "../../supportUtils/images/collection/heart.png";
import Shape from "../../supportUtils/images/collection/Shape.svg";
const BlocCollection = () => {
  return (
    <div className="profile-topCollection-container">
      <CardCollection
        path={Marvin}
        name="Marvin Frank"
        price="8 ETH - 34 ETH"
        title="Can You Get Free Games"
        like={Like}
        Shape={Shape}
        bg="one"
        countLike="85"
        countViews="45"
      />
      <CardCollection
        path={Charles}
        name="Marvin Frank"
        price="8 ETH - 34 ETH"
        title="Delivering Kisses And Miracles"
        like={Like}
        Shape={Shape}
        bg="two"
        countLike="88"
        countViews="12"
      />
      <CardCollection
        path={Agnes}
        name="Marvin Frank"
        price="8 ETH - 34 ETH"
        title="Compatible Inkjet Cartridge"
        like={Like}
        Shape={Shape}
        bg="three"
        countLike="99"
        countViews="34"
      />
    </div>
  );
};

export default BlocCollection;
