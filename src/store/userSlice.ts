import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types";

interface UserLogged {
  userLogged: User | null;
}

const initialState: UserLogged = {
  userLogged: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.userLogged = action.payload;
    },
    logout: (state) => {
      state.userLogged = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
