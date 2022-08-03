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
  isOpenAnswers?: boolean; // 回答の表示・非表示
  isOpenDocuments?: boolean; // 資料の表示・非表示
  isOpenResults: boolean; // 演習結果の表示・非表示
  isOpenScreenForAnswers: boolean; // ユーザー用の回答画面の表示・非表示
  isLastScene: boolean; // 最後のシーンかどうか
  isOpenSlide: boolean; // スライドの表示・非表示
  selectableInfo: SelectableInfoType[]; // 現在のセクションの選択可能な情報を格納
  scene: StaticSceneDataType; // 表示するシーン本体
  history: string; // 1つ前のフェーズを格納
  // 結果表示用にユーザーの回答を格納
  userAnswers: {
    info: SelectableInfoType[];
    common: string;
    conclusion: string;
    check: boolean;
  };
};

// シーンの型定義
export type StaticSceneDataType = {
  section: number;
  options?: OptionType[];
  character?: CharacterImageType;
  lines: string[];
  phase?: PhaseType;
};

// フェーズの型定義
export type PhaseType = "info" | "common" | "conclusion" | "check" | "guide" | "";

// 選択肢の型定義
export type OptionType = {
  label: string;
  progress: boolean;
};

// キャラクターイメージの型定義
export type CharacterImageType = {
  role: "user" | "guide" | "customer" | "boy" | "call" | "";
  src: string;
};

// 表示・非表示系UIの型定義
export type UtilsKeyType = "answers" | "documents" | "results" | "slide" | "screenForAnswers";

// 選択可能な情報の型定義
export type SelectableInfoType = {
  id: number;
  text: string;
  section: number;
};
