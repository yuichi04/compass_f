export type SceneId = number;
export type CommonFactor = string;
export type Answer = string;
export type SampleCommonFactor = string;
export type SampleAnswer = string;

export type Chapter1QuestionType = {
  id: number;
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
  isOpenBalloon?: boolean;
  isOpenResult: boolean;
  isOpenSlideList: boolean;
  isFullCommonFactor: boolean;
  commonFactor: CommonFactor;
  answer: Answer;
};

export type Chapter1QuestionItemType = {
  // id: SceneId;
  action: "button" | "textField" | "";
  actionValue: string;
  auto?: {
    progress: boolean;
    displayTime: number;
  };
  isOpenDocument: boolean;
  isClickToContinue: boolean;
  characterLines: string[];
  characterImage: {
    src: string;
    role: "user" | "guide" | "customer" | "";
  };
  sampleCommonFactor: SampleCommonFactor;
  sampleAnswer: SampleAnswer;
  questions: string[];
  response: {
    role: "user" | "guide" | "customer" | "";
    lines: string[];
    image: string;
  };
};
