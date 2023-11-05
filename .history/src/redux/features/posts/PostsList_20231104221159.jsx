import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllposts);
  return (
    <div>
      <section>
        <h1>Posts</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <span>{post.userName}</span>
            <h1>{post.title}</h1>
            <p>{post.content} </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PostsList;
