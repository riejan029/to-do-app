import { configureStore } from "@reduxjs/toolkit";
import routeSlice from "./slice/routeSlice";

export const store = configureStore({
  reducer: {
    routes: routeSlice,
  },
});
