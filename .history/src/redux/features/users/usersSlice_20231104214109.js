import { createSlice } from "@reduxjs/toolkit";
initialState = [
    { id: "0", name: "Dodo Pizza" },
    {id:''}];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
