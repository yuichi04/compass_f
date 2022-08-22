import { UserAnswersOfInductionType } from "../types/userAnswerTypes";
import client from "./client";

// ユーザーの回答をサーバーに送信
export const saveAnswersOfInduction = (params: UserAnswersOfInductionType) => {
  return client.post(process.env.REACT_APP_ANSWERS_URL!, params);
};

// ユーザーの解答をサーバーから取得
export const fetchAllAnswersHistory = () => {
  return client.get(process.env.REACT_APP_ANSWERS_URL!);
};
