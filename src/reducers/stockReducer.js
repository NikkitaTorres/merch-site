import { UPDATE_STOCK } from "../actions/actionTypes";

const initialState = [];

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STOCK:
      return state.map(item => (item.id === action.payload.id ? action.payload : item));
    default:
      return state;
  }
};

export default stockReducer;