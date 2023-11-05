import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
const store = configureStore({
  reducer: {},
});
export default store;