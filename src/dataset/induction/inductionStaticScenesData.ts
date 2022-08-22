// Types
import { StaticSceneDataType } from "../../types/inductionTypes";
// Images
import { CharacterImage } from "../../assets/images/characters";

const inductionStaticScenesData: StaticSceneDataType[] = [
  /*****************************************
   * section1
   *****************************************/
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: ["ようこそ、何でも相談サポートセンターへ。", "私はこのセンターで管理者をしている亀井と申します。"],
  },
  {
    sectionId: 1,
    lines: ["さっそくですが、あなたにはこれからこのセンターでオペレーターをやっていただきたいと思います。"],
  },
  {
    sectionId: 1,
    lines: ["仕事内容としては、お客様のご相談に対して何かしらの解決案を考え、案内するというものになります。"],
  },
  {
    sectionId: 1,
    lines: ["いろいろなご相談を受けますが、スライドで学んだことを使っていただければ大丈夫ですよ。"],
  },
  {
    sectionId: 1,
    lines: ["それでは始めていきましょう。", "準備ができたら、受電モードをオンにしてください。"],
    options: [{ progress: true, label: "受電モードをオンにする" }],
    narration: "オンにしてから数秒後・・・",
  },
  {
    sectionId: 1,
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: ["あ、さっそくお問い合わせが来たみたいですね。", "それでは、電話を取って対応を始めましょう。"],
  },
  {
    sectionId: 1,
    options: [{ progress: true, label: "電話を取る" }],
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["お電話ありがとうございます。", "なんでも相談サポートセンターです。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalA, role: "youngerBoy" },
    lines: ["あ、もしもし。", "すみません。相談なんですが・・・"],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["はい。どのようなご相談でしょうか。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalA, role: "youngerBoy" },
    lines: ["はい。あの、英語の勉強方法についての相談なんですが、"],
  },
  {
    sectionId: 1,
    lines: [
      "将来アメリカで働きたいなと思っているので、英語が話せるようになりたいんですけど、どうしたら良いでしょうか？",
    ],
  },
  {
    sectionId: 1,
    lines: [
      "学校の授業も宿題も集中してやっていて、休みの日には英単語の暗記もやっているんですけど、なかなか上達しなくて・・・",
      "何か良い勉強方法とかあれば教えて欲しいです。",
    ],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    consultation: "将来アメリカで働くために英語が話せるようになりたい",
    lines: ["かしこまりました。英語が話せるようになるための方法についてのご相談ですね。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalA, role: "youngerBoy" },
    lines: ["はい。そうです。"],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["かしこまりました。", "それではご相談内容についてお調べしますので、少々お待ちください。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalB, role: "youngerBoy" },
    lines: ["はい。よろしくお願いします。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: [
      "英語が話せるようになるための方法・・・",
      "たしか、英語を第二言語として習得した人に関する資料があったと思うので持ってきますね。",
    ],
  },
  {
    sectionId: 1,
    lines: ["・・・・・持ってきました。こちらです。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.surprise, role: "guide" },
    lines: ["ここに英語が話せるようになった人の勉強方法に関するトピックがありますね。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.closeEyes, role: "guide" },
    lines: ["ふむふむ・・・。", "このトピックの情報を使えば、何か解決案を導けそうです。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: ["それでは、英語が話せるようになる方法について考えていきましょう。"],
  },
  {
    sectionId: 1,
    options: [{ progress: true, label: "情報を確認する" }],
    lines: [
      "帰納法の最初のステップは「解決したい問題や課題に対する情報を複数揃えること」でしたね。",
      "本当なら情報を集めるところからですが、今回はこの資料の情報を使って考えていきましょう。",
    ],
    phase: "info",
  },
  // ここに動的シーンが挿入されます。
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは次のステップですね。"],
  },
  {
    sectionId: 1,
    options: [{ progress: true, label: "共通点を見つける" }],
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: ["次のステップは「共通点を見つける」です。", "揃えた情報から同じ特徴や性質は何かを考えましょう。"],
    phase: "common",
  },
  // ここに動的シーンが挿入されます。
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは次のステップにいきましょう。"],
  },
  {
    sectionId: 1,
    options: [{ progress: true, label: "解決案を考える" }],
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: [
      "次のステップは「結論を導く」です。",
      "共通点から具体的な解決案となる結論を導き出しましょう。",
      "お客様が英語を話せるようになるにはどうしたら良いでしょうか？",
    ],
    phase: "conclusion",
  },
  // ここに動的シーンが挿入されます。
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは最後に論理に飛躍がないか確認しましょう。"],
  },
  {
    sectionId: 1,
    options: [{ progress: true, label: "論理に飛躍がないか確認する" }],
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: [
      "論理の飛躍は「結論+共通点」「共通点+各情報」がそれぞれ「主張+根拠」という構造になっているかで確認できます。",
    ],
    phase: "check",
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["論理の飛躍も大丈夫そうです。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それではお客様に解決案をご案内しましょう。"],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["お客様。お待たせいたしました。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalB, role: "youngerBoy" },
    lines: ["いえいえ！"],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["それではご相談いただきました、英語が話せるようになるための方法についてご案内いたします。"],
  },
  {
    sectionId: 1,
    options: [{ progress: true, label: "解決案を案内する" }],
    character: { src: CharacterImage.boy.younger.normalB, role: "youngerBoy" },
    lines: ["はい。お願いします。"],
    narration: "英語が話せるようになるための方法とその根拠について説明した",
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalB, role: "youngerBoy" },
    lines: ["なるほど。", "そうすれば良いんですね。"],
  },
  {
    sectionId: 1,
    lines: ["おかげで道筋が見えてきた気がします。"],
  },
  {
    sectionId: 1,
    lines: ["また何か困ったことがあったら相談させてください。"],
  },
  {
    sectionId: 1,
    character: { src: "", role: "user" },
    lines: ["はい。いつでもお気軽にご相談ください。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalB, role: "youngerBoy" },
    lines: ["相談に乗っていただいて、ありがとうございました！"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.boy.younger.normalB, role: "youngerBoy" },
    lines: ["それでは失礼します。"],
  },
  {
    sectionId: 1,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["お疲れ様でした。", "初めて対応をしてみた感想はどうですか？", "何となく感覚は掴めましたか？"],
  },
  {
    sectionId: 1,
    lines: ["もし不明なことがあれば、スライドで再度確認してみましょう。"],
  },
  {
    sectionId: 1,
    lines: ["この後も対応を続けますか？"],
    options: [
      { progress: true, label: "続ける" },
      { progress: false, label: "やめる" },
    ],
    endpoint: true,
  },
  {
    sectionId: 1,
    lines: ["それでは少し休憩したら次の対応をお願いします。"],
    narration: "休憩後・・・",
  },
  /*****************************************
   * section2
   *****************************************/
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["お帰りなさい。", "それでは次の対応を始めていきましょう！", "電話を受電モードをオンでお願いします。"],
    options: [{ progress: true, label: "受電モードをオンにする" }],
  },
  {
    sectionId: 2,
    lines: ["それでは電話が鳴ったら対応を始めてください。"],
  },
  {
    sectionId: 2,
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["（あ、さっそくきた。）"],
  },
  {
    sectionId: 2,
    character: { src: "others/phone.png", role: "call" },
    lines: ["Prrrrr....", "Prrrrr...."],
    options: [{ progress: true, label: "電話を取る" }],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["お電話ありがとうございます。", "なんでも相談サポートセンターです。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.normalA, role: "youngBoy" },
    lines: ["あ、もしもし。", "相談したいことがあるんですけど、大丈夫でしょうか？"],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["はい。もちろんです。", "どのようなご相談でしょうか？"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.normalA, role: "youngBoy" },
    lines: ["ありがとうございます。", "プログラミングの勉強方法についてなんですが、"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.troubledFaceB, role: "youngBoy" },
    lines: ["最近プログラミングの勉強を始めたんですけど、あまり身についている気がしなくて。"],
  },
  {
    sectionId: 2,
    lines: [
      "ネットで学べるサービスを利用して基礎的な用語とか構文とかは覚えたんですけど、",
      "これで何ができるのか全然イメージがわかないんですよね。",
    ],
  },
  {
    sectionId: 2,

    lines: ["どうやって勉強したら、もっとプログラミングの実力がつきますか？", "まずは脱入門レベルを目指したいです。"],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    consultation: "プログラミング脱入門するための勉強方法を知りたい",
    lines: ["かしこまりました。", "「プログラミングの実力を伸ばすための方法が知りたい。」とのことですね。"],
  },
  {
    sectionId: 2,
    lines: ["それではご相談内容についてお調べしますので、少々お待ちください。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.normalA, role: "youngBoy" },
    lines: ["ありがとうございます。よろしくお願いします。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: [
      "プログラミングの勉強方法についてですね。",
      "実は最近プログラミングの勉強方法に関するご相談が増えてきたので、",
      "それに対応するための資料を作っておきました。今回はそれを使いましょう。",
    ],
  },
  {
    sectionId: 2,
    lines: ["資料を持ってきますね。ちょっと待っててください・・・。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: [
      "はい、こちらの資料です。",
      "今回のご相談内容なら「脱入門者のための勉強方法」というトピックが使えるかなと思います。",
      "こちらには現役エンジニアが初心者の頃にやっていた勉強方法が記載してあります。",
    ],
  },
  {
    sectionId: 2,
    lines: ["それでは解決案を考えていきましょう。"],
    options: [{ progress: true, label: "解決案を考える" }],
    phase: "info",
  },
  // ここに動的シーンが入ります。
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは次のステップですね。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: ["次のステップは「共通点を見つける」ことですね。", "同じ特徴や性質を見つけていきましょう。"],
    options: [
      {
        progress: true,
        label: "共通点を見つける",
      },
    ],
    phase: "common",
  },
  // ここに動的シーンが入ります。
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは次のステップですね。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: [
      "次のステップは「結論を導き出す」ことですね。",
      "入門者のお客様がプログラミングを上達させるにはどのような勉強方法が良いでしょうか？",
      "共通点からおすすめの勉強方法を考えていきましょう。",
    ],
    options: [{ progress: true, label: "勉強方法を考える" }],
    phase: "conclusion",
  },
  // ここに動的シーンが入ります。
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。", "それでは最後に論理が飛躍していないか確認しましょう。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.normalB, role: "guide" },
    lines: [
      "先ほどの対応でもありましたが、「結論+共通点」と「共通点+各情報」がそれぞれ「主張+根拠」という構造になっているかを確認するんでしたね。",
    ],
    options: [{ progress: true, label: "論理の飛躍を確認する" }],
    phase: "check",
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["今回も論理の飛躍は大丈夫そうです。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["わかりました。さすがですね！", "それではお客様に解決案をご案内しましょう。"],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["お客様。お待たせいたしました。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.normalB, role: "youngBoy" },
    lines: ["いえいえ！"],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["それではご相談いただきました、プログラミングの実力を伸ばすための方法についてご案内いたします。"],
  },
  {
    sectionId: 2,
    options: [{ progress: true, label: "解決案を案内する" }],
    character: { src: CharacterImage.boy.young.normalB, role: "youngBoy" },
    lines: ["はい。お願いします。"],
    narration: "プログラミングの実力を伸ばすための方法とその根拠について説明した",
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.normalB, role: "youngBoy" },
    lines: ["なるほど。", "そうすれば良いんですね！"],
  },
  {
    sectionId: 2,
    lines: ["おかげで方向性が見えてきました！"],
  },
  {
    sectionId: 2,
    lines: ["また何か困ったことがあったら相談させてください。"],
  },
  {
    sectionId: 2,
    character: { src: "", role: "user" },
    lines: ["はい。いつでもお気軽にご相談ください。"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.boy.young.smileB, role: "youngBoy" },
    lines: ["ご相談に乗っていただき、ありがとうございました。"],
  },
  {
    sectionId: 2,
    lines: ["それでは失礼します！"],
  },
  {
    sectionId: 2,
    character: { src: CharacterImage.guide.smile, role: "guide" },
    lines: ["お疲れ様でした。", "今回の対応はいかがでしたか？", "少しずつ慣れてきましたか？"],
  },
  {
    sectionId: 2,
    lines: ["もし不明なことがあれば、何度でもスライドを確認していただいて大丈夫ですよ。"],
  },
  {
    sectionId: 2,
    lines: [
      "お疲れ様でした。本コースは以上で終わりです。",
      "現在続きを開発中ですので、今後のアップデートをお待ちくださいませ。",
    ],
    // narration: "休憩後・・・",
  },
  /*****************************************
   * section3
   *****************************************/
  // {
  //   sectionId: 3,
  //   lines: ["最終問題"],
  // },
];

export default inductionStaticScenesData;
