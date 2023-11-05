import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddPosts = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const users = useSelector(selectAllUsers);
  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if (post.title && post.content && post.userId) {
      dispatch(postAdded({ id: nanoid(), ...post }));
      setPost({ title: "", content: "", userId: "" });
    }
  };
  const onSavePost = ()=>{}

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
      <button type="button" onClick={onSavePostClicked}>
        Add Post
      </button>
    </form>
  );
};

export default AddPosts;
