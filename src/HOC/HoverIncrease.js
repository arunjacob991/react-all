import React, { useState } from "react";

const HoverIncrease = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <button onMouseOver={() => setCount(count + 1)} >HoverIncrease</button>
      <div>{count} </div>
    </div>
  );
};

export default HoverIncrease;
