import type { ReactElement } from "react";

import { useSelector } from "react-redux";
import { getRoutes } from "~/redux/slice/routeSlice";

const Sidebar = (): ReactElement => {
  const { routes } = useSelector(getRoutes);
  return (
    <div className="sidebar_wrapper">
      <ul className="sidebar_data">
        {routes.map((val, key) => {
          return (
            <li
              className="sidebar_item"
              key={key}
              id={window.location.pathname === val.path ? "active" : ""}
              onClick={() => (window.location.pathname = val.path as string)}
            >
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
