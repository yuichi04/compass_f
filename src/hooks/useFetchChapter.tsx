import { useCallback } from "react";
import { fetchChapter } from "../lib/api/chapterApi";
import { setChapterAction, setSceneAction } from "../lib/redux/features/chapterSlice";
import { useAppDispatch } from "../lib/redux/hooks";
import { hideLoadingAction, showLoadingAction } from "../lib/redux/features/lodingSlice";

export const useFetchChapter = () => {
  const dispatch = useAppDispatch();

  const handleFetchChapter = useCallback(
    async (chapter: number) => {
      dispatch(showLoadingAction("Loading..."));
      try {
        const res = await fetchChapter(chapter);
        if (res.data.status === 200) {
          const chapter = res.data.chapter;
          const scenes = chapter.scenes;
          const words = chapter.words;
          const options = chapter.options;
          const newChapter = {
            id: chapter.chapter.id,
            scenes,
            words,
            options,
          };
          // チャプターのデータを全て取得
          dispatch(setChapterAction(newChapter));
          // 初期シーンをセット
          dispatch(setSceneAction(1));
        } else {
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
      dispatch(hideLoadingAction());
    },
    [dispatch]
  );

  return {
    handleFetchChapter,
  };
};
