import type { ReactElement } from "react";

const Header = (): ReactElement => {
  return (
    <div className="todo-header">
      <div id="todo-title">
        <h3>To Do List</h3>
      </div>
      <div id="button-wrapper">
        <button className="button">Add To Do</button>
      </div>
    </div>
  );
};

export default Header;
