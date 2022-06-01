import { Chapter1QuestionType } from "../../../types/chapterTypes";

// シーン単位の配列を持つ
export const chapter1QuestionItems: Chapter1QuestionType[] = [
  {
    id: 1,
    characterLines: [
      "スライド学習お疲れ様でした。",
      "ここからは学んだことを使って問いに答えていきましょう。",
      "全部で10問あります。",
      "準備は大丈夫ですか？",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "",
    action: "button",
    actionValue: "大丈夫です",
  },
  {
    id: 2,
    characterLines: ["それでは出題しますね。"],
    characterImage: "guide_smile_a.png",
    sampleAnswer: "",
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 3,
    },
  },
  {
    id: 3,
    characterLines: [
      "「第1問」",
      "日本は不景気だ",
      "アメリカも不景気だ",
      "中国も不景気だ",
      "ドイツも不景気だ",
      "以上からどんなことが言えるでしょうか？",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "世界中が不景気だと言える",
    action: "textField",
    actionValue: "ここに入力してください",
  },
];
