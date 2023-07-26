import React, { useRef, useState, useEffect } from "react";

const Refz = () => {
  const [name, setName] = useState("somthing");

  const ref = useRef(0);
  const inputRef = useRef();
  const prevName = useRef("");

  useEffect(() => {
    ref.current = ref.current + 1;
    prevName.current = name;
  }, [name]);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div>Ref in react</div>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>The input value is {name}</div>
      <div>Previous input is {prevName.current} </div>
      <div>Input is rendered {ref.current} times</div>
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
};

export default Refz;
