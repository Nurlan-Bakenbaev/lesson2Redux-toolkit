import { createSlice } from "@reduxjs/toolkit";
initialState = [
    { id: "0", name: "Dodo Pizza" },
    {id:'1',name:'Papa Jones'}];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
