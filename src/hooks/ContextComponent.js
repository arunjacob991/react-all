import react, { createContext } from "react";
import Child from "./Child";

export const MyContext = createContext();

const ContextComponent = () => {

  return (
    <>
      <MyContext.Provider value = {10}>
        <div>Context Parent</div>
        <Child />
      </MyContext.Provider>
    </>
  );
};

export default ContextComponent;


