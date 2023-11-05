
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
    if (title && content) {
      // Create a new post object
      const newPost = {
        title,
        content,
      };

      // Call the onAddPost function to add the post
      onAddPost(newPost);

      // Clear the input fields
      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={handleContentChange} />
      </div>
      <button onClick={handleAddPost}>Add Post</button>
    </div>
  );
};

export default AddPost;
