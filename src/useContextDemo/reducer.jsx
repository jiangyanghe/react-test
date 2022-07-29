import React, { useReducer } from "react";

const initialState = 10;
const myContext = React.createContext();

function reducer(state, action) {
  console.log(11111, state, action);
  switch (action.type) {
    case "reset":
      return { count: initialState };
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, { count: 10 });

  return (
    <myContext.Provider value={{ state, dispatch }}>
      {props.children}
    </myContext.Provider>
  );
};

export { reducer, myContext, ContextProvider };
