import React from "react";
import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllposts);
  const renderedPosts = posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}<h3>
      <p>{post.content.substring(0, 100) + "..."} </p>
    </div>
  ));
  return (
    <div>
      <section>
        <h1>Posts</h1>
        {renderedPosts}
      </section>
    </div>
  );
};

export default PostsList;
