import React, { useCallback, useEffect, useState } from "react";
import { Grid, Box } from "@mui/material";
import { BackgroundImage } from "../../assets/images/background";
import { Balloon, MuiButton } from "../atoms";
import { TooltipBar } from "./index";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { currentSceneSelector, setNextSceneAction, setSceneAction } from "../../lib/redux/features/chapterSlice";
import { useFetchChapter } from "../../hooks/useFetchChapter";

const styles = {
  character: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  container: {
    position: "relative",
    height: "calc(100vh - 60px)",
    background: `url(${BackgroundImage.dayoffice}) no-repeat center`,
    backgroundSize: "cover",
  },
};

type Props = {
  setClose: (close: boolean) => void;
};

const Scene: React.FC<Props> = React.memo((props) => {
  const { handleFetchChapter } = useFetchChapter();
  // スライドリストの表示フラグ
  const { setClose } = props;

  const dispatch = useAppDispatch();
  // 現在のシーンの状態をstoreから取得
  const currentScene = useAppSelector(currentSceneSelector);
  const order = currentScene.order;
  const word = currentScene.word;
  const options = currentScene.options;
  const characterImage = currentScene.characterImage;

  // 吹き出しの表示・非表示のフラグを管理
  const [balloon, setBalloon] = useState(true);

  // 次のシーンに切り替える処理
  const handleClickNextScene = useCallback(
    (nextSceneId: string) => {
      // 選択肢がクリックされたら吹き出しを非表示にする
      setBalloon(false);
      // 表示するシーンを変更する
      dispatch(setNextSceneAction(nextSceneId));
    },
    [dispatch]
  );

  // シーン切り替え時に発火させる
  useEffect(() => {
    // シーンの切り替えをstoreに伝える
    dispatch(setSceneAction(order));
    // 吹き出しを表示
    setBalloon(true);
  }, [dispatch, order]);

  // 初期値をセット
  useEffect(() => {
    handleFetchChapter(1);
  }, [handleFetchChapter]);

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container sx={styles.container}>
        <Grid item xs={3} sx={{ position: "relative" }}>
          <TooltipBar setClose={setClose} />
        </Grid>
        <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              bottom: "32px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {options.map((option) => (
              <div key={option.id} className={balloon ? "slide_in" : ""}>
                <Box sx={{ mb: "8px" }}>
                  <MuiButton variant="contained" fullWidth onClick={() => handleClickNextScene(option.nextSceneId)}>
                    {option.text}
                  </MuiButton>
                </Box>
              </div>
            ))}
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ position: "relative", zIndex: 10 }}>
          <Box sx={{ position: "absolute", left: "-50%", padding: "16px 16px 0 0" }}>
            <Balloon className={balloon ? "fade_in" : ""} background="#fff">
              {word.text}
            </Balloon>
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.character}>
        {characterImage && (
          <img
            // className="character-move-normal"
            src={require(`../../assets/images/characters/guide/${characterImage}`)}
            alt="character"
          />
        )}
      </Box>
    </Box>
  );
});

export default Scene;
