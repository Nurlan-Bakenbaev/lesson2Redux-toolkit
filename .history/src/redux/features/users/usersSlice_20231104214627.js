import { createSlice } from "@reduxjs/toolkit";


initialState = [
  { id: "0", name: "Dodo Pizza" },
  { id: "1", name: "Papa Jones" },
  { id: "2", name: "Nurlan Bakenbaev" },
];
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
