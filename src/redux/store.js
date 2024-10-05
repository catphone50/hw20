import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/userSlice";

const store = configureStore({
  reducer: { users: reducer },
});

export default store;
