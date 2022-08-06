import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Grid } from "@mui/material";
import { MuiContainer } from "../layouts";
import { IconWithPageTitle, IconWithSectionTitle, CourseCard } from "../molecules";

import Inductive from "../../assets/images/illustrations/inductive.svg";
import Deductive from "../../assets/images/illustrations/deductive.svg";
import Comunicate from "../../assets/images/illustrations/comunicate.svg";

const LessonList: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="lg">
      <IconWithPageTitle title="レッスン一覧" icon={LocalLibraryIcon} iconColor="primary" />
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <IconWithSectionTitle title="ロジカルシンキング基本編" icon={MenuBookIcon} iconColor="primary" mb="32px" />
          <Grid container spacing={6} height="100%">
            <Grid item xs={4}>
              <CourseCard
                link="/lesson/induction"
                image={Inductive}
                grade="基本編"
                title="帰納法"
                bgColor="success.main"
                text={<>複数の情報から共通点を探し出し結論を導き出します</>}
                color="primary"
                fontSize="16px"
              />
            </Grid>
            <Grid item xs={4}>
              <CourseCard
                link="/lessonlist"
                image={Deductive}
                grade="基本編"
                title="演繹法"
                bgColor="info.main"
                text="※実装予定"
                color="primary"
                fontSize="16px"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <IconWithSectionTitle title="ロジカルシンキング応用篇" icon={BookmarkIcon} iconColor="primary" mb="32px" />
          <Grid container spacing={6} height="100%">
            <Grid item xs={4}>
              <CourseCard
                grade="応用編"
                link="/lessonlist"
                color="error"
                title="伝わる話の組み立て方"
                text="※実装予定"
                bgColor="warning.main"
                image={Comunicate}
                fontSize="16px"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiContainer>
  );
});

export default LessonList;
