import { createSlice } from "@reduxjs/toolkit";
initialState = [
    { id: "0", name: "Dodo Pizza" },
    {id:'1',name:'pap'}];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
