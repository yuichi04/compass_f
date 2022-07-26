import { StaticSceneDataType } from "../../types/lessonType";

const staticSceneData: StaticSceneDataType[] = [
  {
    section: 1,
    character: { src: "guide/guide_normal_a.png", role: "guide" },
    lines: ["ようこそ、何でも相談サポートセンターへ。", "私はこのセンターで管理者をしている亀井と申します。"],
  },
  {
    section: 1,
    lines: [
      "さっそくですが、あなたにはこのセンターのオペレーターになっていただき、お客様のお悩みを解決してもらおうと思います。",
    ],
  },
  {
    section: 1,
    action: {
      type: "button",
      label: "はい。大丈夫です。",
    },
    lines: [
      "いろいろなお悩み相談を受けますが、スライドで学んだことを活かしていただければ大丈夫です。",
      "それでは始めましょう。準備は良いですか？",
    ],
  },
  {
    section: 1,
    character: { src: "guide/guide_smile_a.png", role: "guide" },
    lines: ["はい。", "それでは、よろしくお願いします。"],
  },
  {
    section: 1,
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    section: 1,
    character: { src: "guide/guide_normal_a.png", role: "guide" },
    lines: ["あ、さっそく電話がなりましたね。", "では、電話をとって対応を始めてください。"],
  },
  {
    section: 1,
    action: {
      type: "button",
      label: "電話を取る",
    },
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    section: 1,
    action: {
      type: "button",
      label: "情報を確認する",
    },
    character: { src: "guide/guide_normal_b.png", role: "guide" },
    lines: [
      "英語が話せるようになる勉強方法ですね・・・",
      "使えそうな情報がありますので、その中からいくつかピックアップして、それらをもとに解決案を考えていきましょう。",
    ],
  },
  {
    section: 1,
    character: { src: "", role: "" },
    lines: [],
    phase: "info",
  },
  {
    section: 1,
    action: {
      type: "textField",
      label: "ここに共通点を入力してください",
    },

    lines: ["（帰納法の2つ目のステップは、「共通点を見つける」だったかな。", "共通することは何だろう・・・）"],
    phase: "common",
  },
  {
    section: 1,
    action: {
      type: "textField",
      label: "ここに結論を入力してください",
    },
    lines: [
      "（帰納法の最後のステップは確か、",
      "「共通点から結論を導き出して、論理に飛躍がないか確認すること」だから、",
      "まずは結論を導いて・・・）",
    ],
    phase: "conclusion",
  },
  {
    section: 1,
    action: {
      type: "button",
      label: "論理に飛躍はない。",
    },
    lines: [
      "（最後に論理に飛躍がないか確認しよう。",
      "「結論→共通点→情報」の順に「なぜならば」で文章を繋げると・・・）",
    ],
    isOpenAnswers: true,
  },
];

export default staticSceneData;
