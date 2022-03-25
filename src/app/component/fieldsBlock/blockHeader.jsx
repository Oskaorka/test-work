import React from "react";
import Img from "../../supportUtils/images/img";
import Button from "../button/button";
import Menu from "../cardAllBlock/menu";

import smile from "../../supportUtils/images/header/smile.png";
import pig from "../../supportUtils/images/header/pig.png";
import Menu2 from "../../supportUtils/images/header/menu/menu2.png";
import User from "../../supportUtils/images/header/userCard/user.png";
import CounterBlock from "../counterBlock/counterBlock";
import DescrColumn from "../../supportUtils/images/columnDesc";
import VideoCollection from "./blockVideoCollection";
import BlockMail from "../../supportUtils/blockMailAvatar";

const Header = () => {
  return (
    <header className="header">
      <div className="header title">
        <h1>
          ma<span>s</span>k<span>s</span> nft
        </h1>
        <Button descr="About" styleBtn="btn-about" />
      </div>
      <div className="header-body">
        <Menu />
        <div className="header-body-card">
          <Img src={User} alt="User" className="user" />

          <div className="card-info">
            <Img src={Menu2} alt="Menu2" className="menuz" />
            <div className="mail">@cameron</div>
            <p>Sometimes</p>
            <div className="block-smile">
              <CounterBlock
                like={smile}
                name={"name"}
                classStyle="smile"
                countLike="73"
              />
              <Button descr="More info >" styleBtn="info" />
            </div>
            <div className="card-info-descr">
              <DescrColumn
                headerTitle="Lowest Ask"
                bodytitle="$679.28"
                footTite="11 listings >"
                styleName="cost-descr"
              />
              <DescrColumn
                headerTitle="Top sale"
                bodytitle="$190.00"
                footTite="View sales history >"
                styleName="cost-descr"
              />
            </div>
            <Button descr="Buy now" styleBtn="btnByNow" />
            <div className="card-info-footer">
              <div className="header">
                <div className="header-title">
                  Videos <span>12</span>
                </div>
                <div>
                  <a href="#"> &lsaquo; </a>
                  <a href="#"> &rsaquo;</a>
                </div>
              </div>
              <VideoCollection />
            </div>
          </div>
        </div>
      </div>
      <div className="header-footer">
        <div className="header-footer-left">
          <Button descr="Videos" styleBtn="leftBtn" />
          <Button descr="Masks" styleBtn="rightBtn" />
        </div>
        <div className="header-footer-right">
          <BlockMail mail="@slavakornilov" pathImg={pig} styleName="mailBloc" />
          <Button descr="Add Mask" styleBtn="header-footer-right-btn" />
        </div>
      </div>
    </header>
  );
};

export default Header;
