import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/postsSlice";


const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
export default store;
