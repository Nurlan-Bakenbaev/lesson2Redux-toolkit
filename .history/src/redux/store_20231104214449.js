import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: usersReducer,
  },
});
export default store;
