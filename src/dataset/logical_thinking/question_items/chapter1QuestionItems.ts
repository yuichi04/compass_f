import { Chapter1QuestionType } from "../../../types/chapterTypes";

// アニメーションのタイミング設定
const timing = {
  exshort: 1.2,
  short: 1.4,
  normal: 1.6,
  long: 1.8,
  exlong: 2,
};

// シーン単位の配列を持つ
export const chapter1QuestionItems: Chapter1QuestionType[] = [
  {
    id: 1,
    characterLines: [
      {
        line: "スライド学習お疲れ様でした。",
      },
      { line: "ここからは学んだことを使って問いに答えていきましょう。" },
      { line: "全部で10問あります。" },
      { line: "準備は大丈夫ですか？" },
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "",
    action: "button",
    actionValue: "大丈夫です",
  },
  {
    id: 2,
    characterLines: [{ line: "それでは出題しますね。" }],
    characterImage: "guide_smile_a.png",
    sampleAnswer: "",
    action: "button",
    actionValue: "よろしくお願いします",
  },
  {
    id: 3,
    characterLines: [
      { line: "【第1問】" },
      { line: "日本は不景気だ" },
      { line: "アメリカも不景気だ" },
      { line: "中国も不景気だ" },
      { line: "ドイツも不景気だ" },
      { line: "以上からどんなことが言えるでしょうか？" },
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "世界中が不景気だと言える",
    action: "textField",
    actionValue: "ここに入力してください",
  },
];
