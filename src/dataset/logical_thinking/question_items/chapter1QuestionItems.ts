import { Chapter1QuestionItemType } from "../../../types/chapterTypes";

// シーンごとの要素を持った配列
export const chapter1QuestionItems: Chapter1QuestionItemType[] = [
  {
    id: 1,
    action: "button",
    actionValue: "大丈夫です",
    characterLines: [
      "スライド学習お疲れ様でした。",
      "ここからは学んだことを使って問いに答えていきましょう。",
      "全部で10問あります。",
      "準備はよろしいですか？",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "",
  },
  {
    id: 2,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 2.5,
    },
    characterLines: ["それでは出題しますね。"],
    characterImage: "guide_smile_a.png",
    sampleAnswer: "",
  },
  {
    id: 3,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 2.5,
    },
    characterLines: ["第1問"],
    characterImage: "guide_smile_a.png",
    sampleAnswer: "",
  },
  {
    id: 4,
    action: "textField",
    actionValue: "ここに入力してください",
    characterLines: [
      "日本は不景気だ。",
      "アメリカも不景気だ。",
      "中国も不景気だ。",
      "ドイツも不景気だ。",
      "以上からどんなことが言えるでしょうか？お答えください。",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "世界中が不景気だと言える",
  },
  {
    id: 5,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 2.5,
    },
    characterLines: ["第2問"],
    characterImage: "guide_smile_a.png",
    sampleAnswer: "",
  },
  {
    id: 6,
    action: "textField",
    actionValue: "ここに入力してください",
    characterLines: [
      "ハイブリット車の販売は好調である。",
      "オール電化の住宅の比率が増えている。",
      "マイボトルの使用が増えている。",
      "エコバックの使用が増えている",
      "以上からどんなことが言えるでしょうか？お答えください。",
    ],
    characterImage: "guide_normal_b.png",
    sampleAnswer: "消費者は環境配慮した製品を求める",
  },
  {
    id: 7,
    auto: {
      progress: true,
      displayTime: 5,
    },
    action: "",
    actionValue: "",
    characterLines: ["これにて全問終了です。", "最後にあなたの回答一覧を表示しますね。", "お疲れさまでした。"],
    characterImage: "guide_smile_a.png",
  },
];
