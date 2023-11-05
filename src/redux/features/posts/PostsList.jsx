import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllposts);
  return (
    <div>
      <section>
        <h1>Posts:</h1>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <div
              style={{
                border: "1px solid white",
                width: "550px",
                padding: "10px",
                display: "flex",
                
              }}
            >
              <p>{post.content} </p>
              <span>by:{post.userName || "Author is unknown"}</span>
              <span>time:{post.date}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default PostsList;
