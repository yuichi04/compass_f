export type Chapter1QuestionType = {
  id: number;
  characterLines: string[];
  characterImage: string;
  sampleAnswer: string;
  action: "button" | "textField" | "";
  actionValue: string;
  balloon?: boolean;
};
