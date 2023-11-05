import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heard good things about Redux",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice the more I want slice of pizza",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reducer
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});
export const { postAdded } = postsSlice.actions;
export const selectAllposts = (state) => state.posts;
export default postsSlice.reducer;
