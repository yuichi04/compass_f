import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loadingReducer from "./features/lodingSlice";
import exerciseReducer from "./features/exerciseSlice";
import inductionReducer from "./features/inductionSlice";
import slideListReducer from "./features/slideListSlice";

export const store = configureStore({
  reducer: {
    exercise: exerciseReducer,
    induction: inductionReducer,
    loding: loadingReducer,
    slideList: slideListReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
