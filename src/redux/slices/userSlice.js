import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
});

export const { reducer } = userSlice;
