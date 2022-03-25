import React from "react";
import BlockMail from "../../supportUtils/blockMailAvatar";

const VideoCard = ({ coin, mail, pathImg, background }) => {
  return (
    <div
      className="collections-video-card"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="sup">{coin}</div>
      <BlockMail mail={mail} pathImg={pathImg} styleName="sub" />
    </div>
  );
};

export default VideoCard;
