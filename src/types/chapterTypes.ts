export type Chapter1QuestionType = {
  userAnswerList: {
    id: number;
    questions: string[];
    answer: string;
  }[];
  sceneCount: number;
  isStart: boolean;
  isOpenActionBox: boolean;
  isOpenResult: boolean;
  isOpenSlideList: boolean;
  isOpenBalloon?: boolean;
};

export type Chapter1QuestionItemType = {
  id: number;
  action: "button" | "textField" | "";
  actionValue: string;
  auto?: {
    progress: boolean;
    displayTime: number;
  };
  characterLines: string[];
  characterImage: string;
  sampleAnswer?: string;
};
