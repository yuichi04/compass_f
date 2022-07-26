import { FC, memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { TextAnimation } from "..";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector, setAllowProgressScene } from "../../../lib/redux/features/inductionSlice";
import { userSelector } from "../../../lib/redux/features/userSlice";

const InductionCharacterBalloon: FC = memo(() => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);
  const username = user.name;
  const induction = useAppSelector(inductionSelector);
  const role = induction.characterInfo.role;
  const lines = induction.scene.lines;
  const linesLength = lines.join("").length;
  const displaySpeed = induction.displaySpeedOfLines;
  const allowProgress = induction.allowProgressScene;

  // 全てのセリフが表示されたら、次のシーンへの進行を許可する
  useEffect(() => {
    // シーン進行を許可する処理
    const allowProgress = () => dispatch(setAllowProgressScene());
    // 全てのセリフが表示されるまでの時間を計算し、その時間+0.25秒が経過したら次のシーンに進められるようにする。
    setTimeout(allowProgress, linesLength * displaySpeed * 1000 + 250);
  }, [dispatch, linesLength, displaySpeed]);

  return (
    <Box
      position="absolute"
      bottom="0"
      width="100vw"
      height="200px"
      borderTop="double 5px rgba(255,255,255,0.2)"
      sx={{
        background:
          "radial-gradient(circle, rgba(55, 55, 55, 0.8) 75%, rgba(159, 159, 159, 0.45) 90%, rgba(255, 255, 255, 0.3))",
        cursor: "default",
      }}
    >
      <Box position="relative" width="900px" height="100%" m="0 auto" color="#fff" display="flex" alignItems="center">
        {/* キャラクター名 */}
        <Box
          zIndex={998}
          position="absolute"
          top="-32px"
          left="0"
          bgcolor={
            role === "user"
              ? "rgba(255,167, 38, 0.8)"
              : role === "guide"
              ? "rgba(0, 170,153, 0.8)"
              : "rgba(66,165,245, 0.8)"
          }
          border="double 4px rgba(255,255,255,0.2)"
          minWidth="160px"
          display="flex"
          alignItems="center"
          p="0 12px"
          sx={{
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "16px",
          }}
        >
          <Typography variant="h6" component="h6" fontFamily={"'Noto Sans JP', sans-serif"}>
            {role === "guide" ? (
              <>亀井</>
            ) : role === "boy" ? (
              <>少年</>
            ) : role === "call" ? (
              <>コール音</>
            ) : (
              <>{username}</>
            )}
          </Typography>
        </Box>

        {/* セリフ */}
        <Box height="100%" width="100%" p="16px">
          <Typography
            variant="h6"
            component="div"
            color="#ececec"
            letterSpacing={1.5}
            fontFamily={"'Noto Sans JP', sans-serif"}
            sx={{ textShadow: "0 0 4px #333" }}
          >
            {lines.map((line, index) => (
              <Box component="div" key={index} id={"theme" + index}>
                <TextAnimation
                  section={"theme" + index}
                  duration={displaySpeed}
                  // 1行ごとに表示されるように遅延させる
                  delay={lines.slice(0, index).join("").length * displaySpeed + 0.1}
                >
                  {line}
                </TextAnimation>
              </Box>
            ))}
          </Typography>
          {allowProgress && (
            <Box className="up-down" display="flex" alignItems="flex-end" justifyContent="flex-end">
              <Typography className="fade-in" variant="h6" color="#f9fbe7" fontFamily={"'Noto Sans JP', sans-serif"}>
                次へ
              </Typography>
              <ArrowRightIcon sx={{ color: "#ffe0b2" }} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
});

export default InductionCharacterBalloon;
