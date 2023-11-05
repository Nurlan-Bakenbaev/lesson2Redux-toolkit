import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/posts/postsSlice";
const store = configureStore({
  reducer: {},
});
export default store;