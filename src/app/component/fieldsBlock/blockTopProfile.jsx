import React from "react";
import UserProfileTop from "../cardMasks/cardTopProfile";
import One from "../../supportUtils/images/topProfile/1.png";
import Two from "../../supportUtils/images/topProfile/2.png";
import Three from "../../supportUtils/images/topProfile/3.png";
import Four from "../../supportUtils/images/topProfile/4.png";
import Five from "../../supportUtils/images/topProfile/5.png";
import Six from "../../supportUtils/images/topProfile/6.png";
import Seven from "../../supportUtils/images/topProfile/7.png";
import Eight from "../../supportUtils/images/topProfile/8.png";
import Nine from "../../supportUtils/images/topProfile/9.png";
import Ten from "../../supportUtils/images/topProfile/10.png";
import Eleven from "../../supportUtils/images/topProfile/11.png";
import Twelve from "../../supportUtils/images/topProfile/12.png";
import Thirteen from "../../supportUtils/images/topProfile/13.png";
import Fourteen from "../../supportUtils/images/topProfile/14.png";
import Fifteen from "../../supportUtils/images/topProfile/15.png";
import Diveder from "../../supportUtils/images/divider";
import TitleCard from "../titleCard/titleCard";

const TopProfile = () => {
  return (
    <div className="profile-top">
      <TitleCard title="Top profile" />
      <div className="container">
        <Diveder position="main" />
        <UserProfileTop
          pathImg={One}
          name="Lucinda Stanley"
          countMask="748"
          num="1"
        />
        <UserProfileTop
          pathImg={Two}
          name="Cole West"
          countMask="748"
          num="2"
        />
        <UserProfileTop
          pathImg={Three}
          name="Carlos Hart"
          countMask="748"
          num="3"
        />
        <UserProfileTop
          pathImg={Four}
          name="Lora Abbott"
          countMask="748"
          num="4"
        />
        <UserProfileTop
          pathImg={Five}
          name="Miguel Dennis"
          countMask="748"
          num="5"
        />
        <Diveder position="two" />
        <UserProfileTop
          pathImg={Six}
          name="Miguel Dennis"
          countMask="748"
          num="6"
        />
        <UserProfileTop
          pathImg={Seven}
          name="Miguel Dennis"
          countMask="748"
          num="7"
        />
        <UserProfileTop
          pathImg={Eight}
          name="Miguel Dennis"
          countMask="748"
          num="8"
        />
        <UserProfileTop
          pathImg={Nine}
          name="Miguel Dennis"
          countMask="748"
          num="9"
        />
        <UserProfileTop
          pathImg={Ten}
          name="Miguel Dennis"
          countMask="748"
          num="10"
        />
        <Diveder position="three" />
        <UserProfileTop
          pathImg={Eleven}
          name="Patrick Buchanan"
          countMask="748"
          num="11"
        />
        <UserProfileTop
          pathImg={Twelve}
          name="Patrick Buchanan"
          countMask="748"
          num="12"
        />
        <UserProfileTop
          pathImg={Thirteen}
          name="Olive Green"
          countMask="748"
          num="13"
        />
        <UserProfileTop
          pathImg={Fourteen}
          name="Olive Green"
          countMask="748"
          num="14"
        />
        <UserProfileTop
          pathImg={Fifteen}
          name="Loretta Green"
          countMask="748"
          num="15"
        />
        <Diveder position="four" />
      </div>
    </div>
  );
};

export default TopProfile;
