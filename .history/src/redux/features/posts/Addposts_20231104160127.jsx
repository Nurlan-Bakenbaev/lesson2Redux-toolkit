import React, { useState } from "react";

const AddPosts = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <divÜ>
      <label htmlFor="text-input">Text Input:</label>
      <input
        type="text"
        id="text-input"
        value={post.title}
        name="title" // Added the name attribute
        onChange={handleInputChange} // Changed the event handler to call handleInputChange
      />

      <label htmlFor="textarea-input">Textarea:</label>
      <textarea
        id="textarea-input"
        rows="4"
        cols="50"
        value={post.content}
        name="content" // Added the name attribute
        onChange={handleInputChange} // Changed the event handler to call handleInputChange
      ></textarea>
    </divÜ>
  );
};

export default AddPosts;
