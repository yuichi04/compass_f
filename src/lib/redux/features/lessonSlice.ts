import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LessonType } from "../../../types/LessonType";

const initialState: LessonType = {
  id: 0,
  sectionId: 0,
  allowStartingExercise: false,
  displaySpeedOfLines: 0.02,
  isOpenDocuments: false,
  isOpenSlide: true,
  isOpenResults: false,
  scene: {},
  userAnswers: {},
};

const lessonSlice = createSlice({
  name: "lesson",
  initialState,
  reducers: {},
});

export default lessonSlice.reducer;
