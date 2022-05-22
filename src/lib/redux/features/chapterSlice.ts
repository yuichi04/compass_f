import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CurrentSceneType, OptionType, SceneType, WordType } from "../../../types/chapterType";

type InitialState = {
  id: string;
  scenes: SceneType[];
  words: WordType[];
  options: OptionType[];
  currentScene: CurrentSceneType;
};

const initialState: InitialState = {
  id: "",
  scenes: [
    {
      id: "",
      order: "",
      characterImage: "",
    },
  ],
  words: [
    {
      id: "",
      text: "",
      sceneId: "",
    },
  ],
  options: [
    {
      id: "",
      text: "",
      nextSceneId: "",
      sceneId: "",
    },
  ],
  currentScene: {
    id: "",
    order: "",
    characterImage: "",
    word: { id: "", text: "", sceneId: "" },
    options: [{ id: "", text: "", sceneId: "", nextSceneId: "" }],
  },
};

export const storySlice = createSlice({
  name: "chapter",
  initialState,
  reducers: {
    setChapterAction: (state, action) => {
      state.id = action.payload.id;
      state.scenes = action.payload.scenes;
      state.words = action.payload.words;
      state.options = action.payload.options;
    },
    setSceneAction: (state, action) => {
      // セットするstateを作成
      const newScene = state.scenes.find((scene) => scene.id === action.payload);
      const newWord = state.words.find((word) => word.sceneId === action.payload);
      const newOptions = state.options.filter((option) => option.sceneId === action.payload);

      // stateをセット
      if (newScene && newWord && newOptions) {
        state.currentScene = {
          id: action.payload,
          order: newScene.id,
          characterImage: newScene.characterImage,
          word: newWord,
          options: newOptions,
        };
      }
    },
    setNextSceneAction: (state, action) => {
      state.currentScene.order = action.payload;
    },
  },
});

export const { setChapterAction, setSceneAction, setNextSceneAction } = storySlice.actions;
export const chapterSelector = (state: RootState) => state.chapter;
export const currentSceneSelector = (state: RootState) => state.chapter.currentScene;
export default storySlice.reducer;
