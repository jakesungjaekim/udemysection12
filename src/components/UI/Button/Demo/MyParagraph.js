import React from "react";

const MyParagraph = (props) => {
  console.log("Paragraph OUTPUT");
  return <p>{props.children}</p>;
};

export default MyParagraph;
