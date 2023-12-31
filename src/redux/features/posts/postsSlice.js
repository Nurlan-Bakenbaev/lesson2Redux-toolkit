import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I have heard good things about Redux",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice the more I want slice of pizza",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});
export const { postAdded } = postsSlice.actions;
export const selectAllposts = (state) => state.posts;
export default postsSlice.reducer;
