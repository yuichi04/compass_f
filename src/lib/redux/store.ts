import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loadingReducer from "./features/lodingSlice";
import chapter1Reducer from "./features/chapter1Slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    loding: loadingReducer,
    chapter1: chapter1Reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
