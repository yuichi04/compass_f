import { SelectableInfoType } from "../../types/inductionTypes";

type SelectableInfoListType = {
  section1: SelectableInfoType[];
  section2: SelectableInfoType[];
};

const selectableInfoList: SelectableInfoListType = {
  section1: [
    {
      id: 1,
      text: "英語で日記を書いていた",
    },
    {
      id: 2,
      text: "通勤・通学中に英語の動画を見たり、音声を聞くようにしていた",
    },
    {
      id: 3,
      text: "英語では何て言うのか日常的に考えるようにしていた",
    },
    {
      id: 4,
      text: "日頃思ったことを英語で口に出すようにしていた",
    },
    {
      id: 5,
      text: "毎日のニュースは英語で聞いていた",
    },
    {
      id: 6,
      text: "スキマ時間に単語や文法などの知識をインプットするようにしていた",
    },
    {
      id: 7,
      text: "毎朝その日の予定を英語で書いていた",
    },
    {
      id: 8,
      text: "オンライン英会話を利用してネイティブと話す機会を作っていた",
    },
    {
      id: 9,
      text: "音の繋がりや脱落など、発音を気にしながら文章を繰り返し音読していた",
    },
  ],
  section2: [
    {
      id: 1,
      text: "自分の悩みを解決するアプリを作っていた",
    },
    {
      id: 2,
      text: "普段自分が使っているアプリを真似したクローンを作っていた",
    },
    {
      id: 3,
      text: "チュートリアルで作ったTODOアプリに機能を追加していた",
    },
    {
      id: 4,
      text: "同じアプリを違う言語で作り替えていた",
    },
    {
      id: 5,
      text: "友達や家族の悩みを解決するアプリを作っていた",
    },
    {
      id: 6,
      text: "何度も出会うエラーについてはノートにまとめていた",
    },
    {
      id: 7,
      text: "同じ処理を別の書き方で動くか試していた",
    },
    {
      id: 8,
      text: "エラーを解決するときには日本語ではなく英語で検索するようにしていた",
    },
  ],
};

export default selectableInfoList;
