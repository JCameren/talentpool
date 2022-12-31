import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../utilities/users-service";

const initialState = {
  user: getUser(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signUp(state, action) {
        state.user = action.payload
    },
    logIn(state, action) {
        state.user = action.payload
    },
    logOut(state) {
      state.user = null
      localStorage.removeItem("token");
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
