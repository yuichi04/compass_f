import { SelectableInfoType } from "../../types/inductionTypes";

type SelectableInfoListType = {
  section1: SelectableInfoType[];
  section2: SelectableInfoType[];
};

const selectableInfoList: SelectableInfoListType = {
  section1: [
    {
      id: 1,
      text: "英語で日記を書いている",
    },
    {
      id: 2,
      text: "通勤・通学中に英語の動画を見たり、音声を聞くようにしている",
    },
    {
      id: 3,
      text: "英語では何て言うのか日常的に考えるようにしている",
    },
    {
      id: 4,
      text: "日頃思ったことを英語で口に出すようにしている",
    },
    {
      id: 5,
      text: "毎日ニュースを英語で聞くようにしている",
    },
    {
      id: 6,
      text: "毎朝その日の予定を英語で書くようにしている",
    },
    {
      id: 7,
      text: "スキマ時間に単語や文法などの知識をインプットするようにしている",
    },
  ],
  section2: [
    {
      id: 1,
      text: "クローンサービスを作ってみる",
    },
  ],
};

export default selectableInfoList;
