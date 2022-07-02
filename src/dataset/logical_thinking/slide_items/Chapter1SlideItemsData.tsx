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
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import WarningIcon from "@mui/icons-material/Warning";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { Grid, Paper } from "@mui/material";
import InThought from "../../../assets/images/illustrations/inthought.svg";
import Merit from "../../../assets/images/illustrations/merit.svg";
import Warning from "../../../assets/images/illustrations/warning.svg";
import Double from "../../../assets/images/illustrations/double.svg";
import Analytics from "../../../assets/images/illustrations/analytics.svg";
import IndexGuide from "../../../assets/images/illustrations/readingbook.svg";
import {
  InductiveExplainChart,
  InductiveExampleChart,
  DeductiveExplainChart,
  SlideSection,
  SlidePointCard,
} from "../../../components/molecules";

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
          <Box textAlign="center">
            ロジカルシンキングとは知識や前提条件をもとに「
            <Typography
              variant="h6"
              component="span"
              color="primary.main"
              fontWeight={600}
              sx={{ textDecoration: "underline double #faa50a" }}
            >
              話を筋道立てて考える思考法
            </Typography>
            」のことを言います。
            <br />
            つまり、ロジカルシンキングを身につけるということは「
            <Typography variant="h6" component="span" fontWeight={600}>
              話を筋道立てて考えられるようになる
            </Typography>
            」ということです。
            <br />
            では、身につけることでどんなメリットがあるのでしょうか？
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection
            title="メリット"
            titleIcon={<VolunteerActivismIcon sx={{ color: "#fff", fontSize: "24px" }} />}
            color="primary.main"
            mb="64px"
          >
            ロジカルシンキングを学び、身につけることには
            <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
              「説明が上手になる・問題解決力がつく」
            </Typography>
            という大きなメリットがあります。
            <br />
            どの仕事でも
            <Typography variant="h6" component="span" fontWeight={600}>
              誰かに何かを伝えること
            </Typography>
            や
            <Typography variant="h6" component="span" fontWeight={600}>
              何か課題や問題を解決すること
            </Typography>
            は避けて通れないと思いますが、ロジカルシンキングを身につけていると、これらの問題に効率良く対処することができます。
            <br />
            そのため、ロジカルシンキングができる人材はビジネスの現場において非常に重宝されており、ビジネスマンとしての価値を上げるなら身につけるべきスキルであることは間違いありません。
          </SlideSection>
          <SlideSection
            title="注意点"
            titleIcon={<WarningIcon sx={{ color: "#fff", fontSize: "24px" }} />}
            color="#faa50a"
          >
            ロジカルシンキングには注意しなくてはならないことがあります。それは、
            <Typography variant="h6" component="span" fontWeight={600}>
              知識や前提に間違いや不足があると
            </Typography>
            <Typography variant="h6" component="span" fontWeight={600} color="#b33e5c">
              誤った結論を導いてしまう
            </Typography>
            ということです。
            <br />
            ロジカルシンキングを使うときにはそれらの間違いや不足がないかチェックする必要があるということを忘れないようにしましょう。
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
        <Typography variant="h6" component="div" position="relative" textAlign="center">
          ロジカルシンキングには基本となる2つの思考法があります。
          <br />
          それは「
          <Typography
            variant="h5"
            component="span"
            fontWeight={600}
            sx={{ textDecoration: "underline double #83c3f7" }}
          >
            帰納法
          </Typography>
          <Typography variant="body2" component="span" color="text.secondary" fontWeight={600}>
            （きのう法）
          </Typography>
          」と「
          <Typography
            variant="h5"
            component="span"
            fontWeight={600}
            sx={{ textDecoration: "underline double #c2647c" }}
          >
            演繹法
          </Typography>
          <Typography variant="body2" component="span" color="text.secondary" fontWeight={600}>
            （えんえき法）
          </Typography>
          」です。
          <br />
          どちらもロジカルシンキングを身につける上で欠かすことのできない思考法です。
          <br />
          あとで詳しく学びますが、どのような思考法か簡単に確認しておきましょう。
          <Typography variant="body2">
            ※演繹法についてはロジカルシンキング基本編「演繹法」にて学ぶことができます。
          </Typography>
          <Grid container spacing={4} mt="16px" mb="32px">
            <Grid item xs={6}>
              <InductiveExplainChart />
            </Grid>
            <Grid item xs={6}>
              <DeductiveExplainChart />
            </Grid>
          </Grid>
        </Typography>
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
            <CheckCircleIcon sx={{ color: "#83c3f7", fontSize: "32px" }} />
            <Typography variant="h5" component="div">
              帰納法とは、
              <Typography
                variant="h5"
                component="span"
                fontWeight={600}
                sx={{ textDecoration: "underline double #83c3f7" }}
              >
                複数の情報から共通点を見つけて結論を導く思考法
              </Typography>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection title="もっと詳しく" color="#83c3f7">
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Box component="img" src={Analytics} alt="image" height="100%" width="100%" />
              </Grid>
              <Grid item xs={8}>
                帰納法は統計学の基本の考えとなっており、まだ知らないことに対して「
                <Typography
                  variant="h6"
                  component="span"
                  fontWeight={600}
                  sx={{ textDecoration: "underline wavy #666" }}
                >
                  これはこういうことだろう
                </Typography>
                」と確実性の高い予測をすることができる思考法です。
                <br />
                <br />
                たとえば、ビジネスにおいて何か商品を開発する場合に、ヒット商品の法則性がわからなければ効果的な戦略を立てることは難しいでしょう。
                <br />
                しかし、帰納法を用いれば、その法則性を見つけ、成果の上がりやすい戦略を立てることが可能となります。
                <br />
                <br />
                なお、帰納法を用いて導き出す結論がどれだけ正確かは
                <Typography variant="h6" component="span" fontWeight={600}>
                  集めた情報の量と質
                </Typography>
                に左右されます。
                <br />
                ロジカルシンキングの時にも説明しましたが、帰納法においても、情報の不足や間違いには注意が必要です。
                <br />
                確実性の高い結論を導くためには「
                <Typography variant="h6" component="span" fontWeight={600}>
                  もれなく、ダブりなく
                </Typography>
                」情報を集めることを意識しましょう。次は具体例を交えて解説していきます。
              </Grid>
            </Grid>
          </SlideSection>
          {/* <Paper
            elevation={8}
            sx={{
              position: "relative",
              bgcolor: "#fff",
              border: "2px solid #83c3f7",
              p: "40px 32px 16px",
            }}
          >
            <Paper
              elevation={8}
              sx={{
                position: "absolute",
                top: "-24px",
                left: "-12px",
                bgcolor: "#83c3f7",
                p: "8px 16px",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              <Typography variant="h5" color="#fff" fontWeight={600} mr="4px">
                帰納法とは？
              </Typography>
            </Paper>
            帰納法とは「これはこういうことだろう」というような「
            <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
              物事の一般的な法則性
            </Typography>
            」を見つけ出すために有効な思考法です。
            <br />
            たとえば、ビジネスにおいて何か新たな商品を開発する場合に、ヒット商品の法則性がわからなければ効果的な戦略を立てることは難しいでしょう。
            <br />
            しかし、もしその法則性を見つけることができれば、成果の上がりやすい戦略を立てることができます。そのような場面で活用できるのが帰納法です。
            以下の例をご覧ください。
          </Paper>

          <Box display="flex" alignItems="center" justifyContent="center" mb="20px">
            <ArrowDropDownIcon sx={{ fontSize: "80px", color: "#666" }} />
          </Box>

          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  bgcolor: "#fff",
                  p: "40px 16px 16px",
                  height: "100%",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-24px",
                    left: "-12px",
                    bgcolor: "#666",
                    color: "#fff",
                    p: "8px 16px",
                    borderRadius: "4px",
                    display: "inline-block",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <LooksOneIcon sx={{ fontSize: "32px", mr: "4px" }} />
                    <Typography variant="h6" fontWeight={600}>
                      情報を揃える
                    </Typography>
                  </Box>
                </Paper>
                <Typography
                  variant="body1"
                  component="ul"
                  fontWeight={600}
                  sx={{ listStyleType: "revert", listStylePosition: "inside" }}
                >
                  <Box component="li" mb="16px">
                    スーパーやコンビニでの飲料水の売り上げが毎年少しずつ増えている
                  </Box>
                  <Box component="li" mb="16px">
                    飲料水に関するアンケートを取った結果、水道水を飲むことに抵抗がある人の割合が4割を超えた
                  </Box>
                  <Box component="li" mb="16px">
                    ウォーターサーバーの契約数が毎年少しずつ増えている
                  </Box>
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  bgcolor: "#fff",
                  p: "40px 16px 16px",
                  height: "100%",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-24px",
                    left: "-12px",
                    bgcolor: "primary.light",
                    color: "#fff",
                    p: "8px 16px",
                    borderRadius: "4px",
                    display: "inline-block",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <LooksTwoIcon sx={{ fontSize: "32px", mr: "4px" }} />
                    <Typography variant="h6" fontWeight={600}>
                      共通点を探し出す
                    </Typography>
                  </Box>
                </Paper>
                消費者は水道水よりも高品質の水を求めている
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  bgcolor: "#fff",
                  p: "40px 16px 16px",
                  height: "100%",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-24px",
                    left: "-12px",
                    bgcolor: "primary.dark",
                    color: "#fff",
                    p: "8px 16px",
                    borderRadius: "4px",
                    display: "inline-block",
                  }}
                >
                  <Box display="flex" alignItems="center">
                    <Looks3Icon sx={{ fontSize: "32px", mr: "4px" }} />
                    <Typography variant="h6" fontWeight={600}>
                      結論を導き出す
                    </Typography>
                  </Box>
                </Paper>
                飲料水の需要は今後も伸び続けるだろう
              </Paper>
            </Grid>
          </Grid> */}
          {/* <Grid container spacing={4}>
            <Grid item xs={6}>
              <Paper
                elevation={8}
                sx={{ position: "relative", bgcolor: "#fff", p: "24px", border: "2px solid #83c3f7", height: "100%" }}
              >
                <Box component="dl" mb="8px">
                  <Paper elevation={4} component="dt" sx={{ bgcolor: "#666", color: "#fff", p: "4px 12px", mb: "8px" }}>
                    <Typography variant="body1" fontWeight={600}>
                      集めた情報
                    </Typography>
                  </Paper>
                  <dd>
                    <Box component="ul" p="0 12px">
                      <Typography variant="body1" component="li">
                        ・有料音楽配信サービスの利用者が毎年少しずつ増えている
                      </Typography>
                      <Typography variant="body1" component="li">
                        ・スマートフォンで音楽を聴く人が
                      </Typography>
                      <Typography variant="body1" component="li">
                        ・配信サービスでリリースするアーティストの数が増えた
                      </Typography>
                    </Box>
                  </dd>
                </Box>
                <Box component="dl" mb="8px">
                  <Paper
                    elevation={4}
                    component="dt"
                    sx={{ bgcolor: "primary.main", color: "#fff", p: "4px 12px", mb: "8px" }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      共通点
                    </Typography>
                  </Paper>
                  <Typography variant="body1" component="dd" p="0 12px">
                    サブスクリプション形式のサービスである
                  </Typography>
                </Box>
                <Box component="dl">
                  <Paper
                    elevation={4}
                    component="dt"
                    sx={{ bgcolor: "primary.dark", color: "#fff", p: "4px 12px", mb: "8px" }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      結論
                    </Typography>
                  </Paper>
                  <Typography variant="body1" component="dd" p="0 12px"></Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={8}
                sx={{ position: "relative", bgcolor: "#fff", p: "24px", border: "2px solid #83c3f7", height: "100%" }}
              >
                <Box component="dl" mb="8px">
                  <Paper elevation={4} component="dt" sx={{ bgcolor: "#666", color: "#fff", p: "4px 12px", mb: "8px" }}>
                    <Typography variant="body1" fontWeight={600}>
                      集めた情報
                    </Typography>
                  </Paper>
                  <dd>
                    <Box component="ul" p="0 12px">
                      <Typography variant="body1" component="li">
                        ・スーパーやコンビニでの飲料水の売り上げが毎年少しずつ増えている
                      </Typography>
                      <Typography variant="body1" component="li">
                        ・飲料水に関するアンケートを取った結果、水道水を飲むことに抵抗がある人の割合が4割を超えた
                      </Typography>
                      <Typography variant="body1" component="li">
                        ・ウォーターサーバーの契約数が毎年少しずつ増えている
                      </Typography>
                    </Box>
                  </dd>
                </Box>
                <Box component="dl" mb="8px">
                  <Paper
                    elevation={4}
                    component="dt"
                    sx={{ bgcolor: "primary.main", color: "#fff", p: "4px 12px", mb: "8px" }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      共通点
                    </Typography>
                  </Paper>
                  <Typography variant="body1" component="dd" p="0 12px">
                    消費者は水の品質を気にするようになってきている
                  </Typography>
                </Box>
                <Box component="dl">
                  <Paper
                    elevation={4}
                    component="dt"
                    sx={{ bgcolor: "primary.dark", color: "#fff", p: "4px 12px", mb: "8px" }}
                  >
                    <Typography variant="body1" fontWeight={600}>
                      結論
                    </Typography>
                  </Paper>
                  <Typography variant="body1" component="dd" p="0 12px">
                    飲料水の需要は今後も伸び続けるだろう
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid> */}
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
          {/* <Paper
            elevation={8}
            sx={{ position: "relative", bgcolor: "#fff", border: "2px solid #b2dfdb", p: "40px 32px 16px" }}
          >
            <Paper
              elevation={8}
              sx={{
                position: "absolute",
                top: "-24px",
                left: "-12px",
                display: "inline-block",
                bgcolor: "#3f51b5",
                borderRadius: "4px",
                p: "8px 16px",
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="h5" component="span" color="#fff" fontWeight={600} mr="8px">
                  メリット
                </Typography>
                <VolunteerActivismIcon sx={{ color: "#fff", fontSize: "24px" }} />
              </Box>
            </Paper>
            物事の一般的な法則性を理解できるのは、帰納法の大きなメリットです。この点はビジネスシーンでも活用されています。たとえば、マーケティングの世界では集客やヒット商品の法則が分からなければ、効果的な戦略を立てられません。
            そうなれば、無駄な戦略に時間とお金をかけてしまうでしょう。それでも、帰納法によってマーケティングの法則が分かっていれば、成果を上げやすい戦略を実施しやすくなるのです。
            また、結論に根拠があるのも帰納法の特徴です。帰納法では複数の事象から共通点を探します。膨大な事例に共通している法則があるなら、その普遍性はかなり高いといえるでしょう。自信を持ってその法則をビジネスに応用できます。その場合、事例と同じ成果を得られる可能性は大きいのです。
          </Paper>
          <Box display="flex" alignContent="center" justifyContent="center" m="8px 0">
            <HeightIcon sx={{ color: "#666", fontSize: "64px" }} />
          </Box>
          <Paper
            elevation={8}
            sx={{ position: "relative", bgcolor: "#fff", border: "2px solid #b2dfdb", p: "40px 32px 16px" }}
          >
            <Paper
              elevation={8}
              sx={{
                position: "absolute",
                top: "-24px",
                left: "-12px",
                bgcolor: "#b33e5c",
                p: "8px 16px",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="h5" component="span" color="#fff" fontWeight={600} mr="8px">
                  デメリット
                </Typography>
                <WarningIcon sx={{ color: "#fff", fontSize: "24px" }} />
              </Box>
            </Paper>
            大前提として、帰納法は「正しい現象と計測」を踏まえなくてはなりません。現象そのものが事例として不適格だったり、計測が間違っていたりしたら帰納法は成り立たないのです。また、たまたま複数の現象で共通していただけの要素を普遍的だと思い込み、結論にしてしまう危険もあります。
            事例を挙げるなら、「顧客Aはお菓子を買った」「顧客Bもお菓子を買った」という現象があったからといって、「誰もがお菓子好きでお金を使ってくれる」という結論にはなりません。AとBが特殊な顧客だった可能性もあるからです。
            帰納法を正しく用いるには、データの質と量が問われます。十分なデータ収集を怠った状態で帰納法を用いても、整合性のある結論を導けないでしょう。帰納法で結論を導く前には、手元にあるデータが信用できる内容なのかを見直すことが大切です。
          </Paper> */}
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
