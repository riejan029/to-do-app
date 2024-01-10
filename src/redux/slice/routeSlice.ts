import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "~/redux/types";
import { createSlice } from "@reduxjs/toolkit";
import { RouteType } from "~/routes/types";

interface RouteObject {
  routes: RouteType[];
}

const routes: RouteObject = {
  routes: [],
};
const routeSlice = createSlice({
  name: "routes",
  initialState: routes,
  reducers: {
    addRoutes: (state, action: PayloadAction<RouteType[]>) => {
      state.routes = action.payload;
    },
  },
});

export const { addRoutes } = routeSlice.actions;
export const getRoutes = (state: RootState) => state.routes;
export default routeSlice.reducer;
