import client from "./client";

// チャプターの情報を取得
export const fetchChapter = (chapter: number) => {
  return client.get(process.env.REACT_APP_CHAPTER_URL! + "/" + chapter);
};
