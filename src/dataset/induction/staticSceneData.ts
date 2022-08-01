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
      "さっそくですが、あなたにはこれからこのセンターでオペレータをやっていただきます。",
      "仕事内容としては、お客様のご相談に対して何かしらの解決案を案内するというものになります。",
    ],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "はい。大丈夫です。",
      },
    ],
    lines: [
      "いろいろなご相談を受けますが、スライドで学んだことを使って解決案を考えていただければ大丈夫です。",
      "それでは始めましょう。準備は良いですか？",
    ],
  },
  {
    section: 1,
    character: { src: "guide/guide_smile_a.png", role: "guide" },
    lines: ["はい。", "よろしくお願いします。"],
  },
  {
    section: 1,
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    section: 1,
    character: { src: "guide/guide_normal_a.png", role: "guide" },
    lines: ["あ、さっそく電話が鳴りましたね。", "それでは、電話を取って対応を始めましょう。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "電話を取る",
      },
    ],
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["お電話ありがとうございます。", "なんでも相談サポートセンターです。"],
  },
  {
    section: 1,
    character: { src: "boy/dansei_05_g.png", role: "boy" },
    lines: ["あ、もしもし。", "すみません。相談なんですが・・・"],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["はい。どのようなご相談でしょうか。"],
  },
  {
    section: 1,
    character: { src: "boy/dansei_05_g.png", role: "boy" },
    lines: ["はい。えーっと、英語を話せるようになるにはどうしたら良いでしょうか。"],
  },
  {
    section: 1,
    lines: [
      "将来アメリカで働いてみたいと思っていて、英語の勉強に力を入れているんですけど、全然話せるようにならなくて・・・。",
      "何か英語が上達する方法があれば教えて欲しいです。",
    ],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: [
      "かしこまりました。英語が上達する方法についてのご相談ですね。",
      "それでは何か良い方法がないか確認いたします。少々お待ちください。",
    ],
  },
  {
    section: 1,
    character: { src: "boy/dansei_05_g.png", role: "boy" },
    lines: ["はい。よろしくお願いします。"],
  },
  {
    section: 1,
    character: { src: "guide/guide_normal_b.png", role: "guide" },
    lines: [
      "英語が上達するための方法・・・",
      "たしか、英語を第二言語として習得した人に関するデータがあったような・・・",
    ],
  },
  {
    section: 1,
    lines: ["・・・・・ありました。", "どうやら、英語の勉強方法についてのデータのようですね。"],
  },
  {
    section: 1,
    lines: ["ふむふむ。", "これならスライドで学んだ帰納法を用いれば何か解決案を導けそうですね。"],
  },
  {
    section: 1,
    lines: ["それでは、英語が上達するにはどうしたら良いか帰納法を用いて考えていきましょう。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "情報を確認する",
      },
    ],
    lines: [
      "帰納法の最初のステップは「複数の情報を揃える」でしたね。",
      "本当ならデータを集めるところからですが、今回はこのデータからいくつかピックアップして考えていきましょう。",
    ],
    phase: "info",
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "共通点を入力する",
      },
    ],
    lines: ["（共通することは何だろう・・・）"],
    phase: "common",
  },
  {
    section: 1,
    lines: ["（次のステップは「共通点から結論を導き出す」だから。）"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "結論を導く",
      },
    ],
    lines: [
      "（帰納法の最後のステップは確か、",
      "「共通点から結論を導き出して、論理に飛躍がないか確認すること」だから、",
      "まずは結論を導こう。）",
    ],
    phase: "conclusion",
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "論理に飛躍がないか確認する",
      },
    ],
    lines: [
      "（最後に論理に飛躍がないか確認しよう。",
      "「結論→共通点→情報」の順に「なぜならば」で文章を繋げると・・・）",
    ],
    phase: "check",
  },
  {
    section: 1,
    lines: ["お客様。"],
  },
  {
    section: 1,
    character: { src: "boy/dansei_05_h.png", role: "boy" },
    lines: ["はい。"],
  },
  {
    section: 1,
    lines: ["お待ちいただきありがとうございます。"],
  },
  {
    section: 1,
    lines: ["それではご相談いただきました、英語が上達するための方法についてご案内いたします。"],
  },
  {
    section: 1,
    character: { src: "boy/dansei_05_h.png", role: "boy" },
    lines: ["はい。よろしくお願いします。"],
  },
];

export default staticSceneData;
