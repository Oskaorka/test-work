import React from "react";
import VideoCard from "../cardVideos/videoCard";

import background1 from "../../supportUtils/images/header/videos/video1.png";
import background2 from "../../supportUtils/images/header/videos/video2.png";
import background3 from "../../supportUtils/images/header/videos/video3.png";
import User1 from "../../supportUtils/images/allMasks/usersImg/user1.png";
import User2 from "../../supportUtils/images/allMasks/usersImg/user2.png";
import User3 from "../../supportUtils/images/allMasks/usersImg/user3.png";

const VideoCollection = () => {
  return (
    <div className="collections-video">
      <VideoCard
        coin="2 ETH"
        mail="@chougar"
        pathImg={User1}
        background={background1}
      />
      <VideoCard
        coin="2 ETH"
        mail="@chougar"
        pathImg={User2}
        background={background2}
      />
      <VideoCard
        coin="2 ETH"
        mail="@chougar"
        pathImg={User3}
        background={background3}
      />
    </div>
  );
};

export default VideoCollection;
