import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LanguageIcon from "@mui/icons-material/Language";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { LinkTo, MuiButton } from "../atoms";
import { CourseCard, IconWithPageTitle } from "../molecules";
import LogicalThinking from "../../assets/images/illustrations/logicalthinking.svg";
import Comunicate from "../../assets/images/illustrations/comunicate.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import Deductive from "../../assets/images/illustrations/deductive.svg";
import SlideIndexImage from "../../assets/images/background/slide_index.png";
import ExerciseCapture from "../../assets/images/background/exercise_capture.png";

const Top: React.FC = () => {
  return (
    <>
      <Box bgcolor="primary.dark">
        <Box
          component="div"
          position="relative"
          sx={{
            background: "#fff",
            clipPath: "polygon(0 0, 50% 0%, 100% 128px, 100% 100%, 50% 100%, 0% calc(100% - 128px))",
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
                      ????????????????????????????????????????????????
                    </Box>
                  </Box>
                  <Typography component="div" variant="h4" mb="24px" textAlign="center" letterSpacing={1.5}>
                    <Typography component="span" variant="h3" fontWeight={600} mr="4px">
                      ????????????
                    </Typography>
                    ??????????????????
                  </Typography>
                  <Typography component="div" variant="h4" mb="24px" textAlign="center" letterSpacing={1.5}>
                    <Typography component="span" variant="h3" fontWeight={600} mr="4px">
                      ???????????????
                    </Typography>
                    ????????????????????????
                  </Typography>
                  <Typography component="div" variant="h4" mb="64px" textAlign="center" letterSpacing={1.5}>
                    ???????????????
                    <Typography component="span" variant="h3" fontWeight={600} ml="4px">
                      COMPASS
                    </Typography>
                  </Typography>
                  <Box textAlign="center">
                    <LinkTo to="/signup">
                      <MuiButton variant="contained">
                        <Box display="flex" alignItems="center">
                          <Typography variant="h6" component="span">
                            ?????????????????????
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
          <Box position="absolute" bottom="0" left="50%" sx={{ transform: "translateX(-50%)" }}>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ fontSize: "80px" }} />
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        color="#fff"
        textAlign="center"
        p="64px 0"
        sx={{
          background: "radial-gradient(rgba(42, 47, 54, 1) 50%, rgba(33, 33, 33, 1))",
        }}
      >
        <Typography variant="h5" fontWeight={600} letterSpacing={1.5}>
          COMPASS???????????????????????????????????????????????????
        </Typography>
      </Box>

      <Box bgcolor="primary.dark">
        <Box
          position="relative"
          p="160px 0 196px"
          sx={{
            background: "#fff",
          }}
        >
          <Box width="1200px" m="0 auto">
            <IconWithPageTitle title="????????????????????????" icon={MenuBookIcon} iconColor="success" />
            <Grid container mt="64px">
              <Grid item xs={3.5}>
                <CourseCard
                  grade="?????????"
                  color="primary"
                  title="?????????"
                  text={<>????????????????????????????????????????????????????????????????????????</>}
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
                  grade="?????????"
                  title="?????????"
                  titleUnderLineColor="#c2647c"
                  text={
                    <>
                      ???????????????
                      <br />
                      ?????????????????????????????????????????????????????????????????????????????????????????????
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
                  grade="?????????"
                  color="info"
                  title="??????????????????????????????"
                  titleUnderLineColor="#fbd081"
                  text={
                    <>
                      ???????????????
                      <br />
                      ??????????????????????????????????????????????????????????????????????????????????????????
                    </>
                  }
                  image={Comunicate}
                />
              </Grid>
            </Grid>
          </Box>
          <Box position="absolute" bottom="0" left="50%" sx={{ transform: "translateX(-50%)" }}>
            <KeyboardDoubleArrowDownIcon className="up-down" sx={{ fontSize: "80px" }} />
          </Box>
        </Box>
      </Box>
      <Box
        component="div"
        color="#fff"
        textAlign="center"
        p="64px 0"
        sx={{
          background: "radial-gradient(rgba(42, 47, 54, 1) 50%, rgba(33, 33, 33, 1))",
        }}
      >
        <Typography variant="h5" fontWeight={600} letterSpacing={1.5}>
          ??????????????????????????????????????????????????????????????????
        </Typography>
      </Box>

      <Box bgcolor="primary.dark">
        <Box
          p="160px 0"
          sx={{
            background: "#fff",
          }}
        >
          <Box width="900px" m="0 auto">
            <IconWithPageTitle title="????????????????????????????????????????????????" icon={TipsAndUpdatesIcon} iconColor="primary" />
            <Typography variant="h5" fontWeight={600} display="flex" alignItems="center" justifyContent="center">
              <LooksOneIcon sx={{ fontSize: "48px", mr: "4px" }} />
              ??????????????????????????????????????????????????????????????????????????????
            </Typography>
            <Paper elevation={8}>
              <Box
                component="img"
                alt="slide-capture"
                src={SlideIndexImage}
                width="100%"
                sx={{ verticalAlign: "bottom" }}
              />
            </Paper>
            <Box textAlign="center">
              <ArrowDropDownIcon className="up-down" sx={{ fontSize: "128px", color: "#333" }} />
            </Box>
            <Typography variant="h5" fontWeight={600} display="flex" alignItems="center" justifyContent="center">
              <LooksTwoIcon sx={{ fontSize: "48px", mr: "4px" }} />
              ????????????????????????????????????????????????????????????????????????????????????
            </Typography>
            <Paper elevation={8}>
              <Box
                component="img"
                alt="exercise-capture"
                src={ExerciseCapture}
                width="100%"
                border="1px solid #ccc"
                sx={{ verticalAlign: "bottom" }}
              />
            </Paper>
          </Box>
        </Box>
      </Box>

      <Box
        component="div"
        color="#fff"
        textAlign="center"
        p="96px 0"
        sx={{ background: "radial-gradient(rgba(42, 47, 54, 1) 50%, rgba(33, 33, 33, 1))" }}
      >
        <Typography variant="h4" fontWeight={600} letterSpacing={1.5} mb="16px">
          ??????????????????????????????????????????????????????????????????
        </Typography>
        <LinkTo to="/signup">
          <MuiButton variant="contained">
            <Typography variant="h6" display="flex" alignItems="center">
              ???????????????????????????
              <LanguageIcon sx={{ fontSize: "22px", ml: "4px" }} />
            </Typography>
          </MuiButton>
        </LinkTo>
      </Box>
    </>
  );
};

export default Top;
