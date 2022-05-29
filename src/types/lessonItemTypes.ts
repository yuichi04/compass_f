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

export type LessonDatasetType = {
  title: string;
  sectionTitle: string;
  sentence: JSX.Element;
  order: number;
  className: string;
}[];
