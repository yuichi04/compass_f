import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  chapter: {
    title: string;
    text: string;
    order: number;
    scenes: {
      order: number;
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
    title: "",
    text: "",
    order: 0,
    scenes: [
      {
        order: 0,
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
  reducers: {},
});
