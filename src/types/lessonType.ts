export type SceneId = number;
export type CommonFactor = string;
export type Answer = string;
export type SampleCommonFactor = string;
export type SampleAnswer = string;

// export type Chapter1ExerciseType = {
//   id: number;
//   allowProgress: boolean;
//   answer: Answer;
//   commonFactor: CommonFactor;
//   lineDelayTime: number;
//   section: number;
//   resultData: {
//     id: SceneId;
//     data: string[];
//     answer: Answer;
//     commonFactor: CommonFactor;
//     sampleCommonFactor: SampleCommonFactor;
//     sampleAnswer: SampleAnswer;
//   };
//   isFullCommonFactor: boolean;
//   isOpenActionBox: boolean;
//   isOpenBalloon?: boolean;
//   isOpenDocument: boolean;
//   isOpenResult: boolean;
//   isOpenSlideList: boolean;
//   isShowCharacter: boolean;
//   isStart: boolean;
//   isProgressScene: boolean;
// };

// export type Chapter1ExerciseDataType = {
//   section: number;
//   action: "button" | "textField" | "";
//   actionValue: string;
//   characterLines: string[];
//   characterImage: {
//     src: string;
//     role: "user" | "guide" | "customer" | "boy" | "";
//   };
//   sampleCommonFactor: SampleCommonFactor;
//   sampleAnswer: SampleAnswer;
//   data: string[];
//   response: {
//     role: "user" | "guide" | "customer" | "boy" | "";
//     lines: string[];
//     image: string;
//   };
//   isOpenDocument?: boolean;
//   isLastScene?: boolean;
// };

// 2つのシーンがある
// あらかじめ用意したデータを表示するシーン
// ユーザーの回答を処理するシーン
//
// ■シーンの移行
//・画面をクリック・ボタンをクリック・回答を入力のいずれかの処理が実行されると次のシーンに移行される
//・ボタンの仕様
// 選択肢を複数表示可能
// 選択肢によってシーンを分岐させる
//
// ■実装方法
//・表示データを格納する変数を作成
//・条件分岐を使って、あらかじめ用意したデータを表示するのか、ユーザーが回答したデータを表示するのかを処理する
//・ユーザーの回答がある場合は管理フラグをtrueに変更
//・trueならユーザーの回答を使ったデータを作成
//　作成したデータを表示する
//・falseならあらかじめ用意したデータを表示する

/**
 * 必要な型定義
 * 親
 * Chapter1ExerciseType
 * id
 * 演習を開始して良いか管理
 * ユーザーの全ての回答を格納（結果表示のため）
 * セリフ1文字あたりの表示速度
 * 結果表示の管理
 * スライド表示の管理
 * シーンデータを格納する箱
 *
 * 子
 * Chapter1ExerciseSceneDataType
 */

// レッスン全体の型定義
export type LessonType = {
  id: number;
  sectionId: number;
  allowStartingExercise: boolean;
  displaySpeedOfLines: number;
  isOpenDocuments: boolean;
  isOpenSlide: boolean;
  isOpenResults: boolean;
  scene: StaticSceneDataType | DynamicSceneDataType; // 演習における静的シーン、動的シーンの分岐を管理
  userAnswers: {
    info?: string[];
    common?: string;
    conclusion?: string;
  };
};

// 静的シーンの型定義
export type StaticSceneDataType = {
  id?: number;
  action?: UserActionType;
  image?: CharacterImageType;
  lines?: string[];
};

// 動的シーンの型定義
export type DynamicSceneDataType = {
  id: string; // 1-a, 3-cのような静的シーンidの枝番にするため、string型で定義
  action?: UserActionType;
  image: CharacterImageType;
  lines: string[];
};

// ユーザーアクションの型定義
export type UserActionType = {
  action: "button" | "textField"; // 選択式と入力式
  label: string;
};

// キャラクターイメージの型定義
export type CharacterImageType = {
  role: "user" | "guide" | "customer";
  src: string;
};
