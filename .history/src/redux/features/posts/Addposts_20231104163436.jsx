import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

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
  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (post.title && post.content) {
      dispatch(postAdded({ id: nanoid(), ...post }));
      setPost({ title: "", content: "" });
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label htmlFor="text-input">Text Input:</label>
      <input
        type="text"
        id="text-input"
        value={post.title}
        name="title"
        onChange={handleInputChange}
      />

      <label htmlFor="textarea-input">Textarea:</label>
      <textarea
        id="textarea-input"
        rows="4"
        cols="50"
        value={post.content}
        name="content"
        onChange={handleInputChange}
      ></textarea>
      <button type="button" onClick={onSavePostClicked}>Add post</button>
    </form>
  );
};

export default AddPosts;
