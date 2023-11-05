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
            const promiseThatWillResolve = Promise.resolve('data');
            const promiseThatWillReject = Promise.reject('error');
            <h1>{post.title}</h1>
            <p>{post.content} </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PostsList;
