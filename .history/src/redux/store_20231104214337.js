import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import usersRed
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
export default store;
