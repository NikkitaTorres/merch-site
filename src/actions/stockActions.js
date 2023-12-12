import { UPDATE_STOCK } from "./actionTypes";

export const updateStock = (item) => ({
  type: UPDATE_STOCK,
  payload: item,
});