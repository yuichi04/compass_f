// 演習の開始・終了とインターフェースの動きに関する型定義
export type ExerciseType = {
  course: "induction" | "deduction" | "explanation" | ""; // コース名
  allowStartingExercise: boolean; // 演習の開始を許可するか
  allowProgressScene: boolean; // シーンの進行を許可するか
  displaySpeedOfLines: number; // セリフ1文字あたりの表示速度
  // インターフェースの表示・非表示を管理
  isOpen: {
    answers?: boolean; // ユーザーの回答
    documents?: boolean; // 資料
    results: boolean; // 演習結果
    screenForAnswers: boolean; // 回答用画面
    slideList: boolean; // スライド
    narration: boolean; // ナレーション画面
  };
};

// 表示・非表示系UIの種類に関する型定義
export type InterfacesKeyType = "answers" | "documents" | "results" | "slideList" | "screenForAnswers" | "narration";
