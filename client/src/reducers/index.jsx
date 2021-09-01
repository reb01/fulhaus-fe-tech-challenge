/** @format */

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.item._id]: {
          ...action.item,
          quantity: 1,
        },
      };

    // quantity: state[action.item._id]
    // ? Number(state[action.item._id].quantity) + 1
    // : 1,
    case "REMOVE_ITEM":
      const stateCopy = { ...state };
      delete stateCopy[action.item.id];
      return stateCopy;

    default:
      return state;
  }
};

export const getStoreItemArray = (state) => {
  return Object.values(state);
};

export default cartReducer;
