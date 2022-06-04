export type SceneId = number;
export type CommonFactor = string;
export type Answer = string;
export type SampleCommonFactor = string;
export type SampleAnswer = string;

export type Chapter1QuestionType = {
  userAnswerList: {
    id: SceneId;
    questions: string[];
    answer: Answer;
    commonFactor: CommonFactor;
    sampleCommonFactor: SampleCommonFactor;
    sampleAnswer: SampleAnswer;
  }[];
  lastSceneId: number;
  isStart: boolean;
  isOpenActionBox: boolean;
  isOpenResult: boolean;
  isOpenSlideList: boolean;
  isOpenBalloon?: boolean;
  isFullCommonFactor: boolean;
  commonFactor: CommonFactor;
  answer: Answer;
};

export type Chapter1QuestionItemType = {
  id: SceneId;
  action: "button" | "textField" | "";
  actionValue: string;
  auto?: {
    progress: boolean;
    displayTime: number;
  };
  characterLines: string[];
  characterImage: string;
  sampleCommonFactor: SampleCommonFactor;
  sampleAnswer: SampleAnswer;
};
