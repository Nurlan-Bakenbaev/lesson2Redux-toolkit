import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
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
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const onSavePostClicked = () => {
    if ((post.title && post.content) || post.userId) {
      dispatch(postAdded({ id: nanoid(), ...post }));
      setPost({ title: "", content: "", userId: "" });
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
      <label htmlFor="user"></label>
      <select id="user">
        {users.map((user) => (
          <option key={user.id} value={post.userId}>
            {user.name}
          </option>
        ))}
      </select>

      <button type="button" onClick={onSavePostClicked}>
        Add Post
      </button>
    </form>
  );
};

export default AddPosts;
