import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Dodo Pizza" },
  { id: "1", name: "Papa Jones" },
  { id: "2", name: "Nurlan Bakenbaev" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = 
export default usersSlice.reducer;
