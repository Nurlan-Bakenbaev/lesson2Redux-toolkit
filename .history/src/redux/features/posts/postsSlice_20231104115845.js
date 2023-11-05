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
    conten: "The more I say slice the more I want sloce of pi",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});
export default postsSlice.reducer;
