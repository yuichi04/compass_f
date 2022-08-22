// types
import { SelectableInfoType } from "./inductionTypes";

// 帰納法のユーザーの解答に関する型定義
export type UserAnswersOfInductionType = {
  id?: string;
  uid: string;
  course: "induction" | "";
  consultation: string;
  conclusion: string;
  common: string;
  info: SelectableInfoType[];
  createdAt?: string;
};
