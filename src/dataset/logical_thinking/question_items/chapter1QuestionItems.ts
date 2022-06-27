import { Chapter1QuestionItemType } from "../../../types/chapterTypes";

// シーンごとの要素を持った配列
export const chapter1QuestionItems: Chapter1QuestionItemType[] = [
  /**
   * シーン1
   */
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "ようこそ、なんでも相談サポートセンターへ！",
      "私はこのセンターで管理者をしているカメイと申します。",
    ],
    characterImage: { src: "guide/guide_smile_a.png", role: "guide" },
    allowProgress: true,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "さっそくですが、これからあなたにはこのサポートセンターのオペレーターとして、お問い合わせ対応をしてもらいます。",
    ],
    characterImage: { src: "guide/guide_normal_a.png", role: "guide" },
    allowProgress: true,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "このセンターはその名の通りジャンル問わず、様々なお問い合わせをいただきますが、スライドで学んだことを生かして対応してもらえれば大丈夫です。",
    ],
    characterImage: { src: "guide/guide_normal_a.png", role: "guide" },
    allowProgress: true,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "button",
    actionValue: "大丈夫です",
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "案内に絶対の正解はありませんので、あなたが良いと思う案内をしていきましょう。",
      "今回はわたしもサポートするので安心してくださいね。",
      "それでは準備は良いですか？",
      `（※案内終了後に「あなたの回答」と「回答例」が表示されます。比較してみてください。）`,
    ],
    characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
    allowProgress: false,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: ["それでは、よろしくお願いします。"],
    characterImage: { src: "guide/guide_smile_a.png", role: "guide" },
    allowProgress: true,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 4,
    },
    characterLines: ["Prrrrr....", "Prrrrr...."],
    characterImage: { src: "customer/dansei_05.png", role: "customer" },
    allowProgress: false,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 4,
    },
    characterLines: ["あっ、さっそくお問い合わせが来たみたいですね。", "電話を取ってみましょう。"],
    characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
    allowProgress: true,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "button",
    actionValue: "電話を取る",
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: ["Prrrrr....", "Prrrrr...."],
    characterImage: { src: "customer/dansei_05.png", role: "customer" },
    allowProgress: false,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 6,
    },
    characterLines: ["ピッ", "お問い合わせありがとうございます。", "なんでも相談サポートセンターです。"],
    characterImage: {
      src: "phone.png",
      role: "user",
    },
    allowProgress: false,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    auto: {
      progress: true,
      displayTime: 4,
    },
    characterLines: ["あ、もしもし。", "あのー、相談なんですが、"],
    characterImage: { src: "customer/dansei_05_b.png", role: "customer" },
    allowProgress: false,
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    allowProgress: true,
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "僕は将来アメリカで仕事をしたいと思っているんですけど英語が全然話せなくて・・・、",
      "なので、英語が話せるようになる方法があったら教えて欲しいです。",
    ],
    characterImage: { src: "customer/dansei_05_b.png", role: "customer" },
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    allowProgress: true,
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "このお客様は英語が話せるようになりたいみたいですね。",
      "ちょうど使えそうな資料があるので、確認してみましょう。",
    ],
    characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    allowProgress: true,
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "この資料にはアンケート結果が記載されているみたいですね。",
      "ふむふむ・・・",
      "この情報なら「帰納法」を使って解決案を導き出せそうですね。",
    ],
    characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
    isOpenDocument: true,
  },
  {
    section: 1,
    action: "",
    actionValue: "",
    allowProgress: true,
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: [
      "帰納法を使うときのポイントとして、まず最初に複数の情報から共通することは何かを考えるんでしたね。",
      "ということで、まずは、資料を見て共通することを導き出していきましょう。",
    ],
    characterImage: { src: "guide/guide_normal_b.png", role: "guide" },
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
    isOpenDocument: true,
  },
  {
    section: 1,
    action: "textField",
    actionValue: "ここに共通することを入力してください",
    allowProgress: false,
    auto: {
      progress: false,
      displayTime: 0,
    },
    characterLines: ["ポイントとしては、", "1、", "2、", "3、", "ですね。"],
    characterImage: { src: "guide/guide_normal_a.png", role: "guide" },
    data: [
      "「英語が話せる人に対するアンケート結果」",
      "・音読を中心に学習している",
      "・英会話の機会を増やすために、英会話アプリやサービスを利用している",
      "・ネイティブと話すなど、生の英語に触れる機会を作っている",
      "・洋画や海外ドラマなどで実践的な英語に触れる機会を増やしている",
    ],
    response: {
      role: "customer",
      lines: [
        "それじゃあ、その方法で勉強してみようと思います。",
        "また何かあったら相談させてください。ありがとうございました。",
      ],
      image: "customer/dansei_05_h.png",
    },
    sampleAnswer: "発音やリスニングなど「話す」「聞く」を重点的に勉強すると良い",
    sampleCommonFactor: "実際の会話を想定した方法で勉強している",
  },
  {
    section: 1,
    auto: {
      progress: true,
      displayTime: 5,
    },
    action: "",
    allowProgress: false,
    actionValue: "",
    characterLines: ["お疲れさまでした。", "それでは今の対応について、あなたの回答と回答例を確認してみましょう。"],
    characterImage: { src: "guide/guide_smile_a.png", role: "guide" },
    data: [],
    response: { role: "", lines: [], image: "" },
    sampleAnswer: "",
    sampleCommonFactor: "",
    isLastScene: true,
  },
  /**
   * シーン2
   */
];
