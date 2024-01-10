import type { ReactElement } from "react";

export interface SidebarData {
  title: string;
  icon: ReactElement;
  url: string;
}

export interface SidebarProps {
  data: SidebarData[];
}
