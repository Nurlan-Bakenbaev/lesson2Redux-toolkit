import React, { useState } from "react";
import { UseSelector, useDispatch } from "react-redux";

const PostsList = () => {
  const posts = useState((state) => state.posts);
  const renderedPosts = posts.map((post) => <article key={post.id}>
    <h3>{post.title}</h3>
    <p>{post.content} </p>
  </article>);
  return <div>Posts</div>;
};

export default PostsList;