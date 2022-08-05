import { StaticSceneDataType } from "../../types/lessonType";
import { CharacterImage } from "../../assets/images/characters";

const staticSceneData: StaticSceneDataType[] = [
  {
    section: 1,
    character: { src: CharacterImage.guide.normalA, role: "guide" },
    lines: ["ようこそ、何でも相談サポートセンターへ。", "私はこのセンターで管理者をしている亀井と申します。"],
  },
  {
    section: 1,
    lines: ["さっそくですが、あなたにはこれからこのセンターでオペレーターをやっていただきます。"],
  },
  {
    section: 1,
    lines: ["仕事内容としては、お客様のご相談に対して何かしら解決案を案内するというものになります。"],
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
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["はい。", "よろしくお願いします。"],
  },
  {
    section: 1,
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    section: 1,
    character: { src: CharacterImage.guide.normalA, role: "guide" },
    lines: ["あ、さっそくお問い合わせが来たみたいですね。", "それでは、電話を取って対応を始めましょう。"],
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
    character: { src: CharacterImage.boy.closeMouse, role: "boy" },
    lines: ["あ、もしもし。", "すみません。相談なんですが・・・"],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["はい。どのようなご相談でしょうか。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.boy.closeMouse, role: "boy" },
    lines: ["はい。あの、英語ができるようになるにはどうしたら良いでしょうか。"],
  },
  {
    section: 1,
    lines: [
      "将来アメリカで働いてみたいと思っているんですけど、あまり英語が得意ではなくて・・・。",
      "何か良い勉強方法とかあれば教えて欲しいです。",
    ],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["かしこまりました。英語を上達させるための方法についてのご相談ですね。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.boy.closeMouse, role: "boy" },
    lines: ["はい。そうです。"],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["1点確認させていただきたいのですが、普段英語学習はどのくらいされていますか？"],
  },
  {
    section: 1,
    character: { src: CharacterImage.boy.openMouse, role: "boy" },
    lines: [
      "そうですね・・・",
      "学校の授業と宿題を合わせて、1日に1、2時間くらいだと思います。",
      "あと、休みの日には単語の暗記をやったりもしてます。",
    ],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["かしこまりました。", "それでは、何か良い方法がないか確認させていただきますので、少々お待ちください。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.boy.openMouse, role: "boy" },
    lines: ["はい。よろしくお願いします。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.guide.surprise, role: "guide" },
    lines: ["英語が上達する方法・・・", "たしか、英語を第二言語として習得した人に関するデータがあったような・・・"],
  },
  {
    section: 1,
    character: { src: CharacterImage.guide.normalA, role: "guide" },
    lines: ["・・・・・ありました。", "どうやら、英語の勉強方法についてのデータのようですね。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.guide.closeEyes, role: "guide" },
    lines: ["ふむふむ。", "これならスライドで学んだ帰納法を用いて何か解決案を導けそうですね。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
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
      "帰納法の最初のステップは「複数の情報を揃える」ことでしたね。",
      "本当ならデータを集めるところからですが、今回はこのデータからいくつかピックアップして考えていきましょう。",
    ],
    phase: "info",
  },
  // ここに動的シーンが挿入されます。
  {
    section: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは次のステップですね。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "共通点を見つける",
      },
    ],
    character: { src: CharacterImage.guide.normalA, role: "guide" },
    lines: ["次のステップは「共通点を見つける」です。", "揃えた情報から同じ特徴や性質は何かを考えましょう。"],
    phase: "common",
  },
  // ここに動的シーンが挿入されます。
  {
    section: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは次のステップにいきましょう。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "解決案を考える",
      },
    ],
    character: { src: CharacterImage.guide.normalA, role: "guide" },
    lines: [
      "次のステップは「結論を導く」です。",
      "共通点から具体的な解決案となる結論を導き出しましょう。",
      "お客様の英語が上達するにはどうしたら良いでしょうか？",
    ],
    phase: "conclusion",
  },
  // ここに動的シーンが挿入されます。
  {
    section: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは最後に論理に飛躍がないか確認しましょう。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "論理に飛躍がないか確認する",
      },
    ],
    character: { src: CharacterImage.guide.normalA, role: "guide" },
    lines: [
      "論理の飛躍は「結論→共通点」「共通点→各情報」がそれぞれ「主張→根拠」という構造になっているかで確認できます。",
      "あなたが導き出した解決案に違和感はありませんか？",
    ],
    phase: "check",
  },
  // ここに動的シーンが挿入されます。
  {
    section: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それではいよいよお客様に解決案をご案内しましょう。"],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["お客様。"],
  },
  {
    section: 1,
    character: { src: CharacterImage.boy.openMouse, role: "boy" },
    lines: ["はい。"],
  },
  {
    section: 1,
    character: { src: "", role: "user" },
    lines: ["お待ちいただきありがとうございます。"],
  },
  {
    section: 1,
    lines: ["それではご相談いただきました、英語が上達するための方法についてご案内いたします。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "解決案を案内する",
      },
    ],
    character: { src: CharacterImage.boy.openMouse, role: "boy" },
    lines: ["はい。よろしくお願いします。"],
  },
  {
    section: 1,
    options: [
      {
        progress: true,
        label: "解決案を案内する",
      },
    ],
    character: { src: CharacterImage.boy.openMouse, role: "boy" },
    lines: ["なるほど"],
  },
];

export default staticSceneData;
