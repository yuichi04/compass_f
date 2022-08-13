// セリフなどのコンテンツの生成に関する型定義
export type InductionType = {
  sectionId: number; // 現在のセクションを判別
  sceneId: number; // 現在のシーンを判別
  characterInfo: CharacterImageType; // キャラクター情報の変更を管理
  commonSubject: string[]; // 共通点の主語を設定
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
  role: "user" | "guide" | "customer" | "youngerBoy" | "youngBoy" | "call" | "";
  src: string;
};

// 選択可能な情報の型定義
export type SelectableInfoType = {
  id: number;
  text: string;
};
