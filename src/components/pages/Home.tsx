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

const Home: React.FC = React.memo(() => {
  return (
    <>
      <MuiContainer maxWidth="lg">
        <IconWithPageTitle title="ようこそ、COMPASSへ" icon={HomeIcon} iconColor="primary" />
        <IconWithSectionTitle title="おすすめの学習コース" icon={MenuBookIcon} iconColor="primary" />
        <Grid container>
          <Grid item xs={3.5}>
            <CourseCard
              grade="基本編"
              link="lesson/induction"
              color="primary"
              title="帰納法"
              text={<>複数の情報から共通点を探し出し結論を導き出します</>}
              image={Inductive}
              titleUnderLineColor="#83c3f7"
            />
          </Grid>
          <Grid item xs={0.75} display="flex" alignItems="center" justifyContent="center">
            <ArrowRightIcon sx={{ fontSize: "100px", color: "#666" }} />
          </Grid>
          <Grid item xs={3.5}>
            <CourseCard
              link="/"
              image={Deductive}
              grade="基本編"
              title="演繹法"
              titleUnderLineColor="#c2647c"
              text={
                <>
                  ※実装予定
                  <br />
                  既に知っている情報と自分の考えを組み合わせて結論を導き出します
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
              grade="応用編"
              link="/"
              color="info"
              title="伝わる話の組み立て方"
              text="実装予定"
              titleUnderLineColor="#fbd081"
              // text={<>相手のレベルに合わせたわかりやすい説明ができるようになります</>}
              image={Comunicate}
            />
          </Grid>
        </Grid>
      </MuiContainer>
    </>
  );
});

export default Home;
