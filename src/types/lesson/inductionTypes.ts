// セリフなどのコンテンツの生成に関する型定義
export type LessonType = {
  // section > scene
  sectionId: number; // 現在のセクションを判別
  sceneId: number; // 現在のシーンを判別
  // allowStartingExercise: boolean; // 演習の開始を許可するか
  // allowProgressScene: boolean; // シーンの進行を許可するか
  characterInfo: CharacterImageType; // キャラクター情報の変更を管理
  commonSubject: string[]; // 共通点の主語を設定
  // displaySpeedOfLines: number; // セリフ1文字あたりの表示速度
  // 各UIの表示・非表示を管理
  // isOpen: {
  //   answers?: boolean; // ユーザーの回答
  //   documents?: boolean; // 資料
  //   results: boolean; // 演習結果
  //   screenForAnswers: boolean; // 回答用画面
  //   slide: boolean; // スライド
  //   narration: boolean; // ナレーション画面
  // };
  isLastScene: boolean; // 最後のシーンかどうか
  selectableInfo: SelectableInfoType[]; // 現在のセクションの選択可能な情報を格納
  scenes: StaticSceneDataType[]; // コース全体のシーン情報
  scene: StaticSceneDataType; // 現在のシーン情報
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
  narration?: string;
};

// フェーズの型定義
export type PhaseType = "info" | "common" | "conclusion" | "check" | "";

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
// export type UtilsKeyType = "answers" | "documents" | "results" | "slide" | "screenForAnswers" | "narration";

// 選択可能な情報の型定義
export type SelectableInfoType = {
  id: number;
  text: string;
  section: number;
};
