import React from "react";
import Grid from "@mui/material/Grid";
import { MuiContainer } from "../layouts";
import { IconWithSectionTitle, IconWithPageTitle, CourseCard } from "../molecules";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// テスト用の画像データ
import Comunicate from "../../assets/images/illustrations/comunicate.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import Deductive from "../../assets/images/illustrations/deductive.svg";
import { CourseCardList } from "../organisms";

const Home: React.FC = React.memo(() => {
  return (
    <>
      <MuiContainer maxWidth="lg">
        <IconWithPageTitle title="ようこそ、COMPASSへ" icon={HomeIcon} iconColor="primary" />
        <IconWithSectionTitle title="おすすめの学習コース" icon={MenuBookIcon} iconColor="primary" mb="32px" />
        <CourseCardList enableLinks />
        {/* <Grid container>
          <Grid item xs={3.5}>
            <CourseCard
              grade="basic"
              link="lesson/induction"
              color="success.main"
              title="帰納法"
              text={<>複数の情報から共通点を探し出し結論を導き出します</>}
              image={Inductive}
            />
          </Grid>
          <Grid item xs={0.75} display="flex" alignItems="center" justifyContent="center">
            <ArrowRightIcon sx={{ fontSize: "100px", color: "#666" }} />
          </Grid>
          <Grid item xs={3.5}>
            <CourseCard link="/" image={Deductive} grade="basic" title="演繹法" text="※実装予定" color="info.main" />
          </Grid>
          <Grid item xs={0.75} display="flex" alignItems="center" justifyContent="center">
            <ArrowRightIcon sx={{ fontSize: "100px", color: "#666" }} />
          </Grid>
          <Grid item xs={3.5}>
            <CourseCard
              grade="応用編"
              link="/"
              color="error"
              title="伝わる話の組み立て方"
              text="実装予定"
              bgColor="warning.main"
              // text={<>相手のレベルに合わせたわかりやすい説明ができるようになります</>}
              image={Comunicate}
              fontSize="16px"
            />
          </Grid>
        </Grid> */}
      </MuiContainer>
    </>
  );
});

export default Home;
