import React, {useContext} from "react";
import {MyContext} from './ContextComponent'


const InnerChild = () => {

    const value = useContext(MyContext)

  return (
    <>
      <div>InnerChild - value from parent context component - {value}</div>
    </>
  );
};

export default InnerChild;