// スライドリストのスライスの型定義
export type SlideListSliceType = {
  slideId: number; // 現在表示しているスライドを管理
  direction: "left" | "right" | ""; // スライドの進行方向を管理
};

// スライドリストのアイテムの型定義
export type SlideListItemType = {
  courseTitle: string; // コース名
  slideTitle: string; // スライドのタイトル
  content: React.ReactNode; // スライドの内容
};
