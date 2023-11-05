import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import {}
const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
export default store;
