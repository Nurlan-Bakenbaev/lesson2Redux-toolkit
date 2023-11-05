import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
const AddPosts = () => {
  const [post, setPost] = useState({
    title: "",
    content: "",
    userName: "",
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
    if ((post.title && post.content) || post.userName) {
      dispatch(postAdded({ id: nanoid(), ...post }));
      setPost({ title: "", content: "", userName: "" });
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
      <label htmlFor="user">Users: </label>
      <select
        onChange={handleInputChange}
        value={post.userName}
        name="userName"
        id="user"
      >
        <option value="Zero">Choose user</option>
        {users.map((user) => (
          <option key={user.id}>{user.name}</option>
        ))}
      </select>

      <button
        disabled={!post.userName}
        type="button"
        onClick={onSavePostClicked}>
        Add Post
      </button>
    </form>
  );
};

export default AddPosts;
