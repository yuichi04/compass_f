import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/system";
import { MuiContainer } from "../../layouts";
import { CourseCardList } from "../../organisms";
import { IconWithSectionTitle, IconWithPageTitle, CourseCard } from "../../molecules";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Icons } from "../../../assets/images/icons";
import { Grid } from "@mui/material";

const Lessons: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="lg">
      <IconWithPageTitle title="レッスン一覧" icon={LocalLibraryIcon} iconColor="primary" />
      <Box sx={{ mb: "64px" }}>
        <IconWithSectionTitle title="ロジカルシンキング編" icon={MenuBookIcon} iconColor="primary" />
        <CourseCardList />
      </Box>
      <Box sx={{ mb: "64px", color: "#444" }}>
        <IconWithSectionTitle title="伝わりやすい説明編" icon={BookmarkIcon} iconColor="primary" />
        <Grid container>
          <Grid item xs={4}>
            <CourseCard
              course="説明方法"
              grade="初級編"
              link="/lesson/index"
              color="error"
              title="伝わる話の組み立て方"
              text="実装予定"
              // text={<>相手のレベルに合わせたわかりやすい説明ができるようになります</>}
              image={Icons.user07}
            />
          </Grid>
        </Grid>
      </Box>
    </MuiContainer>
  );
});

export default Lessons;
