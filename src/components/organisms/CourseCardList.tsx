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
          chapter="Chapter 1"
          title="伝わる説明術「超入門」編"
          text="結論より先に自分の考えを明確にしよう"
          color="primary"
        />
      </Grid>
      <Grid item md={12}>
        <CourseCard
          link="/"
          image={Icons.user07}
          chapter="Chapter 2"
          title="伝わる説明術「入門」編"
          text="伝わりやすい順番で話を組み立てよう"
          color="info"
        />
      </Grid>
      <Grid item md={12}>
        <CourseCard
          link="/"
          image={Icons.user04}
          chapter="Chapter 3"
          title="伝わる説明術「初級」編"
          text="説明で一番大切！相手のレベルに合わせて話す意識を持とう"
          color="error"
        />
      </Grid>
    </Grid>
  );
});

export default CourseCardList;
