import React from "react";
import InnerChild from "./InnerChild";

const Child = () => {
  return (
    <>
      <div>Child</div>
      <InnerChild />
    </>
  );
};

export default Child;