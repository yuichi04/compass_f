import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
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
      <IconWithPageTitle title="レッスンリスト" icon={LocalLibraryIcon} iconColor="primary" />
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <IconWithSectionTitle title="ロジカルシンキング基本編" icon={MenuBookIcon} iconColor="primary" mb="32px" />
          <Grid container spacing={6} height="100%">
            <Grid item xs={4}>
              <CourseCard
                link="/lesson/induction"
                image={Inductive}
                grade="basic"
                title="帰納法"
                text={<>複数の情報から共通点を探し出し結論を導き出します</>}
                color="success.main"
              />
            </Grid>
            <Grid item xs={4}>
              <CourseCard
                link="/lessonlist"
                image={Deductive}
                grade="basic"
                title="演繹法"
                text="※近日リリース予定"
                color="info.main"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <IconWithSectionTitle title="ロジカルシンキング応用篇" icon={MenuBookIcon} iconColor="primary" mb="32px" />
          <Grid container spacing={6} height="100%">
            <Grid item xs={4}>
              <CourseCard
                grade="advanced"
                link="/lessonlist"
                color="warning.main"
                title="伝わる話の組み立て方"
                text="※近日リリース予定"
                image={Comunicate}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiContainer>
  );
});

export default LessonList;
