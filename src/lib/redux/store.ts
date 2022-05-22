import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loadingReducer from "./features/lodingSlice";
import chapterReducer from "./features/chapterSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loding: loadingReducer,
    chapter: chapterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
