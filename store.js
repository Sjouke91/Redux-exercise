// store.js
const { createStore } = require("redux");
const reducer = require("./myCountingReducer");

const store = createStore(reducer);
console.log("Initial state of the store:", store.getState());

store.subscribe(() => {
  console.log("The state just changed to:", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "ADD",
  payload: 5,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 3,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 8,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 2,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 7,
});

console.log("final state:", store.getState());

// how many times: 5
// 0, 10, 15, 20, 20
