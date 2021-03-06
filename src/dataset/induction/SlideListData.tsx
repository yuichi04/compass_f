import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WarningIcon from "@mui/icons-material/Warning";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Grid } from "@mui/material";
import InThought from "../../assets/images/illustrations/inthought.svg";
import Merit from "../../assets/images/illustrations/merit.svg";
import Warning from "../../assets/images/illustrations/warning.svg";
import Double from "../../assets/images/illustrations/double.svg";
import Analytics from "../../assets/images/illustrations/analytics.svg";
import IndexGuide from "../../assets/images/illustrations/readingbook.svg";
import ThoughtProcess from "../../assets/images/illustrations/thought.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import KeyPoints from "../../assets/images/illustrations/key_points.svg";
import Celebration from "../../assets/images/illustrations/celebration.svg";
import Step from "../../assets/images/illustrations/step.svg";
import {
  InductiveExplainChart,
  DeductiveExplainChart,
  SlideSection,
  SlideSectionContent,
  SlidePointCard,
} from "../../components/molecules";
import { MuiVerticalTabs } from "../../components/organisms";

const SlideListData = () => {
  const title = "???????????????????????????????????????????????????";
  const [slideItems, setSlideItems] = useState([
    {
      order: 0,
      className: "",
      title,
      sectionTitle: "???????????????????????????????????????????????????",
      sentence: (
        <>
          <Box textAlign="center" mb="32px">
            ???????????????????????????????????????????????????????????????????????????????????????
            <Typography
              variant="body2"
              color="text.secondary"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              ????????????????????????????????????????????????????????????????????????????????????
              <CancelIcon fontSize="small" />
              ?????????????????????????????????????????????????????????
            </Typography>
          </Box>
          <Box width="1000px" m="0 auto">
            <SlideSection
              title="??????"
              color="primary.main"
              titleIcon={<ListIcon sx={{ color: "#fff", fontSize: "32px" }} />}
              mb="48px"
            >
              <Grid container>
                <Grid item xs={4} component="ol" mt="32px">
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter1Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ????????????????????????????????????
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter2Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ??????????????????????????????2?????????
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter3Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ????????????????????????????????????
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} component="ol" mt="32px" pl="64px">
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter4Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ??????????????????
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter5Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ?????????????????????
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter6Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ??????????????????
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box component="img" src={IndexGuide} alt="image" height="100%" width="100%" />
                </Grid>
              </Grid>
            </SlideSection>
          </Box>
          <Box textAlign="center">
            ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            <br />
            ?????????????????????????????????????????????????????????????????????
            <br />
            <br />
            <Box display="flex" alignItems="center" justifyContent="center">
              ????????????
              <PlayCircleFilledIcon sx={{ color: "primary.dark" }} />
              ?????????????????????????????????
            </Box>
          </Box>
        </>
      ),
    },
    {
      order: 1,
      className: "",
      title,
      sectionTitle: "????????????????????????????????????",
      sentence: (
        <>
          <Box display="flex" alignItems="center" justifyContent="center">
            <TipsAndUpdatesIcon sx={{ color: "#faa50a", fontSize: "32px", mr: "4px" }} />
            <Typography variant="h5" component="div" fontWeight={600} textAlign="center">
              ?????????????????????????????????
              <Typography variant="h5" component="span" color="primary.main" fontWeight={600}>
                ??????????????????????????????????????????
              </Typography>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection
            title="??????????????????"
            titleIcon={<InfoIcon sx={{ color: "#fff", fontSize: "32px" }} />}
            color="primary.main"
          >
            <Grid container spacing={3}>
              <Grid item xs={8}>
                ?????????????????????????????????????????????????????????
                <Typography component="span" fontWeight={600}>
                  ??????????????????????????????????????????
                </Typography>
                ?????????
                <br />
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                <br />
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                <SlideSectionContent
                  title="???????????????????????????"
                  icon={<VolunteerActivismIcon sx={{ ml: "4px" }} />}
                  color="primary.dark"
                >
                  ?????????????????????????????????????????????????????????
                  <Typography component="span" color="primary.main" fontWeight={600}>
                    ?????????????????????????????????????????????????????????
                  </Typography>
                  ????????????????????????????????????????????????
                  <br />
                  ??????????????????
                  <Typography component="span" fontWeight={600}>
                    ????????????????????????????????????????????????
                  </Typography>
                  ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </SlideSectionContent>
                <SlideSectionContent title="?????????" icon={<WarningIcon sx={{ ml: "4px" }} />} color="#faa50a">
                  ?????????????????????????????????1????????????????????????????????????????????????????????????????????????????????????
                  <Typography component="span" fontWeight={600} color="#b33e5c">
                    ???????????????????????????????????????
                  </Typography>
                  ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                </SlideSectionContent>
              </Grid>
              <Grid item xs={4}>
                <Box component="img" src={ThoughtProcess} alt="image" height="100%" width="100%" />
              </Grid>
            </Grid>
          </SlideSection>
        </>
      ),
    },
    {
      order: 2,
      className: "",
      title,
      sectionTitle: "??????????????????????????????2?????????",
      sentence: (
        <>
          <Box component="div" textAlign="center" mb="64px">
            ?????????????????????????????????2????????????????????????
            <Typography variant="h5" color="primary.main" component="span" fontWeight={600}>
              ????????????
              <Typography variant="body2" component="span" fontWeight={600}>
                ?????????????????????
              </Typography>
              ???
            </Typography>
            ???
            <Typography variant="h5" color="primary.main" component="span" fontWeight={600}>
              ????????????
              <Typography variant="body2" component="span" fontWeight={600}>
                ????????????????????????
              </Typography>
              ???
            </Typography>
            ????????????????????????????????????
            <br />
            ???????????????????????????????????????????????????????????????????????????????????????????????????????????????
            <br />
            ?????????????????????????????????????????????????????????????????????????????????????????????????????????
            <Typography variant="subtitle2" mt="16px">
              ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <InductiveExplainChart />
            </Grid>
            <Grid item xs={6}>
              <DeductiveExplainChart />
            </Grid>
          </Grid>
        </>
      ),
    },
    {
      order: 3,
      className: "",
      title,
      sectionTitle: "????????????????????????????????????",
      sentence: (
        <>
          <Grid container spacing={3} mb="64px">
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<LooksOneIcon sx={{ fontSize: "64px" }} />}
                title="?????????????????????????????????"
                color="#00aa99"
                points={[
                  <>
                    ???????????????????????????
                    <br />
                    <Typography variant="body1" component="span" fontWeight={600}>
                      ???????????????????????????????????????
                    </Typography>
                  </>,
                ]}
                image={InThought}
              />
            </Grid>
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<LooksTwoIcon sx={{ fontSize: "64px" }} />}
                title="????????????"
                color="#b33e5c"
                points={[
                  <Typography variant="body1" fontWeight={600} textAlign="center">
                    ????????????????????????
                  </Typography>,
                  <Typography variant="body1" fontWeight={600} textAlign="center">
                    ????????????????????????
                  </Typography>,
                ]}
                image={Merit}
              />
            </Grid>
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<Looks3Icon sx={{ fontSize: "64px" }} />}
                title="?????????"
                color="#faa50a"
                points={[
                  <>
                    ?????????????????????????????????
                    <br />
                    <Typography variant="body1" component="span" textAlign="center" fontWeight={600}>
                      ???????????????????????????????????????
                    </Typography>
                  </>,
                ]}
                image={Warning}
              />
            </Grid>
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<Looks4Icon sx={{ fontSize: "64px" }} />}
                title="2?????????"
                color="#202429"
                points={[
                  <Typography variant="body1" component="span" fontWeight={600}>
                    ?????????
                  </Typography>,
                  <Typography variant="body1" component="span" fontWeight={600}>
                    ?????????
                  </Typography>,
                ]}
                image={Double}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" textAlign="center">
            ?????????????????????????????????????????????2????????????1????????????????????????????????????????????????????????????
          </Typography>
        </>
      ),
    },

    {
      order: 4,
      className: "",
      title,
      sectionTitle: "???????????????",
      sentence: (
        <>
          <Box display="flex" alignItems="center" justifyContent="center">
            <TipsAndUpdatesIcon sx={{ color: "#faa50a", fontSize: "32px", mr: "4px" }} />
            <Typography variant="h5" component="div" fontWeight={600}>
              ???????????????
              <Typography variant="h5" component="span" color="primary.main" fontWeight={600}>
                ???????????????????????????????????????????????????????????????????????????
              </Typography>
              ?????????
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection
            title="??????????????????"
            titleIcon={<InfoIcon sx={{ color: "#fff", fontSize: "32px" }} />}
            color="primary.main"
          >
            <Grid container>
              <Grid item xs={4} pr="32px">
                <Box component="img" src={Analytics} alt="image" height="100%" width="100%" />
              </Grid>
              <Grid item xs={8}>
                ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                <br />
                ?????????????????????
                <Typography component="span" display="inline-flex" fontWeight={600}>
                  ???
                  <Typography color="primary.main" fontWeight={600}>
                    1.???????????????????????????
                  </Typography>
                  <ArrowRightIcon />
                  <Typography color="primary.dark" fontWeight={600}>
                    2.????????????????????????
                  </Typography>
                  <ArrowRightIcon />
                  <Typography color="#004d40" fontWeight={600}>
                    3.?????????????????????
                  </Typography>
                  ???
                </Typography>
                ?????????3??????????????????????????????????????????
                <br />
                ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                <Typography component="ul" bgcolor="#e0f2f1" p="16px" m="16px 0" textAlign="center" fontWeight={600}>
                  <dl>
                    <Typography component="dt" color="primary.main" fontWeight={600}>
                      1.???????????????????????????
                    </Typography>
                    <dd>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</dd>
                  </dl>
                  <ArrowDropDownIcon />
                  <dl>
                    <Typography component="dt" color="primary.dark" fontWeight={600}>
                      2.????????????????????????
                    </Typography>
                    <dd>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</dd>
                  </dl>
                  <ArrowDropDownIcon />
                  <dl>
                    <Typography component="dt" color="#004d40" fontWeight={600}>
                      3.?????????????????????
                    </Typography>
                    <dd>?????????????????????????????????????????????????????????????????????????????????????????????????????????</dd>
                  </dl>
                </Typography>
                ????????????????????????1???3????????????????????????????????????????????????
              </Grid>
            </Grid>
          </SlideSection>
        </>
      ),
    },
    {
      order: 5,
      className: "",
      title,
      sectionTitle: "?????????????????????",
      sentence: (
        <>
          <SlideSection
            title="??????????????????????????????"
            titleIcon={<CrisisAlertIcon sx={{ fontSize: "24px", color: "#fff", ml: "4px" }} />}
            color="primary.main"
          >
            <MuiVerticalTabs />
          </SlideSection>
        </>
      ),
    },
    {
      order: 6,
      title,
      className: "",
      sectionTitle: "??????????????????",
      sentence: (
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <SlidePointCard
              numberIcon={<LooksOneIcon sx={{ fontSize: "64px" }} />}
              title="??????"
              color="#83c3f7"
              points={[
                <Typography variant="body1" fontWeight={600}>
                  ???????????????????????????????????????
                  <br />
                  ????????????????????????????????????
                </Typography>,
              ]}
              image={Inductive}
            />
          </Grid>
          <Grid item xs={4}>
            <SlidePointCard
              numberIcon={<LooksTwoIcon sx={{ fontSize: "64px" }} />}
              title="????????????"
              color="#004d40"
              points={[
                <Typography variant="body1" fontWeight={600}>
                  ???????????????????????????
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  ????????????????????????
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  ?????????????????????
                </Typography>,
              ]}
              image={Step}
            />
          </Grid>
          <Grid item xs={4}>
            <SlidePointCard
              numberIcon={<Looks3Icon sx={{ fontSize: "64px" }} />}
              title="????????????"
              color="#b33e5c"
              points={[
                <Typography variant="body1" fontWeight={600}>
                  ?????????????????????????????????????????????
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  ?????????????????????????????????????????????
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  ????????????????????????????????????????????????
                </Typography>,
              ]}
              image={KeyPoints}
            />
          </Grid>
        </Grid>
      ),
    },
    {
      order: 7,
      title,
      className: "",
      sectionTitle: "???????????????????????????",
      sentence: (
        <Box position="relative" width="900px" m="0 auto">
          <Box position="absolute" top="-24px" left="52%" sx={{ transform: "translateX(-50%)" }}>
            <Box component="img" alt="celebration img" src={Celebration} />
          </Box>
          <Typography
            position="relative"
            component="div"
            variant="h5"
            color="#fff"
            fontWeight={600}
            textAlign="center"
            bgcolor="rgba(0,0,0,0.4)"
            border="double 5px rgba(255,255,255,0.4)"
            borderRadius="64px"
            p="32px"
            sx={{ textShadow: "1px 1px 1px #555" }}
          >
            ??????????????????????????????????????????
            <br />
            <br />
            ????????????????????????????????????????????????????????????????????????????????????????????????
            <br />
            ??????????????????????????????????????????
            <br />
            <br />
            ?????????????????????????????????
            <br />
            <br />
            <Typography
              variant="h5"
              color="#fff"
              fontWeight={600}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              ?????????
              <CancelIcon fontSize="large" />
              ????????????????????????????????????????????????????????????
            </Typography>
          </Typography>
        </Box>
      ),
    },
  ]);
  return { slideItems, setSlideItems };
};

export default SlideListData;
