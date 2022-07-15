import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import Filter7Icon from "@mui/icons-material/Filter7";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Divider, Grid, Paper } from "@mui/material";
import InThought from "../../../assets/images/illustrations/inthought.svg";
import Merit from "../../../assets/images/illustrations/merit.svg";
import Warning from "../../../assets/images/illustrations/warning.svg";
import Double from "../../../assets/images/illustrations/double.svg";
import Analytics from "../../../assets/images/illustrations/analytics.svg";
import IndexGuide from "../../../assets/images/illustrations/readingbook.svg";
import ThoughtProcess from "../../../assets/images/illustrations/thought.svg";
import {
  InductiveExplainChart,
  DeductiveExplainChart,
  SlideSection,
  SlideSectionContent,
  SlidePointCard,
  IconWithText,
} from "../../../components/molecules";
import { BalloonLeft } from "../../../components/atoms";
import { MuiVerticalTabs } from "../../../components/organisms";

const Chapter1SlideItemsData = () => {
  const title = "ロジカルシンキング基本編「帰納法」";
  const [slideItems, setSlideItems] = useState([
    {
      order: 0,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングを身につけよう！",
      sentence: (
        <>
          <Box textAlign="center" mb="32px">
            本コースは「スライド学習」→「演習」の順で進めていきます。
            <Typography
              variant="body2"
              color="text.secondary"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              ※スライド学習をスキップして演習に進みたい場合は、右上の
              <CancelIcon fontSize="small" />
              をクリックすると演習がスタートします。
            </Typography>
          </Box>
          <Box width="1080px" m="0 auto">
            <SlideSection
              title="目次"
              color="primary.main"
              titleIcon={<ListIcon sx={{ color: "#fff", fontSize: "32px" }} />}
              mb="48px"
            >
              <Grid container spacing={2}>
                <Grid item xs={4} component="ol" mt="32px">
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter1Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ロジカルシンキングとは？
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter2Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ロジカルシンキングの2つの柱
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter3Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      ロジカルシンキングまとめ
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter4Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      帰納法とは？
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} component="ol" mt="32px">
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter5Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      帰納法の使い方
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter6Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      帰納法のメリットとデメリット
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center">
                    <Filter7Icon sx={{ fontSize: "24px", mr: "8px" }} />
                    <Typography variant="h6" color="primary.main" fontWeight={600}>
                      帰納法まとめ
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box component="img" src={IndexGuide} alt="image" height="100%" width="100%" />
                </Grid>
              </Grid>
            </SlideSection>
          </Box>
          <Box textAlign="center">
            ロジカルシンキングはビジネスマンとして活躍するためには欠かせないスキルです。
            <br />
            ぜひ、身につけて活躍できるようになりましょう！
            <br />
            <br />
            <Box display="flex" alignItems="center" justifyContent="center">
              画面右の
              <PlayCircleFilledIcon sx={{ color: "primary.dark" }} />
              ボタンを押して次のスライドへ
            </Box>
          </Box>
        </>
      ),
    },
    {
      order: 1,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングとは？",
      sentence: (
        <>
          <Box display="flex" alignItems="center" justifyContent="center">
            <TipsAndUpdatesIcon sx={{ color: "#faa50a", fontSize: "48px", mr: "4px" }} />
            <Typography variant="h5" component="div" fontWeight={600} textAlign="center">
              ロジカルシンキングとは
              <Typography variant="h5" component="span" color="primary.main" fontWeight={600}>
                「話を筋道立てて考えること」
              </Typography>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection
            title="もっと詳しく"
            titleIcon={<InfoIcon sx={{ color: "#fff", fontSize: "32px" }} />}
            color="primary.main"
          >
            <Grid container spacing={3}>
              <Grid item xs={8}>
                ロジカルシンキングは知識や前提条件から
                <Typography variant="h6" component="span" fontWeight={600}>
                  「話を筋道立てて考えること」
                </Typography>
                です。
                <br />
                身につけることで問題や課題に対して、無駄なく確実性の高い結論を導くことができるようになります。
                <br />
                そのため、ビジネスの現場においてとても重宝されており、ビジネスマンとして価値を上げるなら身につけるべきスキルであるということは間違いありません。
                <SlideSectionContent
                  title="身につけるメリット"
                  icon={<VolunteerActivismIcon sx={{ ml: "4px" }} />}
                  color="primary.dark"
                >
                  ロジカルシンキングを身につけることには
                  <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
                    「説明が上手になる・問題解決力がつく」
                  </Typography>
                  という大きなメリットがあります。
                  <br />
                  どの仕事でも
                  <Typography variant="h6" component="span" fontWeight={600}>
                    「何かを伝える・問題を解決する」
                  </Typography>
                  ということは避けて通れないと思いますが、ロジカルシンキングを身につけているとこれらの問題に上手に対処できます。
                  <br />
                  ただし、知識や前提に基づいて話を組み立てるため、それらに誤りがあると
                  <Typography variant="h6" component="span" fontWeight={600} color="#b33e5c">
                    間違った結論を導いてしまう
                  </Typography>
                  という点には注意しましょう。
                </SlideSectionContent>
              </Grid>
              <Grid item xs={4}>
                <Box component="img" src={ThoughtProcess} alt="image" height="100%" width="100%" />
              </Grid>
            </Grid>
          </SlideSection>
        </>
      ),
    },
    {
      order: 2,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングの2つの柱",
      sentence: (
        <>
          <Box component="div" textAlign="center" mb="64px">
            ロジカルシンキングには2つの柱と言われる
            <Typography variant="h5" color="primary.main" component="span" fontWeight={600}>
              「帰納法
              <Typography variant="body2" component="span" fontWeight={600}>
                （きのうほう）
              </Typography>
              」
            </Typography>
            と
            <Typography variant="h5" color="primary.main" component="span" fontWeight={600}>
              「演繹法
              <Typography variant="body2" component="span" fontWeight={600}>
                （えんえきほう）
              </Typography>
              」
            </Typography>
            という思考法があります。
            <br />
            どちらもロジカルシンキングを身につける上で欠かすことのできない思考法です。
            <br />
            後ほど詳しく学びますが、どのような思考法か簡単に確認しておきましょう。
            <Typography variant="subtitle2">
              ※演繹法についてはロジカルシンキング基本編「演繹法」にて学ぶことができます。
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <InductiveExplainChart />
            </Grid>
            <Grid item xs={6}>
              <DeductiveExplainChart />
            </Grid>
          </Grid>
        </>
      ),
    },
    {
      order: 3,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングまとめ",
      sentence: (
        <>
          <Grid container spacing={3} mb="64px">
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<LooksOneIcon sx={{ fontSize: "64px" }} />}
                title="ロジカルシンキングとは"
                color="#00aa99"
                points={[
                  <>
                    知識や前提をもとに
                    <br />
                    <Typography variant="body1" component="span" fontWeight={600}>
                      話を筋道立てて考える思考法
                    </Typography>
                  </>,
                ]}
                image={InThought}
              />
            </Grid>
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<LooksTwoIcon sx={{ fontSize: "64px" }} />}
                title="メリット"
                color="#b33e5c"
                points={[
                  <Typography variant="body1" fontWeight={600} textAlign="center">
                    説明が上手になる
                  </Typography>,
                  <Typography variant="body1" fontWeight={600} textAlign="center">
                    問題解決力がつく
                  </Typography>,
                ]}
                image={Merit}
              />
            </Grid>
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<Looks3Icon sx={{ fontSize: "64px" }} />}
                title="注意点"
                color="#faa50a"
                points={[
                  <>
                    正しい結論を導くために
                    <br />
                    <Typography variant="body1" component="span" textAlign="center" fontWeight={600}>
                      知識や前提の誤りに注意する
                    </Typography>
                  </>,
                ]}
                image={Warning}
              />
            </Grid>
            <Grid item xs={3}>
              <SlidePointCard
                numberIcon={<Looks4Icon sx={{ fontSize: "64px" }} />}
                title="2つの柱"
                color="#202429"
                points={[
                  <Typography variant="body1" component="span" fontWeight={600}>
                    帰納法
                  </Typography>,
                  <Typography variant="body1" component="span" fontWeight={600}>
                    演繹法
                  </Typography>,
                ]}
                image={Double}
              />
            </Grid>
          </Grid>
          <Typography variant="h6" textAlign="center">
            ここからはロジカルシンキングの2つの柱の1つ「帰納法」について学んでいきましょう。
          </Typography>
        </>
      ),
    },

    {
      order: 4,
      className: "",
      title,
      sectionTitle: "帰納法とは",
      sentence: (
        <>
          <Box display="flex" alignItems="center" justifyContent="center">
            <TipsAndUpdatesIcon sx={{ color: "#faa50a", fontSize: "48px", mr: "4px" }} />
            <Typography variant="h5" component="div" fontWeight={600}>
              帰納法とは
              <Typography variant="h5" component="span" color="primary.main" fontWeight={600}>
                「複数の情報から共通点を見つけて結論を導く思考法」
              </Typography>
              のこと
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection
            title="もっと詳しく"
            titleIcon={<InfoIcon sx={{ color: "#fff", fontSize: "32px" }} />}
            color="primary.main"
          >
            <Grid container>
              <Grid item xs={4} pr="32px">
                <Box component="img" src={Analytics} alt="image" height="100%" width="100%" />
              </Grid>
              <Grid item xs={8}>
                帰納法は「複数の情報から共通点を見つけて結論を導く思考法」で、ビジネスにおいて何かしら戦略を立てるような場面で役立つ思考法です。
                <br />
                考え方としては
                <Typography component="span" display="inline-flex" fontWeight={600}>
                  「
                  <Typography color="primary.main" fontWeight={600}>
                    1.複数の情報を揃える
                  </Typography>
                  <ArrowRightIcon />
                  <Typography color="primary.dark" fontWeight={600}>
                    2.共通点を見つける
                  </Typography>
                  <ArrowRightIcon />
                  <Typography color="#004d40" fontWeight={600}>
                    3.結論を導き出す
                  </Typography>
                  」
                </Typography>
                という3つのステップになっていて、例えば「よく売れる新しいパンを作りたい」というケースでは以下のように用いることができます。
                <Typography component="ul" bgcolor="#e0f2f1" p="16px" m="16px 0" textAlign="center" fontWeight={600}>
                  <dl>
                    <Typography component="dt" color="primary.main" fontWeight={600}>
                      1.複数の情報を揃える
                    </Typography>
                    <dd>
                      世間では「オートミールクロワッサン・大豆メロンパン・無糖ヨーグルトドーナッツ」がトレンドである
                    </dd>
                  </dl>
                  <ArrowDropDownIcon />
                  <dl>
                    <Typography component="dt" color="primary.dark" fontWeight={600}>
                      2.共通点を見つける
                    </Typography>
                    <dd>ヘルシーな材料と高カロリーなパンを組み合わせた「健康志向＆カロリー控えめなパン」がトレンド</dd>
                  </dl>
                  <ArrowDropDownIcon />
                  <dl>
                    <Typography component="dt" color="#004d40" fontWeight={600}>
                      3.結論を導き出す
                    </Typography>
                    <dd>トマトやニンジンを使った無糖デニッシュを作ったらヒットするかもしれない</dd>
                  </dl>
                </Typography>
                それではステップ1〜3について詳しく見ていきましょう。
              </Grid>
            </Grid>
          </SlideSection>
        </>
      ),
    },
    {
      order: 5,
      className: "",
      title,
      sectionTitle: "帰納法の使い方",
      sentence: (
        <>
          <SlideSection
            title="使い方"
            titleIcon={<SwipeLeftIcon sx={{ fontSize: "32px", color: "#fff", ml: "4px" }} />}
            color="primary.main"
          >
            {/* <Typography
              variant="h6"
              component="div"
              color="text.secondary"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              帰納法は
              <Box component="div" display="flex" alignItems="center" justifyContent="center" m="0 16px">
                <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
                  1.複数の情報を揃える
                </Typography>
                <ArrowRightIcon sx={{ fontSize: "48px" }} />
                <Typography variant="h6" component="span" color="primary.dark" fontWeight={600}>
                  2.共通点を見つける
                </Typography>
                <ArrowRightIcon sx={{ fontSize: "48px" }} />
                <Typography variant="h6" component="span" color="#004d40" fontWeight={600}>
                  3.結論を導き出す
                </Typography>
                という順番で考えます。
              </Box>
            </Typography>
            <Divider sx={{ mb: "8px" }} /> */}
            <MuiVerticalTabs />
          </SlideSection>
        </>
      ),
    },
    {
      order: 6,
      title,
      className: "",
      sectionTitle: "メリットとデメリット",
      section: <></>,
    },
    {
      order: 7,
      title,
      className: "",
      sectionTitle: "まとめ",
      section: <></>,
    },
  ]);
  return { slideItems, setSlideItems };
};

export default Chapter1SlideItemsData;
