import { createSlice } from "@reduxjs/toolkit";
import { LessonType, UtilsKeyType } from "../../../types/lessonType";
import { staticSceneData } from "../../../dataset/induction";
import { RootState } from "../store";
import optionsData from "../../../dataset/induction/optionsData";

const initialState: LessonType = {
  sectionId: 0, // 現在のセクション
  sceneId: 0, // 現在のシーン
  allowStartingExercise: false, // 演習の開始を許可するか
  allowProgressScene: false, // シーンの進行を許可するか
  characterInfo: { src: "", role: "" }, // キャラクター情報の変更を管理
  displaySpeedOfLines: 0.02, // セリフ1文字あたりの表示速度
  isOpenScreenForAnswers: false, // フェーズ別回答画面の表示・非表示
  isLastScene: false, // 最後のシーンかどうか
  isOpenSlide: true, // スライドの表示・非表示
  isOpenResults: false, // 演習結果の表示・非表示
  isOpenAnswers: false, // ユーザーの回答の表示・非表示
  isOpenDocuments: false, // 資料の表示・非表示
  options: [], // 現在のセクションの選択可能な情報
  // シーン本体
  scene: {
    section: 0,
    action: { type: "", label: "" },
    character: { src: "", role: "" },

    lines: [],
    phase: "",
  },
  // 結果表示用にユーザーの回答を格納
  userAnswers: {
    info: [],
    common: "",
    conclusion: "",
    check: false,
  },
};

const inductionSlice = createSlice({
  name: "induction",
  initialState,
  reducers: {
    // 演習の開始・停止の処理
    allowStartingExerciseAction: (state, action: { payload: boolean }) => {
      state.allowStartingExercise = action.payload;
    },

    // シーンの更新処理
    setNextStaticSceneAction: (state, action: { payload: number }) => {
      // 初期化
      state.allowProgressScene = false;
      state.isOpenScreenForAnswers = false;

      // 次のシーンのidに更新
      state.sceneId = action.payload + 1;
      // idと一致するデータを取得
      const newSceneData = staticSceneData.find((item, index) => index + 1 === state.sceneId);

      if (newSceneData) {
        // セクションIDを更新
        state.sectionId = newSceneData.section;
        // 取得したデータからシーンを生成
        state.scene = newSceneData;
        // キャラクターが設定されている場合は更新（設定されていない場合は前回と同じキャラクターが表示される）
        if (newSceneData.character) state.characterInfo = newSceneData.character;
      }

      // 最後のシーンかどうか
      if (state.sceneId === staticSceneData.length) state.isLastScene = true;
    },

    // ユーザーの回答から動的シーンを生成する
    setNextDynamicSceneAction: (state, action: { payload: string | number[] }) => {
      // 次のシーンへ進行するためにアクションを初期化
      state.scene.action = { type: "", label: "" };
      // 生成するシーンのキャラクターをユーザーに固定
      state.characterInfo = { src: "", role: "user" };
      // ユーザーの回答を保存し、セリフを生成
      switch (state.scene.phase) {
        case "info":
          if (Array.isArray(action.payload)) {
            // ユーザーが選択した情報を保存
            action.payload.forEach((id) => {
              const option = state.options.find((option) => option.id === id);
              if (option) {
                state.userAnswers.info = [...state.userAnswers.info, option];
              }
            });
            // セリフを生成
            state.scene.lines = ["（情報はこれで良いかな。）"];
          }
          break;
        case "common":
          if (typeof action.payload === "string") {
            // ユーザーが入力した共通点を保存
            state.userAnswers.common = action.payload;
            // セリフを生成
            state.scene.lines = [`（共通点は「${state.userAnswers.common}」かな。）`];
          }
          break;
        case "conclusion":
          if (typeof action.payload === "string") {
            // ユーザーが入力した結論を保存
            state.userAnswers.conclusion = action.payload;
            // セリフを生成
            state.scene.lines = [`（結論は「${state.userAnswers.conclusion}」）`];
          }
          break;
        case "check":
          if (typeof action.payload === "string") {
            // セリフの生成
            if (state.userAnswers.check) {
              state.scene.lines = ["論理の飛躍もなし。", "これで大丈夫。"];
            }
          }
          break;
      }
      // フェーズを終了する
      state.scene.phase = "";
      // 回答画面を閉じる
      state.isOpenScreenForAnswers = false;
    },

    // フェーズがinfoなら選択可能な情報（選択肢）を保存する
    getInfoPhaseOptionsAction: (state) => {
      if (state.scene.phase === "info") {
        const newOptions = optionsData.filter((option) => option.section === state.sectionId);
        state.options = newOptions;
      }
    },

    // 各UIの表示・非表示
    showUtilsAction: (state, action: { payload: { key: UtilsKeyType; value: boolean } }) => {
      const { key, value } = action.payload;
      state.isOpenSlide = false;
      state.isOpenAnswers = false;
      state.isOpenDocuments = false;

      switch (key) {
        case "answers": // ユーザーの回答
          state.isOpenAnswers = value;
          break;
        case "documents": // 資料
          state.isOpenDocuments = value;
          break;
        case "results": // リザルト画面
          state.isOpenResults = value;
          break;
        case "slide": // スライド
          state.isOpenSlide = value;
          break;
        case "screenForAnswers": // 回答用画面
          state.isOpenScreenForAnswers = value;
          break;
      }
    },

    // 次のシーンへの進行を許可するか
    setAllowProgressSceneAction: (state) => {
      // アクションが設定されていなければ許可
      if (!state.scene.action?.type) state.allowProgressScene = true;
      // 最後のシーンは不許可
      if (state.isLastScene) state.allowProgressScene = false;
    },

    // 初期化
    initializeSceneAction: () => {
      return { ...initialState };
    },
  },
});

export default inductionSlice.reducer;
export const inductionSelector = (state: RootState) => state.induction;
export const {
  allowStartingExerciseAction,
  setNextStaticSceneAction,
  setNextDynamicSceneAction,
  setAllowProgressSceneAction,
  getInfoPhaseOptionsAction,
  showUtilsAction,
  initializeSceneAction,
} = inductionSlice.actions;
