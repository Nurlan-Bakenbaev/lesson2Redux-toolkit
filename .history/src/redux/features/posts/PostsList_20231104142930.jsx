import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllposts);
  return (
    <div>
      <section>
        <h1>Posts</h1>
      {  posts.map((post) => (
    <div key={post.id}>
      <div>{post.title}</div>
      <p>{post.content} </p>
    </div>}
      </section>
    </div>
  );
};

export default PostsList;
