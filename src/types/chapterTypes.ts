export type Chapter1QuestionType = {
  userAnswerList: {
    id: number;
    answer: string;
  }[];
  sceneCount: number;
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
