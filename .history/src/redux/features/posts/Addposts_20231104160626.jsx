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
  const dispatch = useDispatch()
  const onSavePostClicked = ()=>{
    if(post.title && post.content){
    dispatch(postAdded({id:}))
    }
  }

  return (
    <div>
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
        name="content" // Added the name attribute
        onChange={handleInputChange} // Changed the event handler to call handleInputChange
      ></textarea>
    </div>
  );
};

export default AddPosts;
