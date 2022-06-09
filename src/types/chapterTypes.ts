export type SceneId = number;
export type CommonFactor = string;
export type Answer = string;
export type SampleCommonFactor = string;
export type SampleAnswer = string;

export type Chapter1QuestionType = {
  id: number;
  section: number;
  resultData: {
    id: SceneId;
    data: string[];
    answer: Answer;
    commonFactor: CommonFactor;
    sampleCommonFactor: SampleCommonFactor;
    sampleAnswer: SampleAnswer;
  };
  isFullCommonFactor: boolean;
  isOpenActionBox: boolean;
  isOpenBalloon?: boolean;
  isOpenDocument: boolean;
  isOpenResult: boolean;
  isOpenSlideList: boolean;
  isProgressScene: boolean;
  isShowCharacter: boolean;
  isStart: boolean;
  commonFactor: CommonFactor;
  answer: Answer;
};

export type Chapter1QuestionItemType = {
  // id: SceneId;
  section: number;
  action: "button" | "textField" | "";
  actionValue: string;
  auto: {
    progress: boolean;
    displayTime: number;
  };
  allowProgress: boolean;
  characterLines: string[];
  characterImage: {
    src: string;
    role: "user" | "guide" | "customer" | "";
  };
  sampleCommonFactor: SampleCommonFactor;
  sampleAnswer: SampleAnswer;
  data: string[];
  response: {
    role: "user" | "guide" | "customer" | "";
    lines: string[];
    image: string;
  };
  isOpenDocument?: boolean;
  isLastScene?: boolean;
};
