import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPosts: [],
  postDetails: {},
  userPosts: []
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getAllPosts(state, action) {
      state.allPosts = action.payload;
    },
    getUsersPosts(state, action) {
      state.userPosts = action.payload
    },
    showPostDetails(state, action) {
      state.postDetails = action.payload;
    },
    addPost(state, action) {
      state.allPosts = [...state.allPosts, action.payload]
    },
    deletePost(state, action) {
      state.allPosts = state.allPosts.filter(
        (post) => post._id !== action.payload._id
      );
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice;
