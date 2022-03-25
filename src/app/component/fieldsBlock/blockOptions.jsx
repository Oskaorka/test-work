import React from "react";
import OptionMasks from "../cardMasks/optionsMasks";
import Popular from "../../supportUtils/images/main/Popular.png";
import BuyFerst from "../../supportUtils/images/main/BuyFerst.png";
import World from "../../supportUtils/images/main/World.png";
import LastMask from "../../supportUtils/images/main/LastMasks.png";
import "./blockOptions.scss";

const BlocOptionsMasks = () => {
  return (
    <div className="profile-main">
      <div className="options-masks">
        <OptionMasks pathImg={Popular} title="Popular" />
        <OptionMasks pathImg={LastMask} title="Last Masks" />
        <OptionMasks pathImg={BuyFerst} title="Buy Ferst" />
        <OptionMasks pathImg={World} title="World" />
      </div>
    </div>
  );
};

export default BlocOptionsMasks;
