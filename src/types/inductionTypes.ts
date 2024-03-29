// セリフなどのコンテンツの生成に関する型定義
export type InductionType = {
  sectionId: number; // 現在のセクションを判別
  sceneId: number; // 現在のシーンを判別
  characterInfo: CharacterImageType; // キャラクター情報の変更を管理
  commonSubject: string[]; // 共通点の主語を設定
  consultation: string; // 相談内容
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
  // チェックフェーズで結論/共通点/情報を編集する場合に回答画面を呼び出すための管理フラグ
  isEditUserAnswersFromCheckPhase: {
    conclusion: boolean;
    common: boolean;
    info: boolean;
  };
};

// シーンの型定義
export type StaticSceneDataType = {
  sectionId: number; // どのセクションに属するかを判断するためのID
  options?: OptionType[]; // ユーザーに選ばせる選択肢
  character?: CharacterImageType; // キャラクターの役割と画像を管理
  consultation?: string; // 相談内容
  lines: string[]; // キャラクターのセリフ
  phase?: PhaseType; // 回答が必要なシーンでの回答の種類を分岐
  narration?: string; // ナレーションに表示するテキスト
  endpoint?: boolean; // 演習を続けるか、やめるかを管理
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
