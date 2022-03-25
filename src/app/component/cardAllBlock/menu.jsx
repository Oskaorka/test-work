import React from "react";
import Img from "../../supportUtils/images/img";
import Menu1 from "../../supportUtils/images/header/menu/menu1.png";
import Menu2 from "../../supportUtils/images/header/menu/menu2.png";
import Menu3 from "../../supportUtils/images/header/menu/menu3.png";
import Menu4 from "../../supportUtils/images/header/menu/menu4.png";
const Menu = () => {
  return (
    <div className="header-body-menu">
      <Img src={Menu1} alt="Menu1" className="menuz" />
      <Img src={Menu2} alt="Menu2" className="menuz" />
      <Img src={Menu3} alt="Menu3" className="menuz" />
      <Img src={Menu4} alt="Menu4" className="menuz" />
    </div>
  );
};

export default Menu;
