import React, { useState, useEffect } from "react";
import { Grid, Box, IconButton, Tooltip, Divider } from "@mui/material";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BorderColorIcon from "@mui/icons-material/BorderColor";
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
  },
  utilButtonBox: {
    position: "absolute",
    left: "8px",
    bottom: "8px",
    display: "flex",
    bgcolor: "rgba(255,255,255,0.3)",
    backdropFilter: "blur(10px)",
    padding: "12px",
    borderRadius: "12px",
  },
  utilButton: {},
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
        <Grid item xs={3} sx={{ position: "relative" }}>
          <Box sx={styles.utilButtonBox}>
            <Tooltip title="スライドを確認する">
              <IconButton
                sx={{
                  bgcolor: "info.dark",
                  color: "#fff",
                  borderRadius: "8px",
                  mr: "16px",
                  "&:hover": { bgcolor: "info.dark", transform: "scale(1.1)" },
                }}
                onClick={() => setOpen(true)}
              >
                <AutoAwesomeMotionIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="メモを書く">
              <IconButton
                sx={{
                  bgcolor: "warning.dark",
                  color: "#fff",
                  borderRadius: "8px",
                  transition: "0.1s",
                  "&:hover": { bgcolor: "warning.dark", transform: "scale(1.1)" },
                }}
                onClick={() => setOpen(true)}
              >
                <BorderColorIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
          <Box sx={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", width: "80%" }}>
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
        <img className="character-move-normal" src={CharacterGuideImages.normal} alt="character" />
      </Box>
    </>
  );
});

export default StoryOperationScreen;
