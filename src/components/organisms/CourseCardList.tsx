import React from "react";
import Grid from "@mui/material/Grid";
import { CourseCard } from "../molecules";

// テスト用アイコンデータ
import { Icons } from "../../assets/images/icons";

const CourseCardList: React.FC = React.memo(() => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <CourseCard
          link="/lesson/chapter1"
          image={Icons.user02}
          course="ロジカルシンキング"
          grade="初級編"
          title="演繹法と帰納法"
          text={
            <>
              ロジカルシンキングの基本
              <br />
              事実や事象から結論を導くことができるようになります
            </>
          }
          color="primary"
        />
      </Grid>
      <Grid item xs={4}>
        <CourseCard
          link="/lesson/main"
          image={Icons.user06}
          course="ロジカルシンキング"
          grade="中級編"
          title="ロジックツリー"
          text="※実装予定"
          color="primary"
        />
      </Grid>
      <Grid item xs={4}>
        <CourseCard
          link="/lesson/main"
          image={Icons.user01}
          course="ロジカルシンキング"
          grade="上級編"
          title="フレームワーク"
          text="※実装予定"
          color="primary"
        />
      </Grid>
    </Grid>
  );
});

export default CourseCardList;
