import React, { useState } from "react";
import { UseSelector, useDispatch } from "react-redux";

const PostsList = () => {
  const posts = useState((state) => state.posts);
  const renderedPosts = posts.map(post=>(
  <article key={post}>

  </article>
  ))
  return <div>Posts</div>;
};

export default PostsList;
