import React from "react";

const ColorfullMessage = (props) => {
  const { color, Children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{Children}</p>;
};
export default ColorfullMessage;
