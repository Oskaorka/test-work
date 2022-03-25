import React from "react";

const DescrColumn = ({ headerTitle, bodytitle, footTite, styleName }) => {
  return (
    <div className={styleName}>
      <div className="">{headerTitle}</div>
      <div className="">{bodytitle}</div>
      <div className="">{footTite}</div>
    </div>
  );
};

export default DescrColumn;
