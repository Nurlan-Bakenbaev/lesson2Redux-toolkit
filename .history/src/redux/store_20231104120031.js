import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
const store = configureStore({
  reducer: {
    posts:pos
  },
});
export default store;
