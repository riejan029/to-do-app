import type { ReactElement } from "react";
import type { RouteType } from "./types";

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import HomeIcon from "@mui/icons-material/Home";
import { addRoutes } from "~/redux/slice/routeSlice";

import Home from "~/pages/home";
import ToDo from "~/pages/to-do";

const AppRoutes = (): ReactElement => {
  const routes: RouteType[] = [
    {
      element: <Home />,
      path: "/home",
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      element: <ToDo />,
      path: "/todo",
      title: "To Do",
    },
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRoutes(routes));
  }, []);

  return (
    <Routes>
      {routes.map((routeItem: RouteType, index: number) => {
        return (
          <Route
            path={routeItem.path}
            element={routeItem.element}
            key={index}
          />
        );
      })}
    </Routes>
  );
};

export default AppRoutes;
