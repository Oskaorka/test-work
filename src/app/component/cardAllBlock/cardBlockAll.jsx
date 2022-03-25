import React from "react";
//import CounterBlock from "../counterBlock/counterBlock";
import TitleCard from "../titleCard/titleCard";
import Card from "./card";
import User1 from "../../supportUtils/images/allMasks/usersImg/user1.png";
import User2 from "../../supportUtils/images/allMasks/usersImg/user2.png";
import User3 from "../../supportUtils/images/allMasks/usersImg/user3.png";
import User4 from "../../supportUtils/images/allMasks/usersImg/user4.png";
import bgCard1 from "../../supportUtils/images/allMasks/bgCard/poni.png";
import bgCard2 from "../../supportUtils/images/allMasks/bgCard/girl.png";
import bgCard3 from "../../supportUtils/images/allMasks/bgCard/hero.png";
import bgCard4 from "../../supportUtils/images/allMasks/bgCard/smile.png";

import cardAvatar from "../../supportUtils/images/allMasks/cardsAvatar/hourse.png";
import cardAvatar2 from "../../supportUtils/images/allMasks/cardsAvatar/car.png";
import cardAvatar3 from "../../supportUtils/images/allMasks/cardsAvatar/paiper.png";
//import cardAvatar from "../../supportUtils/images/allMasks/cardsAvatar/hourse.png";

const AllCardBlock = ({ like, name }) => {
  console.log(User1);
  return (
    <>
      <TitleCard title="All Masks" />
      <div className="profile-allCard">
        <Card
          bgCard={bgCard1}
          title="When The Morning Dawns"
          costNft="1.776 ETH"
          costConvert="$862"
          path={User1}
          mail="@mani"
          cardsAvatar={cardAvatar}
          countLike="56"
        />
        <Card
          bgCard={bgCard2}
          title="The Science Of Superstitions"
          costNft="1.25 ETH"
          costConvert="$666"
          path={User2}
          mail="@chougar"
          cardsAvatar={cardAvatar3}
          countLike="50"
        />
        <Card
          bgCard={bgCard3}
          title="Unlocking The Bible Codes"
          costNft="1.8 ETH"
          costConvert="$701"
          path={User3}
          mail="@gold"
          cardsAvatar={cardAvatar2}
          countLike="50"
        />
        <Card
          bgCard={bgCard4}
          title="Mind Power The Ultimate Success…"
          costNft="1.6 ETH"
          costConvert="$739"
          path={User4}
          mail="@cameron    "
          cardsAvatar={cardAvatar3}
          countLike="88"
        />
      </div>
    </>
  );
};

export default AllCardBlock;
