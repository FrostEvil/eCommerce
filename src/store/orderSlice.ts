import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { OrderedProduct, Product } from "./types";

interface Order {
  orderedProduct: OrderedProduct[];
}

const initialState: Order = {
  orderedProduct: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const foundIndex = state.orderedProduct.findIndex(
        (product) => product.id === action.payload.id
      );

      if (foundIndex === -1) {
        state.orderedProduct = [
          ...state.orderedProduct,
          { ...action.payload, quantity: 1 },
        ];
      } else {
        state.orderedProduct[foundIndex].quantity++;
      }
    },

    removeProduct: (state, action: PayloadAction<OrderedProduct>) => {
      const foundIndex = state.orderedProduct.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.orderedProduct[foundIndex].quantity === 1) {
        state.orderedProduct.splice(foundIndex, 1);
      } else {
        state.orderedProduct[foundIndex].quantity--;
      }
    },
    clearOrder: (state) => {
      state.orderedProduct = [];
    },
  },
});

export const { addProduct, removeProduct, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
