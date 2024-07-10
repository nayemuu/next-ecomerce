import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementQuantity: (state, action) => {
      state.count += 1;
    },
  },
});

export const { incrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
