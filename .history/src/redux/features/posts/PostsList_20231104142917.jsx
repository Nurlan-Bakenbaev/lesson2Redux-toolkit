import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllposts);
  const renderedPosts = 
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
