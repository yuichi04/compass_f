import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Grid } from "@mui/material";
import { MuiContainer } from "../../layouts";
import { IconWithPageTitle, IconWithSectionTitle, CourseCard } from "../../molecules";

import Inductive from "../../../assets/images/illustrations/inductive.svg";
import Deductive from "../../../assets/images/illustrations/deductive.svg";
import Comunicate from "../../../assets/images/illustrations/comunicate.svg";

const Lessons: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="lg">
      <IconWithPageTitle title="レッスン一覧" icon={LocalLibraryIcon} iconColor="primary" />
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <IconWithSectionTitle title="ロジカルシンキング基本編" icon={MenuBookIcon} iconColor="primary" />
          <Grid container spacing={6} height="100%">
            <Grid item xs={4}>
              <CourseCard
                link="/lesson/logicalthinking/chapter1"
                image={Inductive}
                grade="基本編"
                title="帰納法"
                titleUnderLineColor="#83c3f7"
                text={<>複数の情報から共通点を探し出し結論を導き出します</>}
                color="primary"
              />
            </Grid>
            <Grid item xs={4}>
              <CourseCard
                link="/lesson/index"
                image={Deductive}
                grade="基本編"
                title="演繹法"
                titleUnderLineColor="#c2647c"
                text={<>一般論など既に知っている情報に自分の考えを関連付けて結論を導き出します</>}
                color="primary"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <IconWithSectionTitle title="ロジカルシンキング応用篇" icon={BookmarkIcon} iconColor="primary" />
          <Grid container spacing={6} height="100%">
            <Grid item xs={4}>
              <CourseCard
                grade="応用編"
                link="/lesson/index"
                color="info"
                title="伝わる話の組み立て方"
                text="※実装予定"
                titleUnderLineColor="#fbd081"
                image={Comunicate}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiContainer>
  );
});

export default Lessons;
