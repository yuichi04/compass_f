import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Box } from "@mui/system";
import { MuiContainer } from "../../layouts";
import { CourseCardList } from "../../organisms";
import { IconWithSectionTitle, IconWithPageTitle } from "../../molecules";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const LessonMain: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="lg">
      <IconWithPageTitle title="レッスン一覧" icon={LocalLibraryIcon} iconColor="primary" />
      <Box sx={{ mb: "64px" }}>
        <IconWithSectionTitle title="ロジカルシンキング編" icon={MenuBookIcon} iconColor="primary" />
        <CourseCardList />
      </Box>
      <Box sx={{ mb: "64px", color: "#444" }}>
        <IconWithSectionTitle title="伝わりやすい説明編" icon={BookmarkIcon} iconColor="primary" />
        <CourseCardList />
      </Box>
    </MuiContainer>
  );
});

export default LessonMain;
