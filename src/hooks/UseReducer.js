import React, { useReducer } from "react";

const TYPE = {
    CHANGE_VALUE : "change-value",
    CHANGE_COLOR : "change-color"
}

function reducer(state, action) {
 switch(action.type){
    case TYPE.CHANGE_VALUE : 
    return {
        ...state,
        value : state.value + action.payload
    }

    case TYPE.CHANGE_COLOR : 
        return {
            ...state,
            color : action.payload
        }
 }
}

const initialState = {
  value: 0,
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          display: "inline-block",
          backgroundColor: state.color,
          padding: 10,
        }}
      >
        <button onClick = {() => dispatch({
            type: TYPE.CHANGE_VALUE,
            payload: 1
        })}>
            Increment
        </button>
        <span>{state.value}</span>
        <button onClick = {() => dispatch({
            type: TYPE.CHANGE_VALUE,
            payload: -1
        })}>
            Decrement
        </button>
      </div>
      <div>
        <button onClick = {() => dispatch({
            type : TYPE.CHANGE_COLOR,
            payload : "red"
        })}>
            Red
        </button>
        <button onClick = {() => dispatch({
            type : TYPE.CHANGE_COLOR,
            payload : "blue"
        })}>
            Blue
        </button>
      </div>
    </div>
  );
};

export default Reducer;
