/******************************************************
 *  担当する処理
 * ・ユーザーの演習の解答の保存と取得
 * ・解答詳細画面の表示/非表示
 ******************************************************/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
// Modules
import { toast } from "react-toastify";
// Types
import { UserAnswersOfInductionType } from "../../types/userAnswerTypes";
// api
import { fetchAllAnswersHistory, saveAnswersOfInduction } from "../../api/userAnswerApi";

type InitialState = {
  answerListOfInduction: UserAnswersOfInductionType[];
  answerOfInduction: UserAnswersOfInductionType;
  isOpenAnswerDetails: boolean;
};

const initialState: InitialState = {
  answerListOfInduction: [],
  answerOfInduction: {
    id: "",
    uid: "",
    course: "帰納法",
    consultation: "",
    conclusion: "",
    common: "",
    info: [],
    createdAt: "",
  },
  isOpenAnswerDetails: false,
};

// ユーザーの解答を全て取得する
export const fetchAllAnswersHistoryAction = createAsyncThunk("answers/fetchAllAnswers", async () => {
  const res = await fetchAllAnswersHistory();
  return res.data.data;
});

// 帰納法に関するユーザーの解答をサーバーに送信し、レスポンスを保存する
export const saveUserAnswersOfInductionAction = createAsyncThunk(
  "answers/saveUserAnswers",
  async (params: UserAnswersOfInductionType) => {
    const res = await saveAnswersOfInduction(params);
    return res.data.data;
  }
);

const answerSlice = createSlice({
  name: "answer",
  initialState,
  reducers: {
    // 解答詳細画面の表示/非表示の切り替え処理
    toggleShowAnswerDetails: (state) => {
      state.isOpenAnswerDetails = !state.isOpenAnswerDetails;
    },
    // 引数のidと一致した解答を取得する
    getAnswerOfInduction: (state, action: { payload: string }) => {
      const answer = state.answerListOfInduction.find((answer) => answer.id === action.payload);
      if (answer) state.answerOfInduction = answer;
    },
  },
  extraReducers: (builder) => {
    // 取得した解答をstateに保存
    builder.addCase(fetchAllAnswersHistoryAction.fulfilled, (state, action) => {
      state.answerListOfInduction = action.payload;
    });
    builder.addCase(saveUserAnswersOfInductionAction.fulfilled, (state, action) => {
      state.answerListOfInduction.push(action.payload);
      toast.success("対応履歴が保存されました");
    });
  },
});

export default answerSlice.reducer;
export const answerSelector = (state: RootState) => state.answer;
export const { toggleShowAnswerDetails, getAnswerOfInduction } = answerSlice.actions;
