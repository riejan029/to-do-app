import { store } from "./store";

export interface AsyncActionCallbacks {
  onSuccess?: () => void;
  onFailure?: () => void;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
