export type SceneId = number;
export type CommonFactor = string;
export type Answer = string;
export type SampleCommonFactor = string;
export type SampleAnswer = string;

// レッスン全体の型定義
export type LessonType = {
  // section > scene
  sectionId: number; // 現在のセクションを判別
  sceneId: number; // 現在のシーンを判別
  allowStartingExercise: boolean; // 演習の開始を許可するか
  allowProgressScene: boolean; // シーンの進行を許可するか
  characterInfo: CharacterImageType; // キャラクター情報の変更を管理
  displaySpeedOfLines: number; // セリフ1文字あたりの表示速度
  isLastScene: boolean; // 最後のシーンかどうか
  isOpenSlide: boolean; // スライドの表示・非表示
  isOpenResults: boolean; // 演習結果の表示・非表示
  options: OptionType[]; // 現在のセクションの選択可能な情報を格納
  scene: StaticSceneDataType; // 表示するシーン本体
  // 結果表示用にユーザーの回答を格納
  userAnswers: {
    info: OptionType[];
    common: string;
    conclusion: string;
  };
};

// シーンの型定義
export type StaticSceneDataType = {
  section: number;
  action?: UserActionType;
  character?: CharacterImageType;
  lines: string[];
  phase?: "info" | "common" | "conclusion" | "";
  isOpenDocuments?: boolean; // 資料の表示・非表示
  isOpenAnswers?: boolean; // 回答の表示・非表示
};

// ユーザーアクションの型定義
export type UserActionType = {
  type: "button" | "textField" | ""; // 選択式と入力式
  label: string;
};

// キャラクターイメージの型定義
export type CharacterImageType = {
  role: "user" | "guide" | "customer" | "boy" | "call" | "";
  src: string;
};

// 各情報の型定義
export type UtilsKeyType = "answers" | "documents" | "results" | "slide";

// 選択肢（情報）の型定義
export type OptionType = {
  id: number;
  text: string;
  section: number;
};
