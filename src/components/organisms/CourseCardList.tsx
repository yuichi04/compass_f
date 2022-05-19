import React from "react";
import Grid from "@mui/material/Grid";
import { CourseCard } from "../molecules";

// テスト用アイコンデータ
import { Icons } from "../../assets/images/icons";

const CourseCardList: React.FC = React.memo(() => {
  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <CourseCard
          link="/story/chapter1"
          image={Icons.user02}
          title="Chapter 1"
          subTitle="『説明の種類を知ろう』"
          text="状況に応じた説明方法を使い分けることができるようになる"
          color="primary"
        />
      </Grid>
      <Grid item md={12}>
        <CourseCard
          link="/"
          image={Icons.user07}
          title="Chapter 2"
          subTitle="『相手主導の説明』"
          text="相手から説明を求められる質問をされた場合の説明方法が身に付く"
          color="info"
        />
      </Grid>
      <Grid item md={12}>
        <CourseCard
          link="/"
          image={Icons.user04}
          title="Chapter 3"
          subTitle="『自分主導の説明』"
          text="自分の主張や結論がある場合の説明方法が身に付く"
          color="error"
        />
      </Grid>
    </Grid>
  );
});

export default CourseCardList;
