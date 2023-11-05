import React, { useState } from "react";
const Addposts = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  return (
    <div>
      <label htmlFor="text-input">Text Input:</label>
      <input
        onChange={(e) => setPost(e.target.value)}
        type="text"
        id="text-input"
        value={post.title}
      />

      <label htmlFor="textarea-input">Textarea:</label>
      <textarea
      name="conten"
        onChange={(e) => setPost(e.target.value)}
        value={post.content}
        id="textarea-input"
        rows="4"
        cols="50"
      ></textarea>
    </div>
  );
};

export default Addposts;