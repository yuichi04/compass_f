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
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import WarningIcon from "@mui/icons-material/Warning";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Grid } from "@mui/material";
import InThought from "../../assets/images/illustrations/inthought.svg";
import Merit from "../../assets/images/illustrations/merit.svg";
import Warning from "../../assets/images/illustrations/warning.svg";
import Double from "../../assets/images/illustrations/double.svg";
import Analytics from "../../assets/images/illustrations/analytics.svg";
import IndexGuide from "../../assets/images/illustrations/readingbook.svg";
import ThoughtProcess from "../../assets/images/illustrations/thought.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import KeyPoints from "../../assets/images/illustrations/key_points.svg";
import Celebration from "../../assets/images/illustrations/celebration.svg";
import Step from "../../assets/images/illustrations/step.svg";
import {
  InductiveExplainChart,
  DeductiveExplainChart,
  SlideSection,
  SlideSectionContent,
  SlidePointCard,
} from "../../components/molecules";

const SlideListData = () => {
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
          <Box width="1000px" m="0 auto">
            <SlideSection
              title="目次"
              color="primary.main"
              titleIcon={<ListIcon sx={{ color: "#fff", fontSize: "32px" }} />}
              mb="48px"
            >
              <Grid container>
                <Grid item xs={4} component="ol" mt="32px">
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter1Icon sx={{ fontSize: "24px", mr: "8px", color: "primary.main" }} />
                    <Typography variant="h6" color="primary.main">
                      ロジカルシンキングとは？
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter2Icon sx={{ fontSize: "24px", mr: "8px", color: "primary.main" }} />
                    <Typography variant="h6" color="primary.main">
                      ロジカルシンキングの2つの柱
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter3Icon sx={{ fontSize: "24px", mr: "8px", color: "primary.main" }} />
                    <Typography variant="h6" color="primary.main">
                      ロジカルシンキングまとめ
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} component="ol" mt="32px" pl="64px">
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter4Icon sx={{ fontSize: "24px", mr: "8px", color: "primary.main" }} />
                    <Typography variant="h6" color="primary.main">
                      帰納法とは？
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter5Icon sx={{ fontSize: "24px", mr: "8px", color: "primary.main" }} />
                    <Typography variant="h6" color="primary.main">
                      帰納法の使い方
                    </Typography>
                  </Box>
                  <Box component="li" display="flex" alignItems="center" mb="16px">
                    <Filter6Icon sx={{ fontSize: "24px", mr: "8px", color: "primary.main" }} />
                    <Typography variant="h6" color="primary.main">
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
              <PlayCircleFilledIcon sx={{ color: "primary.marin" }} />
              を押して次のスライドへ
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
            <TipsAndUpdatesIcon sx={{ color: "warning.main", fontSize: "32px", mr: "4px" }} />
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
                <Typography component="span" fontWeight={600}>
                  「話を筋道立てて考えること」
                </Typography>
                です。
                <br />
                身につけることで、問題や課題に対して確実性の高い予測や仮説を立てることができるようになります。
                <br />
                そのため、ビジネスの現場でとても重宝されており、ビジネスマンとしての価値を上げるなら身につけるべきスキルであることは間違いありません。
                <SlideSectionContent
                  title="身につけるメリット"
                  icon={<VolunteerActivismIcon sx={{ ml: "4px" }} />}
                  color="info.dark"
                >
                  <Box p="0 16px">
                    ロジカルシンキングを身につけることには
                    <Typography component="span" color="primary.main" fontWeight={600}>
                      「説明が上手になる・問題解決力がつく」
                    </Typography>
                    という大きなメリットがあります。
                    <br />
                    どの仕事でも
                    <Typography component="span" fontWeight={600}>
                      「何かを伝える・問題を解決する」
                    </Typography>
                    ということは避けて通れないと思いますが、ロジカルシンキングを身につけているとこれらの問題に上手に対処することができるようになります。
                  </Box>
                </SlideSectionContent>
                <SlideSectionContent title="注意点" icon={<WarningIcon sx={{ ml: "4px" }} />} color="info.dark">
                  <Box p="0 16px">
                    ロジカルシンキングには1つ注意することがあります。それは知識や前提に誤りがあると
                    <Typography component="span" fontWeight={600} color="error.main">
                      間違った結論を導いてしまう
                    </Typography>
                    ということです。知識・前提は話を組み立てるための土台であり、そこに誤りや不足があっては正しい結論を導くことはできません。ロジカルシンキングを用いるときには、それらの確認が必要だということを忘れないようにしましょう。
                  </Box>
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
            <Typography variant="h5" color="success.dark" component="span" fontWeight={600}>
              「帰納法
              <Typography variant="body2" component="span" fontWeight={600}>
                （きのうほう）
              </Typography>
              」
            </Typography>
            と
            <Typography variant="h5" color="info.dark" component="span" fontWeight={600}>
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
            <Typography variant="subtitle2" mt="16px">
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
            <TipsAndUpdatesIcon sx={{ color: "#faa50a", fontSize: "32px", mr: "4px" }} />
            <Typography variant="h5" component="div" fontWeight={600}>
              帰納法とは
              <Typography variant="h5" component="span" color="success.main" fontWeight={600}>
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
                  <Typography color="success.light" fontWeight={600}>
                    1.複数の情報を揃える
                  </Typography>
                  <ArrowRightIcon />
                  <Typography color="success.main" fontWeight={600}>
                    2.共通点を見つける
                  </Typography>
                  <ArrowRightIcon />
                  <Typography color="success.dark" fontWeight={600}>
                    3.結論を導き出す
                  </Typography>
                  」
                </Typography>
                という3つのステップになっています。
                <br />
                例えば「よく売れる新しいパンを作りたい」というケースでは以下のように用いることができます。
                <Typography component="ul" bgcolor="#e0f2f1" p="16px" m="16px 0" textAlign="center" fontWeight={600}>
                  <dl>
                    <Typography component="dt" color="success.light" fontWeight={600}>
                      1.複数の情報を揃える
                    </Typography>
                    <dd>世間では「オートミールクロワッサン・大豆メロンパン・無糖ヨーグルトドーナッツ」が人気である</dd>
                  </dl>
                  <ArrowDropDownIcon />
                  <dl>
                    <Typography component="dt" color="success.main" fontWeight={600}>
                      2.共通点を見つける
                    </Typography>
                    <dd>ヘルシーな材料と高カロリーなパンを組み合わせた「健康志向＆カロリー控えめなパン」がトレンド</dd>
                  </dl>
                  <ArrowDropDownIcon />
                  <dl>
                    <Typography component="dt" color="success.dark" fontWeight={600}>
                      3.結論を導き出す
                    </Typography>
                    <dd>トマトやニンジンを使った無糖デニッシュを作ったらヒットするかもしれない</dd>
                  </dl>
                </Typography>
                <Typography textAlign="center">それではステップ1〜3について詳しく見ていきましょう。</Typography>
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
      sectionTitle: "帰納法の使い方①",
      sentence: (
        <>
          <SlideSection
            title="複数の情報を揃える"
            titleIcon={<LooksOneIcon sx={{ fontSize: "24px", color: "#fff", ml: "4px" }} />}
            color="primary.main"
          >
            {/* <MuiVerticalTabs /> */}
            <Grid container>
              <Grid item xs={4}>
                img
              </Grid>
              <Grid item xs={8}>
                text
              </Grid>
            </Grid>
          </SlideSection>
        </>
      ),
    },
    {
      order: 6,
      title,
      className: "",
      sectionTitle: "帰納法まとめ",
      sentence: (
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <SlidePointCard
              numberIcon={<LooksOneIcon sx={{ fontSize: "64px" }} />}
              title="用途"
              color="#83c3f7"
              points={[
                <Typography variant="body1" fontWeight={600}>
                  ビジネスシーンなどで戦略を
                  <br />
                  立てるときに役立つ思考法
                </Typography>,
              ]}
              image={Inductive}
            />
          </Grid>
          <Grid item xs={4}>
            <SlidePointCard
              numberIcon={<LooksTwoIcon sx={{ fontSize: "64px" }} />}
              title="ステップ"
              color="#004d40"
              points={[
                <Typography variant="body1" fontWeight={600}>
                  複数の情報を揃える
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  共通点を見つける
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  結論を導き出す
                </Typography>,
              ]}
              image={Step}
            />
          </Grid>
          <Grid item xs={4}>
            <SlidePointCard
              numberIcon={<Looks3Icon sx={{ fontSize: "64px" }} />}
              title="ポイント"
              color="#b33e5c"
              points={[
                <Typography variant="body1" fontWeight={600}>
                  漏れなく・偏りなく情報を揃える
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  共通点の抽象度を高くしすぎない
                </Typography>,
                <Typography variant="body1" fontWeight={600}>
                  「なぜならば」で論理の飛躍を確認
                </Typography>,
              ]}
              image={KeyPoints}
            />
          </Grid>
        </Grid>
      ),
    },
    {
      order: 7,
      title,
      className: "",
      sectionTitle: "スライドはここまで",
      sentence: (
        <Box position="relative" width="900px" m="0 auto">
          <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
            <Box component="img" alt="celebration img" src={Celebration} />
          </Box>
          <Typography
            position="relative"
            component="div"
            variant="h5"
            color="typography.white"
            fontWeight={600}
            textAlign="center"
            bgcolor="rgba(0,0,0,0.4)"
            border="double 5px rgba(255,255,255,0.4)"
            borderRadius="64px"
            p="32px"
            sx={{ textShadow: "1px 1px 1px #555" }}
          >
            スライド学習お疲れ様でした。
            <br />
            <br />
            ここまでロジカルシンキングの概要と帰納法について学習しましたが、
            <br />
            理解はできましたでしょうか？
            <br />
            <br />
            次はいよいよ演習です。
            <br />
            <br />
            <Typography
              variant="h5"
              color="typography.white"
              fontWeight={600}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              右上の
              <CancelIcon fontSize="large" />
              でスライドを閉じて演習に進んでください。
            </Typography>
          </Typography>
        </Box>
      ),
    },
  ]);
  return { slideItems, setSlideItems };
};

export default SlideListData;
