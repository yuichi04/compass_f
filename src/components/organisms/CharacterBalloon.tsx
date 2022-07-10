import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TextAnimation } from "../organisms";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks";
import { chapter1Selector, setAllowProgress } from "../../lib/redux/features/chapter1Slice";

type Props = {
  role: string;
  username: string;
};

const CharacterBalloon: React.FC<Props> = (props) => {
  const { role, username } = props;
  const dispatch = useAppDispatch();
  const chapter1 = useAppSelector(chapter1Selector);
  const progress = chapter1.allowProgress;
  const lines = chapter1.characterLines;
  const delay = chapter1.lineDelayTime;
  const linesLength = lines.join("").length;

  // 全てのセリフが表示されたら、次のシーンへの進行を許可する
  useEffect(() => {
    const allowProgress = () => dispatch(setAllowProgress(true));
    setTimeout(allowProgress, linesLength * delay * 1000);
  }, [dispatch, linesLength, delay]);

  return (
    <Box
      position="absolute"
      bottom="0"
      width="100vw"
      height="200px"
      borderTop="double 5px rgba(255,255,255,0.2)"
      sx={{
        backgroundImage:
          "radial-gradient(circle, rgba(33, 33, 33, 0.8) 75%, rgba(159, 159, 159, 0.45) 90%, rgba(255, 255, 255, 0.3))",
      }}
    >
      <Box position="relative" width="900px" height="100%" m="0 auto" color="#fff" display="flex" alignItems="center">
        {/* ネーム表示 */}
        <Box
          position="absolute"
          top="-48px"
          left="0"
          bgcolor="rgba(66,66,66,0.8)"
          border="double 4px rgba(255,255,255,0.2)"
          borderRadius="8px"
          minWidth="160px"
          display="flex"
          alignItems="center"
          p="0 12px"
        >
          <Typography variant="h6" component="h6" fontFamily={"'Noto Sans JP', sans-serif"}>
            {role === "guide" ? (
              <>亀井</>
            ) : role === "customer" ? (
              <>コール音</>
            ) : role === "boy" ? (
              <>少年</>
            ) : (
              <>{username}</>
            )}
          </Typography>
        </Box>

        {/* セリフ表示 */}
        <Grid container height="100%" p="16px 0" overflow="scroll">
          <Grid item xs={11}>
            <Typography variant="h6" component="div" letterSpacing={1.5} fontFamily={"'Noto Sans JP', sans-serif"}>
              {lines.map((line, index) => (
                <Box component="div" key={index} id={"theme" + index}>
                  <TextAnimation
                    section={"theme" + index}
                    duration={delay}
                    // （自分より前の要素の文字数の合計 * 0.02）秒表示を遅延させる
                    delay={lines.slice(0, index).join("").length * delay}
                  >
                    {line}
                  </TextAnimation>
                </Box>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={1} display="flex" alignItems="flex-end">
            {progress && (
              <Box className="up-down" display="flex" alignItems="center">
                <Typography className="fade_in" variant="h6" color="#fff" fontFamily={"'Noto Sans JP', sans-serif"}>
                  次へ
                </Typography>
                <ArrowRightIcon sx={{ color: "#fff" }} />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CharacterBalloon;
