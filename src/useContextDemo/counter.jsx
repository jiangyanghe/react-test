import React, { useContext } from "react";
import { myContext } from "./reducer";

function Counter() {
  const { state, dispatch } = useContext(myContext);
  console.log(444, state);
  return (
    <div>
      Counter Count: {state.count}
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default Counter;