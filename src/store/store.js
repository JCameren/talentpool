import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice/user-slice";
import postSlice from "./post-slice/post-slice";
import uiSlice from "./ui-slice/ui-slice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        posts: postSlice.reducer,
        ui: uiSlice.reducer
    }
})

export default store