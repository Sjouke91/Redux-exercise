// albums_reducer.js
const initialState = [];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ALBUM": {
      // => Ask yourself: what is action.payload?
      return [...state, action.payload];
    }
    case "REMOVE_ALBUM": {
      const filteredArray = state.filter((album) => {
        return album.title !== action.payload;
      });
      return filteredArray;
    }
    default: {
      return state;
    }
  }
}

module.exports = { reducer };
