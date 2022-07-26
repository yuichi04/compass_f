import { createSlice } from "@reduxjs/toolkit";
import { LessonType, UtilsKeyType } from "../../../types/lessonType";
import { staticSceneData } from "../../../dataset/induction";
import { RootState } from "../store";
import optionsData from "../../../dataset/induction/optionsData";

const initialState: LessonType = {
  sectionId: 0, // 現在のセクションを判別
  sceneId: 0, // 現在のシーンを判別
  allowStartingExercise: false, // 演習の開始を許可するか
  allowProgressScene: false, // シーンの進行を許可するか
  characterInfo: { src: "", role: "" }, // キャラクター情報の変更を管理
  displaySpeedOfLines: 0.02, // セリフ1文字あたりの表示速度
  isLastScene: false, // 最後のシーンかどうか
  isOpenSlide: true, // スライドの表示・非表示
  isOpenResults: false, // 演習結果の表示・非表示
  options: [], // 現在のセクションの選択可能な情報
  // シーン本体
  scene: {
    section: 0,
    action: { type: "", label: "" },
    character: { src: "", role: "" },
    isOpenAnswers: false,
    isOpenDocuments: false,
    lines: [],
    phase: "",
  },
  // 結果表示用にユーザーの回答を格納
  userAnswers: {
    common: "",
    conclusion: "",
    info: [],
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

    // 静的シーンの更新処理
    setNextStaticSceneAction: (state, action: { payload: number }) => {
      // 初期化
      state.allowProgressScene = false;
      // 次のシーンのidに更新
      state.sceneId = action.payload + 1;
      // idと一致するデータを取得
      const newSceneData = staticSceneData.find((item, index) => index + 1 === state.sceneId);

      if (newSceneData) {
        // セクションIDを更新
        state.sectionId = newSceneData.section;
        // 取得したデータでシーンを更新
        state.scene = newSceneData;
        // キャラクター情報を持っている場合は更新
        if (newSceneData.character) state.characterInfo = newSceneData.character;
      }
      // 最後のシーンかどうか
      if (state.sceneId === staticSceneData.length) state.isLastScene = true;
    },

    // 動的シーンの生成と更新処理
    setNextDynamicSceneAction: (state, action: { payload: string }) => {
      // アクションボックスを非表示
      state.scene.action = { type: "", label: "" };
      // フェーズに対応したセリフを生成
      switch (state.scene.phase) {
        case "common":
          state.scene.phase = "";
          state.scene.lines = [`（共通点は「${action.payload}」かな。）`];
          // ユーザーが入力した共通点を保存
          state.userAnswers.common = action.payload;
          break;
        case "conclusion":
          state.scene.phase = "";
          state.scene.lines = [`（結論は「${action.payload}」だ。）`];
          // ユーザーが入力した結論を保存
          state.userAnswers.conclusion = action.payload;
          break;
      }
    },

    // 各UIの表示・非表示を処理
    showUtilsAction: (state, action: { payload: { key: UtilsKeyType; value: boolean } }) => {
      const { key, value } = action.payload;
      state.isOpenSlide = false;
      state.scene.isOpenAnswers = false;
      state.scene.isOpenDocuments = false;

      switch (key) {
        case "answers": // ユーザーの回答
          state.scene.isOpenAnswers = value;
          break;
        case "documents": // 資料
          state.scene.isOpenDocuments = value;
          break;
        case "results": // リザルト画面
          state.isOpenResults = value;
          break;
        case "slide": // スライド
          state.isOpenSlide = value;
          break;
      }
    },

    // 次のシーンへの進行を許可するか
    setAllowProgressScene: (state) => {
      // アクションが設定されていなければ許可
      if (!state.scene.action?.type) state.allowProgressScene = true;
      // 最後のシーンは不許可
      if (state.isLastScene) state.allowProgressScene = false;
    },

    // フェーズがinfoなら、セクションに応じた情報を取得
    getInfoPhaseOptions: (state) => {
      if (state.scene.phase === "info") {
        const newOptions = optionsData.filter((option) => option.section === state.sectionId);
        state.options = newOptions;
      }
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
  setAllowProgressScene,
  getInfoPhaseOptions,
  showUtilsAction,
  initializeSceneAction,
} = inductionSlice.actions;

/**
 * 0.選択肢を作る（id, category, text)
 * 1.3つ以上選択しているかチェック
 * 2.3つ以上選択していたらボタンのクリックを許可する
 * 3-a.情報に偏りがある場合はエラーを表示して、再度選んでもらう
 * 3-b.問題なければ選択した情報をstoreに保存する
 * 4.共通点を見つけるステップで表示
 */
