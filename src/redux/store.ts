import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import loadingReducer from "./features/lodingSlice";
import lessonReducer from "./features/lessonSlice";
import inductionReducer from "./features/inductionSlice";
import slideListReducer from "./features/slideListSlice";
import answerReducer from "./features/answerSlice";

export const store = configureStore({
  reducer: {
    lesson: lessonReducer,
    induction: inductionReducer,
    loding: loadingReducer,
    slideList: slideListReducer,
    user: userReducer,
    answer: answerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
