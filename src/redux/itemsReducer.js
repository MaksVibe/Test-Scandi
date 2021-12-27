import { createSlice, combineReducers } from "@reduxjs/toolkit";

const itemsReducer = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addItem: (state, { payload }) => [...state, payload],
    deleteItems: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
  },
});

const productsReducer = combineReducers({
  [itemsReducer.name]: itemsReducer.reducer,
});

export default productsReducer;
export const { addItem, deleteItems } = itemsReducer.actions;
