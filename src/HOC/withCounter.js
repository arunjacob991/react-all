import { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(0);
    return (
      <OriginalComponent
        incrementCounter={() => setCounter(counter + 1)}
        counter={counter}
      />
    );
  }
  return NewComponent;
};

export default UpdatedComponent;
