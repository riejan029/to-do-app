import type { PropsWithChildren, ReactElement } from "react";

import Sidebar from "~/components/sidebar";

const Layout = (props: PropsWithChildren): ReactElement => {
  const { children } = props;
  return (
    <div className="App">
      <div className="header"></div>
      <div className="content-wrapper">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Layout;
