import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice/user-slice";
import postSlice from "./post-slice/post-slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        posts: postSlice.reducer
    }
})

export default store