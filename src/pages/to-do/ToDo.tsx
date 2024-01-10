import type { ReactElement } from "react";
import "./todo.scss";

import Header from "./components/header";

const ToDo = (): ReactElement => {
  return (
    <div className="todo-wrapper">
      <Header />
    </div>
  );
};

export default ToDo;
