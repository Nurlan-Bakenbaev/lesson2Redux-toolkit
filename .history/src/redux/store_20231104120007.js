import { configureStore } from "@reduxjs/toolkit";
import postsRed from "./features/posts/postsSlice";
const store = configureStore({
  reducer: {},
});
export default store;