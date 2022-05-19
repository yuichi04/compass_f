import React from "react";
import Grid from "@mui/material/Grid";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/system";
import { MuiContainer } from "../layouts";
import { DashBoard, CourseCardList, LearningCalendar, LearningProgress } from "../organisms";
import { IconWithSectionTitle, IconWithPageTitle } from "../molecules";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Home: React.FC = React.memo(() => {
  return (
    <Box sx={{ bgcolor: "#f8fbfe" }}>
      <MuiContainer maxWidth="lg">
        <IconWithPageTitle title="ようこそ、COMPASSへ" icon={LocalLibraryIcon} iconColor="primary" />
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <Box sx={{ mb: "64px" }}>
              <DashBoard />
            </Box>
            <Box sx={{ mb: "64px" }}>
              <IconWithSectionTitle title="基本コース" icon={MenuBookIcon} iconColor="primary" />
              <CourseCardList />
            </Box>
            <Box sx={{ mb: "64px", color: "#444" }}>
              <IconWithSectionTitle title="前回の続き" icon={BookmarkIcon} iconColor="primary" />
              <CourseCardList />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ mb: "64px" }}>
              <LearningCalendar />
            </Box>
            <LearningProgress />
          </Grid>
        </Grid>
      </MuiContainer>
    </Box>
  );
});

export default Home;
