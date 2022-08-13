import { FC } from "react";
// Modules
import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import LanguageIcon from "@mui/icons-material/Language";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import ExploreSharpIcon from "@mui/icons-material/ExploreSharp";
// Components
import { LinkTo, PrimaryButton } from "../atoms";
import { CourseCardList, FeaturesViewList } from "../molecules";
// Images
import LogicalThinking from "../../assets/images/illustrations/logicalthinking.svg";
import { BackgroundImage } from "../../assets/images/background";

const slideImages = [BackgroundImage.topSlide1, BackgroundImage.topSlide2];
const exerciseImages = [BackgroundImage.topExercise1, BackgroundImage.topExercise2];

const Top: FC = () => {
  return (
    <>
      <Box bgcolor="primary.main">
        <FirstViewBox>
          <Box width="1200px" height="calc(100vh - 64px)" m="0 auto" display="flex" alignItems="center">
            <Grid container height="100%">
              <Grid
                item
                xs={6}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ animationDelay: "0.3s" }}
              >
                <Box textAlign="center">
                  <Box component="div" mb="32px">
                    <Box
                      className="path-left"
                      component="span"
                      color="primary.main"
                      border="1px solid"
                      borderColor="primary.main"
                      borderRadius="4px"
                      p="4px 12px"
                      sx={{ animationDelay: "0.3s" }}
                    >
                      ロジカルシンキングが学べるサービス
                    </Box>
                  </Box>
                  <Typography
                    className="path-left"
                    component="div"
                    variant="h4"
                    mb="24px"
                    letterSpacing={1.5}
                    sx={{ animationDelay: "1.2s" }}
                  >
                    <Typography component="span" variant="h3" fontWeight={600} mr="4px">
                      説明上手
                    </Typography>
                    になりたい。
                  </Typography>
                  <Typography
                    className="path-left"
                    component="div"
                    variant="h4"
                    mb="24px"
                    letterSpacing={1.5}
                    sx={{ animationDelay: "1.2s" }}
                  >
                    <Typography component="span" variant="h3" fontWeight={600} mr="4px">
                      問題解決力
                    </Typography>
                    を身につけたい。
                  </Typography>
                  <Typography
                    className="path-left"
                    component="div"
                    variant="h4"
                    mb="64px"
                    letterSpacing={1.5}
                    sx={{ animationDelay: "1.2s" }}
                  >
                    そのための
                    <Typography component="span" variant="h3" fontWeight={600} ml="4px">
                      COMPASS
                    </Typography>
                  </Typography>
                  <Box className="path-left" sx={{ animationDelay: "1.2s" }}>
                    <LinkTo to="/signup">
                      <PrimaryButton variant="contained">
                        <Box display="flex" alignItems="center">
                          <Typography variant="h6" component="span">
                            さっそく始める
                          </Typography>
                          <ArrowCircleRightIcon sx={{ fontSize: "24px", ml: "4px" }} />
                        </Box>
                      </PrimaryButton>
                    </LinkTo>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} height="100%">
                <Box component="img" alt="image" src={LogicalThinking} height="100%" width="100%" />
              </Grid>
            </Grid>
          </Box>
        </FirstViewBox>
        <Box position="absolute" bottom="16px" left="50%" sx={{ transform: "translateX(-50%)" }}>
          <KeyboardDoubleArrowDownIcon className="up-down" sx={{ fontSize: "80px" }} />
        </Box>
      </Box>

      <SectionDividerTextInBox>
        <Typography variant="h3">コース紹介</Typography>
        <ExploreSharpIcon sx={{ fontSize: "48px", ml: "8px" }} />
      </SectionDividerTextInBox>

      <Box bgcolor="primary.main">
        <SectionBox>
          <Box width="1200px" m="0 auto">
            <Typography variant="h4" fontWeight={600} sx={styles.sectionTitle}>
              ＃基本コースから応用コースまで
            </Typography>
            <CourseCardList />
          </Box>
        </SectionBox>
      </Box>

      <SectionDividerTextInBox>
        <Typography variant="h3">学習方法</Typography>
        <ExploreSharpIcon sx={{ fontSize: "48px", ml: "8px" }} />
      </SectionDividerTextInBox>

      <Box bgcolor="primary.main">
        <SectionBox>
          <Box width="1280px" m="0 auto">
            <Typography variant="h4" fontWeight={600} sx={styles.sectionTitle}>
              ＃スライドで知識を学び、演習で試す
            </Typography>
            <Box bgcolor="secondaryBackgroundColor.lightGray" p="32px">
              <Typography
                variant="h5"
                fontWeight={600}
                mb="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <LooksOneIcon sx={{ fontSize: "48px", mr: "4px", color: "info.main" }} />
                知識をコンパクトにまとめたスライド
              </Typography>
              <FeaturesViewList images={slideImages} />
            </Box>
            <Box textAlign="center" m="32px 0">
              <ArrowDropDownIcon className="up-down" sx={{ fontSize: "128px" }} />
            </Box>
            <Box bgcolor="secondaryBackgroundColor.lightGray" p="32px">
              <Typography
                variant="h5"
                fontWeight={600}
                mb="16px"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <LooksTwoIcon sx={{ fontSize: "48px", mr: "4px", color: "info.main" }} />
                学んだ知識をシミュレーションゲーム感覚で試せる演習
              </Typography>
              <FeaturesViewList images={exerciseImages} />
            </Box>
          </Box>
        </SectionBox>
      </Box>

      <SectionDividerTextInBox>
        <Box textAlign="center" p="32px">
          <Typography variant="h4" letterSpacing={1.5} mb="32px">
            まだエンジンのかかっていない脳に活を入れよう
          </Typography>
          <LinkTo to="/signup">
            <PrimaryButton variant="contained" color="info">
              <Typography variant="h6" fontWeight={300} display="flex" alignItems="center">
                無料でユーザー登録
                <LanguageIcon sx={{ fontSize: "22px", ml: "4px" }} />
              </Typography>
            </PrimaryButton>
          </LinkTo>
        </Box>
      </SectionDividerTextInBox>
    </>
  );
};

export default Top;

// Material-UI
const styles = {
  sectionTitle: {
    color: "primary.main",
    mb: "64px",
    textAlign: "center",
  },
};

const FirstViewBox = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.background.default};
  clip-path: polygon(0 20px, 100% 80px, 100% calc(100% - 20px), 0% calc(100% - 80px));
`;

const SectionDividerTextInBox = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.typography.white};
  padding: 32px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionBox = styled.div`
  background: ${(props) => props.theme.palette.background.default};
  position: relative;
  padding: 160px 0 240px;
  clip-path: polygon(0 20px, 100% 80px, 100% calc(100% - 20px), 0% calc(100% - 80px));
`;
