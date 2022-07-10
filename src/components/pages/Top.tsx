import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { LinkTo, MuiButton } from "../atoms";
import { CourseCard, IconWithPageTitle } from "../molecules";
import LogicalThinking from "../../assets/images/illustrations/logicalthinking.svg";
import Comunicate from "../../assets/images/illustrations/comunicate.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import Deductive from "../../assets/images/illustrations/deductive.svg";
import SlideCapture from "../../assets/images/background/slide_capture.png";

const Top: React.FC = () => {
  return (
    <>
      <Box bgcolor="#e0f2f1">
        <Box
          component="div"
          position="relative"
          sx={{
            bgcolor: "#fff",
            clipPath: "polygon(0 0, 50% 0%, 100% 20%, 100% 100%, 50% 100%, 0% 80%)",
          }}
        >
          <Box width="1200px" height="calc(100vh - 64px)" m="0 auto" display="flex" alignItems="center">
            <Grid container height="100%">
              <Grid item xs={6} display="flex" alignItems="center" justifyContent="center">
                <div>
                  <Box component="div" mb="32px">
                    <Box
                      component="span"
                      color="primary.main"
                      border="1px solid #00aa99"
                      borderRadius="4px"
                      p="4px 12px"
                    >
                      ロジカルシンキングが学べるアプリ
                    </Box>
                  </Box>
                  <Typography component="div" variant="h4" mb="24px" textAlign="center" letterSpacing={1.5}>
                    <Typography component="span" variant="h3" fontWeight={600} mr="4px">
                      説明上手
                    </Typography>
                    になりたい。
                  </Typography>
                  <Typography component="div" variant="h4" mb="24px" textAlign="center" letterSpacing={1.5}>
                    <Typography component="span" variant="h3" fontWeight={600} mr="4px">
                      問題解決力
                    </Typography>
                    を身につけたい。
                  </Typography>
                  <Typography component="div" variant="h4" mb="64px" textAlign="center" letterSpacing={1.5}>
                    そのための
                    <Typography component="span" variant="h3" fontWeight={600} ml="4px">
                      COMPASS
                    </Typography>
                  </Typography>
                  <Box textAlign="center">
                    <LinkTo to="/signup">
                      <MuiButton variant="contained">
                        <Box display="flex" alignItems="center">
                          <Typography variant="h6" component="span">
                            さっそく始める
                          </Typography>
                          <ArrowCircleRightIcon sx={{ fontSize: "24px", ml: "4px" }} />
                        </Box>
                      </MuiButton>
                    </LinkTo>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={6} height="100%">
                <Box component="img" alt="image" src={LogicalThinking} height="100%" width="100%" />
              </Grid>
            </Grid>
          </Box>
          <Box
            className="up-down_align-center"
            position="absolute"
            bottom="0"
            left="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ transform: "translateX(-50%)" }}
          >
            <KeyboardDoubleArrowDownIcon sx={{ fontSize: "80px" }} />
          </Box>
        </Box>
      </Box>
      <Box component="div" bgcolor="primary.dark" color="#fff" textAlign="center" p="64px 0" mb="64px">
        <Typography variant="h5" fontWeight={600} letterSpacing={1.5}>
          COMPASSでロジカルシンキングを身につけよう
        </Typography>
      </Box>
      <Box component="section" p="64px 0" mb="64px">
        <Box width="1200px" m="0 auto">
          <IconWithPageTitle title="基本から応用まで" icon={MenuBookIcon} iconColor="primary" />
          <Grid container>
            <Grid item xs={3.5}>
              <CourseCard
                grade="基本編"
                color="primary"
                title="帰納法"
                text={<>複数の情報から共通点を探し出し結論を導き出します</>}
                image={Inductive}
                titleUnderLineColor="#83c3f7"
              />
            </Grid>
            <Grid item xs={0.75} display="flex" alignItems="center" justifyContent="center">
              <ArrowRightIcon sx={{ fontSize: "100px", color: "#666" }} />
            </Grid>
            <Grid item xs={3.5}>
              <CourseCard
                image={Deductive}
                grade="基本編"
                title="演繹法"
                titleUnderLineColor="#c2647c"
                text={
                  <>
                    ※実装予定
                    <br />
                    既に知っている情報と自分の考えを組み合わせて結論を導き出します
                  </>
                }
                color="primary"
              />
            </Grid>
            <Grid item xs={0.75} display="flex" alignItems="center" justifyContent="center">
              <ArrowRightIcon sx={{ fontSize: "100px", color: "#666" }} />
            </Grid>
            <Grid item xs={3.5}>
              <CourseCard
                grade="応用編"
                color="info"
                title="伝わる話の組み立て方"
                titleUnderLineColor="#fbd081"
                text={
                  <>
                    ※実装予定
                    <br />
                    相手に納得してもらえるわかりやすい説明ができるようになります
                  </>
                }
                image={Comunicate}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box component="section" p="64px 0">
        <IconWithPageTitle title="スライドで学び、演習で試す" icon={MenuBookIcon} iconColor="primary" />
        <Box width="1200px" m="0 auto">
          <Box component="img" alt="slide-capture" src={SlideCapture} width="100%" />
          {/* <Grid container>
            <Grid item xs={6} bgcolor="lightgreen"></Grid>
            <Grid item xs={6} bgcolor="pink" display="flex" alignItems="center" justifyContent="center">
              スライドで知識をインプット
            </Grid>
            <Grid item xs={6} display="flex" alignItems="center" justifyContent="center" bgcolor="skyblue">
              インプットした知識をシミュレーションで試す
            </Grid>
            <Grid item xs={6} bgcolor="tomato"></Grid>
          </Grid> */}
        </Box>
      </Box>
    </>
  );
};

export default Top;
