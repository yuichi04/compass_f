import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import loadingReducer from "./lodingSlice";
import storyReducer from "./storySlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loding: loadingReducer,
    story: storyReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
