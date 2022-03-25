import React from "react";
import AllCardBlock from "../cardAllBlock/cardBlockAll";
import TitleCard from "../titleCard/titleCard";
import BlocCollection from "./blockCollection";
import BlocOptionsMasks from "./blockOptions";
import TopProfile from "./blockTopProfile";

const Body = () => {
  return (
    <section className="profile">
      <BlocOptionsMasks />
      <TopProfile />
      <div className="profile-topCollection">
        <TitleCard title="Top Collection" />
        <BlocCollection />
      </div>
      <AllCardBlock />
    </section>
  );
};

export default Body;
