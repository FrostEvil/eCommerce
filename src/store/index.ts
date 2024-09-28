import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import orderReducer from "./orderSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: { user: userReducer, order: orderReducer, modal: modalReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
