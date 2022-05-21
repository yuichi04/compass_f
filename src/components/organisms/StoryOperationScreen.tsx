import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { BackgroundImage } from "../../assets/images/background";
import { CharacterGuideImages } from "../../assets/images/character/guide";
import { MuiButton, Balloon } from "../atoms";

const styles = {
  character: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  container: {
    height: "calc(100vh - 60px)",
    background: `url(${BackgroundImage.dayoffice}) no-repeat center`,
    backgroundSize: "cover",
    padding: "8px;",
  },
};

type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const wordList = ["ふふ、そうですね。", "あれ、そうでしたか？", "ごめんなさい。最近物忘れがひどくて・・・。"];

const StoryOperationScreen: React.FC<Props> = React.memo((props) => {
  const { setOpen } = props;
  // test
  const [word, setWord] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (word) {
      const rand = wordList[Math.floor(Math.random() * wordList.length)];
      setText(rand);
    }
  }, [word]);

  return (
    <>
      <Grid container sx={styles.container}>
        <Grid item xs={3}>
          <Box sx={{ bgcolor: "#fff", width: "250px", height: "50%", boxShadow: "1px 3px 6px #bbb" }}>
            <MuiButton color="warning" variant="contained" onClick={() => setOpen(true)}>
              スライドを確認
            </MuiButton>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
          <Box sx={{ position: "absolute", bottom: "32px", width: "100%" }}>
            <MuiButton variant="contained" fullWidth>
              初めまして
            </MuiButton>
            <div className="module-spacer-sm" />
            <MuiButton variant="contained" fullWidth>
              うせろ
            </MuiButton>
            <div className="module-spacer-sm" />
            <MuiButton variant="contained" fullWidth onClick={() => setWord(!word)}>
              昨日会ったじゃん
            </MuiButton>
          </Box>
        </Grid>
        <Grid item xs={3} sx={{ position: "relative", zIndex: 10 }}>
          <Box sx={{ position: "absolute", left: "-50%", padding: "16px 16px 0 0" }}>
            {text && (
              <Balloon className={word ? "fade_in" : "fade_out"} background="#fff">
                {text}
              </Balloon>
            )}
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.character}>
        <SCharacter src={CharacterGuideImages.normal} alt="character" />
      </Box>
    </>
  );
});

export default StoryOperationScreen;

const move = keyframes`
  50% {
    transform: rotateZ(-1deg) translate(1px) scale(1.02)
  }
`;

const SCharacter = styled.img`
  // animation-name: ${move};
  animation-duration: 6s;
  animation-iteration-count: infinite;
`;
