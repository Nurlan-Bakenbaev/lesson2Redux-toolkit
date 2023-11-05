import React, { useState } from "react";
const Addposts = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  return (
    <div>
      <label htmlFor="text-input">Text Input:</label>
      <input onChange={(e)=> setPost} type="text" id="text-input" value={title} />

      <label htmlFor="textarea-input">Textarea:</label>
      <textarea value={content} id="textarea-input" rows="4" cols="50"></textarea>
    </div>
  );
};

export default Addposts;
