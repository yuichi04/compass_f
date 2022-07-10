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
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CancelIcon from "@mui/icons-material/Cancel";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListIcon from "@mui/icons-material/List";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WarningIcon from "@mui/icons-material/Warning";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import StarsIcon from "@mui/icons-material/Stars";
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
  InductiveExampleChart,
  DeductiveExplainChart,
  SlideSection,
  SlideSectionContent,
  SlidePointCard,
  IconWithText,
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
          <Typography variant="h5" component="div" display="flex" alignItems="center" justifyContent="center">
            <CheckCircleIcon sx={{ color: "primary.main", fontSize: "32px", mr: "4px" }} />
            ロジカルシンキングとは「
            <Typography
              variant="h5"
              component="span"
              fontWeight={600}
              sx={{ textDecoration: "underline double #00aa99" }}
            >
              話を筋道立てて考えること
            </Typography>
            」
          </Typography>
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
                ロジカルシンキングは知識や前提条件から「
                <Typography variant="h6" component="span" fontWeight={600}>
                  話を筋道立てて考えること
                </Typography>
                」です。
                <br />
                身につけることで無駄なく効率的に考えをまとめることができるようになります。
                <br />
                そのため、ビジネスの現場において非常に重宝されており、ビジネスマンとして価値を上げるなら身につけるべきスキルであることは間違いありません。
                <SlideSectionContent title="メリットと注意点" color="primary.light">
                  ロジカルシンキングを身につけることには
                  <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
                    「説明が上手になる・問題解決力がつく」
                  </Typography>
                  という大きなメリットがあります。
                  <br />
                  どの仕事でも「何かを伝える・問題を解決する」ことは避けて通れないと思いますが、ロジカルシンキングを身につけていると、これらの問題に上手く対処できます。
                  <br />
                  <br />
                  しかし、注意しなくてはならないこともあります。それは、知識に誤りがあったり前提に不足があると
                  <Typography variant="h6" component="span" fontWeight={600} color="#b33e5c">
                    間違った結論を導いてしまう
                  </Typography>
                  ということです。
                  <br />
                  知識の誤りや前提に漏れやダブりがないように意識しましょう。
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
          <Box component="div" textAlign="center">
            ロジカルシンキングには基本となる2つの思考法があります。
            <br />
            それは「
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              sx={{ textDecoration: "underline double #83c3f7" }}
            >
              帰納法
            </Typography>
            <Typography variant="body2" component="span" color="text.secondary" fontWeight={600}>
              （きのうほう）
            </Typography>
            」と「
            <Typography
              variant="h6"
              component="span"
              fontWeight={600}
              sx={{ textDecoration: "underline double #c2647c" }}
            >
              演繹法
            </Typography>
            <Typography variant="body2" component="span" color="text.secondary" fontWeight={600}>
              （えんえきほう）
            </Typography>
            」です。
            <br />
            どちらもロジカルシンキングを身につける上で欠かすことのできない思考法です。
            <br />
            後ほど詳しく学びますが、どのような思考法か簡単に確認しておきましょう。
            <Typography variant="body2">
              ※演繹法についてはロジカルシンキング基本編「演繹法」にて学ぶことができます。
            </Typography>
          </Box>
          <Grid container spacing={4} mt="16px" mb="32px">
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
          <Typography variant="h5" component="div" display="flex" alignItems="center" justifyContent="center">
            <CheckCircleIcon sx={{ color: "#83c3f7", fontSize: "32px", mr: "4px" }} />
            帰納法とは「
            <Typography
              variant="h5"
              component="span"
              fontWeight={600}
              sx={{ textDecoration: "underline double #83c3f7" }}
            >
              複数の情報から共通点を見つけて結論を導く思考法
            </Typography>
            」のこと
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <ArrowDropDownIcon sx={{ fontSize: "64px", color: "#666" }} />
          </Box>
          <SlideSection
            title="もっと詳しく"
            titleIcon={<InfoIcon sx={{ color: "#fff", fontSize: "32px" }} />}
            color="#83c3f7"
          >
            <Grid container spacing={4}>
              <Grid item xs={4}>
                <Box component="img" src={Analytics} alt="image" height="100%" width="100%" />
              </Grid>
              <Grid item xs={8}>
                帰納法はまだ知らないことについて「これはこういうことだろう
                」と確実性の高い予測を立てたり、自分の考えをまとめ誰かに何かを伝える場面で役立つ思考法です。
                <br />
                <br />
                ビジネスにおいて何か商品を開発する場合に、ヒット商品の法則性がわからなければ効果的な戦略を立てることは難しいでしょう。しかし、帰納法を用いることで、その法則性を見つけ成果の上がりやすい戦略を立てることが可能になります。
                <br />
                <br />
                また、他にも、誰かに何かを説明したり意見を述べる場面でも役に立ちます。
                <br />
                たとえば、根拠が乏しい説明や筋の通っていない意見では相手に納得してもらうことは難しいでしょう。しかし、複数の情報から結論を導く帰納法は、言い換えれば、複数の根拠から考えを固める思考法とも言えるため、これを用いることで、相手に納得してもらいやすい説明や意見を組み立てることできます。
                <br />
                <br />
                このように、「
                <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
                  答えを出す・何かを伝える
                </Typography>
                」という場面で役立つ思考法が帰納法です。
                {/* また、帰納法を用いて導き出す結論がどれだけ正確かは
                <Typography variant="h6" component="span" fontWeight={600}>
                  集めた情報の量と質
                </Typography>
                に左右されます。確実性の高い結論を導くためには「
                <Typography variant="h6" component="span" fontWeight={600}>
                  もれなく、ダブりなく
                </Typography>
                」情報を集めることを意識しましょう。 */}
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
          <Box textAlign="center" mb="64px">
            ここからは帰納法を用いる際の流れについて説明していきます。
            <br />
            帰納法は「1. 情報を揃える」「2. 共通点を見つける」「3. 結論を導き出す」という順で考えていきます。
          </Box>
          <Grid container>
            <Grid item xs={3.6}>
              <SlideSection title="1. 情報を揃える" color="primary.main">
                <Box>
                  <IconWithText icon={<StarsIcon sx={{ color: "#faa50a", mr: "4px" }} />} text="ポイント" />
                  <Typography variant="body1" component="div">
                    漏れやダブりがないように情報を揃えます。
                  </Typography>
                  <Divider sx={{ m: "16px 0" }} />
                  <IconWithText icon={<FlagCircleIcon sx={{ color: "primary.main", mr: "4px" }} />} text="具体例" />
                  <Typography
                    variant="body1"
                    component="ul"
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
                </Box>
              </SlideSection>
            </Grid>
            <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
              <ArrowRightIcon sx={{ color: "#666", fontSize: "100px" }} />
            </Grid>
            <Grid item xs={3.6}>
              <SlideSection title="2. 共通点を見つける" color="primary.dark">
                <Box>
                  <IconWithText icon={<StarsIcon sx={{ color: "#faa50a", mr: "4px" }} />} text="ポイント" />
                  <Typography variant="body1" component="div" fontWeight={600}></Typography>
                  <Divider sx={{ m: "16px 0" }} />
                  <IconWithText icon={<FlagCircleIcon sx={{ color: "primary.main", mr: "4px" }} />} text="具体例" />
                  <Box>消費者は水道水よりも高品質の水を求めている</Box>
                </Box>
              </SlideSection>
            </Grid>
            <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
              <ArrowRightIcon sx={{ color: "#666", fontSize: "100px" }} />
            </Grid>
            <Grid item xs={3.6}>
              <SlideSection title="3. 結論を導き出す" color="#004d40">
                <Box>
                  <IconWithText icon={<StarsIcon sx={{ color: "#faa50a", mr: "4px" }} />} text="ポイント" />
                  <Typography variant="body1" component="div">
                    このステップでは共通点から無理なく一般論と言えそうなことを導きます。
                  </Typography>
                  <Divider sx={{ m: "16px 0" }} />
                  <IconWithText icon={<FlagCircleIcon sx={{ color: "primary.main", mr: "4px" }} />} text="具体例" />
                  <Box>飲料水の需要は今後も伸び続けるだろう</Box>
                </Box>
              </SlideSection>
            </Grid>
          </Grid>
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
