import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type InitialState = {
  chapter: {
    order: number;
    scenes: {
      order: number;
      characterImage: string;
      lines: {
        text: string;
        order: number;
      }[];
      options: {
        text: string;
        nextScene: number;
      }[];
    }[];
  };
};

const initialState: InitialState = {
  chapter: {
    order: 0,
    scenes: [
      {
        order: 0,
        characterImage: "",
        lines: [
          {
            text: "",
            order: 0,
          },
        ],
        options: [
          {
            text: "",
            nextScene: 0,
          },
        ],
      },
    ],
  },
};

export const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    startChapterAction: (state, action) => {
      state.chapter.order = action.payload.order;
    },
    endChapterAction: () => {
      return { ...initialState };
    },
  },
});

export const { startChapterAction, endChapterAction } = storySlice.actions;
export const chapterSelector = (state: RootState) => state.story.chapter;
export default storySlice.reducer;
