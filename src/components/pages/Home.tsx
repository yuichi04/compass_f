import React from "react";
import Grid from "@mui/material/Grid";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/system";
import { MuiContainer } from "../layouts";
import { DashBoard, CourseCardList, LearningCalendar, LearningProgress } from "../organisms";
import { IconWithSectionTitle, IconWithPageTitle, CourseCard } from "../molecules";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";

// テスト用の画像データ
import { Icons } from "../../assets/images/icons";

const Home: React.FC = React.memo(() => {
  return (
    <Box sx={{ bgcolor: "#f8fbfe" }}>
      <MuiContainer maxWidth="lg">
        <IconWithPageTitle title="ようこそ、COMPASSへ" icon={HomeIcon} iconColor="primary" />
        <Grid container spacing={4}>
          <Grid item xs={9}>
            <Box sx={{ mb: "64px" }}>
              <DashBoard />
            </Box>
            <Box sx={{ mb: "64px" }}>
              <IconWithSectionTitle title="ビジネス基礎コース" icon={MenuBookIcon} iconColor="primary" />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CourseCard
                    grade="初級編"
                    course="ロジカルシンキング"
                    link="lesson/logicalthinking/chapter1"
                    color="primary"
                    title="帰納法"
                    text={
                      <>
                        ロジカルシンキングの基本
                        <br />
                        物事を整理して結論を導くことができるようになります
                      </>
                    }
                    image={Icons.user02}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CourseCard
                    course="説明方法"
                    grade="初級編"
                    link="/"
                    color="error"
                    title="伝わる話の組み立て方"
                    text="実装予定"
                    // text={<>相手のレベルに合わせたわかりやすい説明ができるようになります</>}
                    image={Icons.user07}
                  />
                </Grid>
              </Grid>
            </Box>
            {/* <Box sx={{ mb: "64px", color: "#444" }}>
              <Box sx={{ mb: "64px", color: "#444" }}>
                <IconWithSectionTitle title="前回の続き" icon={BookmarkIcon} iconColor="primary" />
                <CourseCardList />
              </Box>
              <IconWithSectionTitle title="学習中のコース" icon={BookmarkIcon} iconColor="primary" />
              <CourseCardList />
            </Box> */}
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
