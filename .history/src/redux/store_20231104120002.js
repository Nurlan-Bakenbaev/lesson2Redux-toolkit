import { configureStore } from "@reduxjs/toolkit";
import posts from "./features/posts/postsSlice";
const store = configureStore({
  reducer: {},
});
export default store;