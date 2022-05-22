export type ChapterType = {
  id: string;
  order: string;
};

export type SceneType = {
  id: string;
  order: string;
  characterImage: string;
};

export type WordType = {
  id: string;
  text: string;
  sceneId: string;
};

export type OptionType = {
  id: string;
  text: string;
  nextSceneId: string;
  sceneId: string;
};

export type CurrentSceneType = {
  id: string;
  order: string;
  characterImage: string;
  word: WordType;
  options: OptionType[];
};
