export type SceneId = number;
export type CommonFactor = string;
export type Answer = string;
export type SampleCommonFactor = string;
export type SampleAnswer = string;

export type Chapter1ExerciseType = {
  id: number;
  allowProgress: boolean;
  answer: Answer;
  commonFactor: CommonFactor;
  lineDelayTime: number;
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
  isShowCharacter: boolean;
  isStart: boolean;
  isProgressScene: boolean;
};

export type Chapter1ExerciseDataType = {
  section: number;
  action: "button" | "textField" | "";
  actionValue: string;
  characterLines: string[];
  characterImage: {
    src: string;
    role: "user" | "guide" | "customer" | "boy" | "";
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
