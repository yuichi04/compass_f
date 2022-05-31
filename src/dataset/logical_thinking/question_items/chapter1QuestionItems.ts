import { Chapter1QuestionType } from "../../../types/chapterTypes";

// シーン単位の配列を持つ
export const chapter1QuestionItems: Chapter1QuestionType[] = [
  {
    id: 1,
    characterLines: [
      "スライド学習お疲れ様でした。",
      "ここからは学んだことを使って問いに答えていきましょう。",
      "それでは出題しますね。",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "",
    action: "button",
    actionValue: "よろしくお願いします。",
  },
  {
    id: 2,
    characterLines: [
      "【第1問】",
      "日本は不景気だ",
      "アメリカも不景気だ",
      "中国も不景気だ",
      "以上からどんなことが言えるでしょうか？",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "世界は不景気だ",
    action: "textField",
    actionValue: "ここに入力してください",
  },
];
