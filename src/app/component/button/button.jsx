import React from "react";

const Button = ({ descr, styleBtn }) => {
  return <button className={styleBtn}>{descr}</button>;
};

export default Button;
