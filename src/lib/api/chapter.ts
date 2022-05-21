import client from "./client";

// チャプター1の情報を取得
export const fetchChapter = () => {
  return client.get(process.env.REACT_APP_CHAPTER1_URL!);
};
