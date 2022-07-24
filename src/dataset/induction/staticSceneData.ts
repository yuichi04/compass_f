// import { StaticSceneDataType } from "../../types/lessonType";

// // シーンごとの要素を持った配列
// export const StaticSceneData: StaticSceneDataType[]= [
//   /**
//    * シーン1
//    */
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: [
//       "ようこそ！なんでも相談サポートセンターへ！",
//       "私はこのセンターで管理者をしている亀井と申します。",
//       "さっそくですが、あなたにはこのセンターのオペレーターとしてお問い合わせ対応をしてもらいます。",
//     ],
//     characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: [
//       "このセンターはその名の通りジャンル問わず様々なお問い合わせをいただきますが、",
//       "スライドで学んだことを生かして対応してもらえれば大丈夫です。",
//     ],
//     characterImage: { src: "guide/guide_normal_a.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "button",
//     actionValue: "大丈夫です。",
//     characterLines: [
//       "案内に絶対の正解はありませんので、あなたが良いと思う案内をしていきましょう。",
//       "今回はわたしもサポートするので安心してくださいね。",
//       "それでは準備は良いですか？",
//       `（※案内終了後に「あなたの回答」と「回答例」が表示されます。比較してみてください。）`,
//     ],
//     characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: ["それでは、よろしくお願いします。"],
//     characterImage: { src: "guide/guide_smile_a.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: ["Prrrrr....", "Prrrrr...."],
//     characterImage: { src: "customer/dansei_05.png", role: "customer" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: ["あっ、さっそくお問い合わせが来たみたいですね。", "電話を取ってみましょう。"],
//     characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "button",
//     actionValue: "電話を取る。",
//     characterLines: ["Prrrrr....", "Prrrrr...."],
//     characterImage: { src: "customer/dansei_05.png", role: "customer" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: ["お問い合わせありがとうございます。", "なんでも相談サポートセンターです。"],
//     characterImage: {
//       src: "phone.png",
//       role: "user",
//     },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: ["あ、もしもし。", "すみません。あのー、相談なんですが、"],
//     characterImage: { src: "customer/dansei_05_b.png", role: "boy" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: [
//       "僕は将来アメリカで仕事をしたいと思っているんですけど英語が全然話せなくて困ってるんです。",
//       "どうしたら英語が話せるようになりますか？何か良い方法があったら教えて欲しいです。",
//     ],
//     characterImage: { src: "customer/dansei_05_b.png", role: "boy" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: [
//       "このお客様は英語が話せるようになりたいみたいですね。",
//       "ちょうど使えそうな資料があるので、確認してみましょう。",
//     ],
//     characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: [
//       "この資料にはアンケート結果が記載されているみたいですね。",
//       "ふむふむ・・・",
//       "この情報なら「帰納法」を使って解決案を導き出せそうですね。",
//     ],
//     characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//     isOpenDocument: true,
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: [
//       "帰納法を使うときのポイントとして、まず最初に複数の情報から共通することは何かを考える。",
//       "ということで、まずは、資料を見て共通することを導き出していきましょう。",
//     ],
//     characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//     isOpenDocument: true,
//   },
//   {
//     section: 1,
//     action: "textField",
//     actionValue: "ここに共通することを入力してください",
//     characterLines: ["ポイントとしては、", "1、", "2、", "3、", "ですね。"],
//     characterImage: { src: "guide/guide_normal_a.png", role: "guide" },
//     data: [
//       "「英語が話せる人に対するアンケート結果」",
//       "・音読を中心に学習している",
//       "・英会話の機会を増やすために、英会話アプリやサービスを利用している",
//       "・ネイティブと話すなど、生の英語に触れる機会を作っている",
//       "・洋画や海外ドラマなどで実践的な英語に触れる機会を増やしている",
//     ],
//     response: {
//       role: "boy",
//       lines: [
//         "それじゃあ、その方法で勉強してみようと思います。",
//         "また何かあったら相談させてください。ありがとうございました。",
//       ],
//       image: "customer/dansei_05_h.png",
//     },
//     sampleAnswer: "発音やリスニングなど「話す」「聞く」を重点的に勉強すると良い",
//     sampleCommonFactor: "実際の会話を想定した方法で勉強している",
//   },
//   {
//     section: 1,
//     action: "",
//     actionValue: "",
//     characterLines: ["お疲れさまでした。", "それでは今の対応について、あなたの回答と回答例を確認してみましょう。"],
//     characterImage: { src: "guide/guide_smile_a.png", role: "guide" },
//     data: [],
//     response: { role: "", lines: [], image: "" },
//     sampleAnswer: "",
//     sampleCommonFactor: "",
//     isLastScene: true,
//   },
//   /**
//    * シーン2
//    */
// ];

import { StaticSceneDataType } from "../../types/lessonType";

const staticSceneData: StaticSceneDataType[] = [
  {
    character: { src: "guide/guide_normal_a.png", role: "guide" },
    lines: ["ようこそ、何でも相談サポートセンターへ。", "私はこのセンターで管理者をしている亀井と申します。"],
  },
  {
    lines: [
      "さっそくですが、あなたにはこのセンターのオペレーターになっていただき、お客様のお悩みを解決してもらおうと思います。",
    ],
  },
  {
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
    character: { src: "guide/guide_smile_a.png", role: "guide" },
    lines: ["はい。", "それでは、よろしくお願いします。"],
  },
  {
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    character: { src: "guide/guide_normal_a.png", role: "guide" },
    lines: ["あ、さっそく電話がなりましたね。", "では、電話をとって対応を始めてください。"],
  },
  {
    action: {
      type: "button",
      label: "電話を取る",
    },
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    action: {
      type: "textField",
      label: "ここに共通点を入力してください",
    },
    character: { src: "", role: "user" },
    lines: ["（帰納法の2つ目のステップは、「共通点を見つける」だったかな。", "共通することは何だろう・・・）"],
    phase: "common",
  },
  {
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
