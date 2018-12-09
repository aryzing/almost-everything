export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_DATA_FROM_API': {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
