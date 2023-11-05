import React, { useState } from "react";
const Addposts = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const on
  return (
    <div>
      <label htmlFor="text-input">Text Input:</label>
      <input type="text" id="text-input" />

      <label htmlFor="textarea-input">Textarea:</label>
      <textarea id="textarea-input" rows="4" cols="50"></textarea>
    </div>
  );
};

export default Addposts;
