import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id: '0', name: 'Fransisco Semedo'},
  {id: '2', name: 'Rodrigo Morcela'},
  {id: '3', name: 'Rafael Guerra'},
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {}
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer