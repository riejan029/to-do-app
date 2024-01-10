import { RouteType } from "~/routes/types";

interface UseRoutesParams {
  state: RouteType[];
}

interface UseRoutesResponse {
  state: RouteType[];
}

export const useRoutes = (state: UseRoutesParams): UseRoutesResponse => {
  return state;
};
