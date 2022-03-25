import React from "react";

const UserProfileTop = ({ pathImg, name, countMask, num }) => {
  return (
    <div className="profile-top-card">
      <span>{num}</span>
      <img src={pathImg} alt={name} />
      <div className="profile-top-card-about">
        <p className="name">{name}</p>
        <p>{countMask} Masks</p>
      </div>
    </div>
  );
};

export default UserProfileTop;
