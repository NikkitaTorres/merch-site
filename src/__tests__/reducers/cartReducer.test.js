import cartReducer from "../../reducers/cartReducer";
import * as actionTypes from '../../actions/actionTypes';

describe('cartReducer', () => {
  it('should add item to cart', () => {
    const initialState = [];
    const item = { id: '1', name: 'Item 1', quantity: 1};
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: item,
    };

    const newState = cartReducer(initialState, action);

    expect(newState).toEqual([item]);
  });

  it('should remove item from cart', () => {
    const initialState = [{ id: '1', name: 'Item 1', quantity: 1}];
    const itemId = '1';
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: itemId,
    };

    const newState = cartReducer(initialState, action);

    expect(newState).toEqual([]);
  });
});