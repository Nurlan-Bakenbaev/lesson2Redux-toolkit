
import React, { useState } from "react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleAddPost = () => {


  return (
    <div>
      <h2>Add a New Post</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title}  />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content}  />
      </div>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
