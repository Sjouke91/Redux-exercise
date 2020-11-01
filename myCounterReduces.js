// myCountingReducer.js
const initialState = 0;

function myCountingReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return state + action.payload;
    }
    default: {
      return state;
    }
  }
}

module.exports = myCountingReducer;

// predict: what will be console logged?
console.log(myCountingReducer(undefined, {}));

0;

// predict: what will be console logged?
console.log(myCountingReducer(0, { type: "ADD", payload: 5 }));

5;

// predict: what will be console logged?
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));

20;

// predict: what will be console logged?
console.log(myCountingReducer(10, { type: "ADD", payload: 10 }));
20;
