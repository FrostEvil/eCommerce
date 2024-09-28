import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Modal {
  message: string;
  isOpen: boolean;
}

const initialState: Modal = {
  message: "",
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { addMessage, setIsOpen } = modalSlice.actions;
export default modalSlice.reducer;
