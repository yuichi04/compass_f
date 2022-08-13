import { FC, memo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { FadeInOutBox, TextAnimation } from "../../molecules";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { inductionSelector, setNextStaticSceneAction } from "../../../redux/features/inductionSlice";
import { userSelector } from "../../../redux/features/userSlice";
import {
  allowProgressSceneAction,
  forbidProgressSceneAction,
  lessonSelector,
  toggleShowAndHideInterfaceAction,
} from "../../../redux/features/lessonSlice";

const InductionCharacterBalloon: FC = memo(() => {
  const dispatch = useAppDispatch();
  // user selector
  const user = useAppSelector(userSelector);
  const username = user.name;
  // induction selector
  const induction = useAppSelector(inductionSelector);
  const sceneId = induction.sceneId;
  const options = induction.scene.options;
  const role = induction.characterInfo.role;
  const lines = induction.scene.lines;
  const isNarration = induction.scene.narration;
  // lesson selector
  const lesson = useAppSelector(lessonSelector);
  const isOpen = lesson.isOpen;
  const displaySpeedOfLines = lesson.displaySpeedOfLines;
  const allowProgressScene = lesson.allowProgressScene;

  // 全てのセリフが表示されたら、次のシーンへの進行を許可する
  useEffect(() => {
    // セリフが表示されるまで一時的に次のシーンへの進行を禁止する
    dispatch(forbidProgressSceneAction());
    // 選択肢が存在するシーンの場合は次のシーンへの進行を禁止する
    if (options) return;

    // シーンの進行処理
    // セリフの文字数を取得
    const linesLength = lines.join("").length;
    // 全てのセリフが表示されるまでの時間を計算し、その時間+0.25秒が経過したら次のシーンに進められるようにする。
    const timer = setTimeout(
      () => dispatch(allowProgressSceneAction()),
      linesLength * displaySpeedOfLines * 1000 + 250
    );
    return () => clearTimeout(timer);
  }, [dispatch, lines, displaySpeedOfLines, options]);

  // 次のシーンへの進行処理
  const handleClickNextScene = () => {
    // 進行が許可されていない場合は処理を停止する
    if (!allowProgressScene) return;
    if (isNarration) {
      dispatch(toggleShowAndHideInterfaceAction({ key: "narration", open: !isOpen.narration }));
    } else {
      dispatch(setNextStaticSceneAction(sceneId));
    }
  };

  return (
    <Box
      position="absolute"
      bottom="0"
      width="100vw"
      height="200px"
      borderTop="double 5px rgba(255,255,255,0.2)"
      onClick={handleClickNextScene}
      sx={{
        background:
          "radial-gradient(circle, rgba(55, 55, 55, 0.8) 75%, rgba(159, 159, 159, 0.45) 90%, rgba(255, 255, 255, 0.3))",
        cursor: options ? "default" : "pointer",
      }}
    >
      <Box position="relative" width="900px" height="100%" m="0 auto" color="#fff" display="flex" alignItems="center">
        {/* キャラクター名 */}
        <Box
          zIndex={997}
          position="absolute"
          top="-32px"
          left="0"
          bgcolor={role === "user" ? "logoColor.main" : role === "guide" ? "success.main" : "warning.main"}
          border="double 4px rgba(255,255,255,0.3)"
          minWidth="160px"
          display="flex"
          alignItems="center"
          p="0 12px"
          sx={{
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "8px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "16px",
            textShadow: "0 1px 4px #999",
          }}
        >
          <Typography variant="h6" component="h6" fontFamily={"'Noto Sans JP', sans-serif"}>
            {role === "guide" ? (
              <>亀井</>
            ) : role === "youngerBoy" ? (
              <>少年</>
            ) : role === "youngBoy" ? (
              <>青年</>
            ) : role === "call" ? (
              <>コール音</>
            ) : (
              <>{username}</>
            )}
          </Typography>
        </Box>

        {/* セリフ */}
        <Box position="relative" height="100%" width="100%" p="24px 16px 16px">
          <Typography variant="h6" component="div" color="#fff" sx={{ textShadow: "0 0 4px #333" }}>
            {lines.map((line, index) => (
              <Box component="div" key={index} id={"theme" + index}>
                <TextAnimation
                  section={"theme" + index}
                  duration={displaySpeedOfLines}
                  // 1行表示されてから次の行が表示されるように遅延させる
                  delay={lines.slice(0, index).join("").length * displaySpeedOfLines + 0.1}
                  text={line}
                />
              </Box>
            ))}
          </Typography>
          {allowProgressScene && (
            <Box position="absolute" bottom="16px" right="0" className="up-down">
              <FadeInOutBox fadeIn display="flex" alignItems="flex-end">
                <Typography
                  variant="h6"
                  color="#fff"
                  fontFamily={"'Noto Sans JP', sans-serif"}
                  sx={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                >
                  次へ
                </Typography>
                <ArrowRightIcon sx={{ color: "typography.white", fontSize: "30px" }} />
              </FadeInOutBox>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
});

export default InductionCharacterBalloon;
