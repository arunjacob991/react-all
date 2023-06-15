import React, { useState } from "react";
import UpdatedComponent from "./withCounter";

const ClickIncrease = (props) => {
  const { counter, incrementCounter } = props;
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={incrementCounter}>ClickIncrease</button>
      <div> {counter} </div>
    </div>
  );
};

export default UpdatedComponent(ClickIncrease);
