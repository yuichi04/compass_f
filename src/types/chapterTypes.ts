export type Chapter1QuestionType = {
  id: number;
  characterLines: {
    line: string;
    delay?: number;
    duration?: number;
  }[];
  characterImage: string;
  sampleAnswer: string;
  action: "button" | "textField" | "";
  actionValue: string;
  balloon?: boolean;
};
