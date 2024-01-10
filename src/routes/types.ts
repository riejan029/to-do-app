import type { ReactElement, ReactNode } from "react";
import type { RouteObject } from "react-router-dom";

export interface RouteType extends Omit<RouteObject, "children"> {
  children?: ReactElement;
  icon?: string | ReactNode;
  title?: string;
}
