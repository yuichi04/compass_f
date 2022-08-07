import React from "react";
import styled from "styled-components";
import { Box, Grid, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LanguageIcon from "@mui/icons-material/Language";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { LinkTo, PrimaryButton } from "../atoms";
import { CourseCardList, FeaturesViewList, IconWithPageTitle } from "../molecules";
import LogicalThinking from "../../assets/images/illustrations/logicalthinking.svg";
import { BackgroundImage } from "../../assets/images/background";

const slideImages = [BackgroundImage.topSlide1, BackgroundImage.topSlide2];
const exerciseImages = [BackgroundImage.topExercise1, BackgroundImage.topExercise2];

const Top: React.FC = () => {
  return (
    <>
      <Box bgcolor="primary.main">
        <FirstViewBox>
          <Box width="1200px" height="calc(100vh - 64px)" m="0 auto" display="flex" alignItems="center">
            <Grid container height="100%">
              <Grid item xs={6} display="flex" alignItems="center" justifyContent="center">
                <div>
                  <Box component="div" mb="32px">
                    <Box
                      component="span"
                      color="primary.main"
                      border="1px solid"
                      borderColor="primary.main"
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
                </div>
              </Grid>
              <Grid item xs={6} height="100%">
                <Box component="img" alt="image" src={LogicalThinking} height="100%" width="100%" />
              </Grid>
            </Grid>
          </Box>
          <Box position="absolute" bottom="0" left="50%" sx={{ transform: "translateX(-50%)" }}>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ fontSize: "80px" }} />
          </Box>
        </FirstViewBox>
      </Box>

      <SectionDividerTextInBox>
        <Typography variant="h5" fontWeight={600} letterSpacing={1.5}>
          COMPASSでロジカルシンキングを身につけよう
        </Typography>
      </SectionDividerTextInBox>

      <Box bgcolor="primary.main">
        <SectionBoxInner>
          <Box width="1200px" m="0 auto">
            <IconWithPageTitle title="基本から応用まで" icon={MenuBookIcon} iconColor="primary" mb="64" />
            <CourseCardList />
          </Box>
          <Box position="absolute" bottom="0" left="50%" sx={{ transform: "translateX(-50%)" }}>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ fontSize: "80px" }} />
          </Box>
        </SectionBoxInner>
      </Box>

      <SectionDividerTextInBox>
        <Typography variant="h5" fontWeight={600} letterSpacing={1.5}>
          まだエンジンのかかっていない脳に活を入れよう
        </Typography>
      </SectionDividerTextInBox>

      <Box bgcolor="primary.main">
        <SectionBoxInner>
          <Box width="1280px" m="0 auto">
            <IconWithPageTitle
              title="スライドで学び、演習で身につける"
              icon={TipsAndUpdatesIcon}
              iconColor="primary"
              mb="64"
            />
            <IconWithPageTitle
              title="知識をコンパクトにまとめたスライドで無駄なく学べる！"
              icon={LooksOneIcon}
              iconColor="warning"
            />
            <FeaturesViewList images={slideImages} />
            <Box textAlign="center" m="32px 0">
              <ArrowDropDownIcon className="up-down" sx={{ fontSize: "128px", color: "#555" }} />
            </Box>
            <IconWithPageTitle
              title="シミュレーションゲーム感覚で学んだ知識を試すことができる"
              icon={LooksTwoIcon}
              iconColor="warning"
            />
            <FeaturesViewList images={exerciseImages} />
          </Box>
        </SectionBoxInner>
      </Box>

      <SectionDividerTextInBox>
        <Typography variant="h4" fontWeight={600} letterSpacing={1.5} mb="16px">
          ロジカルシンキングを身につけて世界を広げよう
        </Typography>
        <LinkTo to="/signup">
          <PrimaryButton variant="contained">
            <Typography variant="h6" display="flex" alignItems="center">
              無料でユーザー登録
              <LanguageIcon sx={{ fontSize: "22px", ml: "4px" }} />
            </Typography>
          </PrimaryButton>
        </LinkTo>
      </SectionDividerTextInBox>
    </>
  );
};

export default Top;

const FirstViewBox = styled.div`
  position: relative;
  background: ${(props) => props.theme.palette.background.default};
  clip-path: polygon(0 0, 50% 0%, 100% 128px, 100% 100%, 50% 100%, 0% calc(100% - 128px));
`;

const SectionDividerTextInBox = styled.div`
  background: ${(props) => props.theme.palette.primaryGradation.black.main};
  color: ${(props) => props.theme.palette.typography.white};
  padding: 64px 0;
  text-align: center;
`;

const SectionBoxInner = styled.div`
  background: ${(props) => props.theme.palette.background.default};
  position: relative;
  padding: 160px 0 240px;
  clip-path: polygon(0 0, 50% 0%, 100% 128px, 100% 100%, 50% 100%, 0% calc(100% - 128px));
`;
