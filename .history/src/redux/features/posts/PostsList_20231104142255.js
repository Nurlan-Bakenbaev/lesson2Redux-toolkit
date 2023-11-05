import React from "react";
import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllposts);
 
  return (
    <div>
      <section>
        <h1>Posts</h1>
        {posts.map((post)=>(
          <div></div>
        ))}
      </section>
    </div>
  );
};

export default PostsList;
