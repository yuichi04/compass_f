// Modules
import { Box, Grid, Icon, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import CancelIcon from "@mui/icons-material/Cancel";
import Filter1Icon from "@mui/icons-material/Filter1";
import Filter2Icon from "@mui/icons-material/Filter2";
import Filter3Icon from "@mui/icons-material/Filter3";
import Filter4Icon from "@mui/icons-material/Filter4";
import Filter5Icon from "@mui/icons-material/Filter5";
import Filter6Icon from "@mui/icons-material/Filter6";
import InfoIcon from "@mui/icons-material/Info";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";
import ListIcon from "@mui/icons-material/List";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import WarningIcon from "@mui/icons-material/Warning";
// Types
import { SlideListItemType } from "../../types/slideListTypes";
// Components
import {
  DeductiveExplainChart,
  InductiveExplainChart,
  ScrollAnimationBox,
  SlideListItemContent,
  SlideListItemContentHeadline,
  SubTitleWithContent,
  SummaryCard,
} from "../../components/molecules";
// Images
import Analytics from "../../assets/images/illustrations/analytics.svg";
import Celebration from "../../assets/images/illustrations/celebration.svg";
import Double from "../../assets/images/illustrations/double.svg";
import IndexGuide from "../../assets/images/illustrations/readingbook.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import InThought from "../../assets/images/illustrations/inthought.svg";
import KeyPoints from "../../assets/images/illustrations/key_points.svg";
import Merit from "../../assets/images/illustrations/merit.svg";
import Step from "../../assets/images/illustrations/step.svg";
import ThoughtProcess from "../../assets/images/illustrations/thought.svg";
import Warning from "../../assets/images/illustrations/warning.svg";
import InductionStepOne from "../../assets/images/illustrations/induction_step_one.svg";
import InductionStepTwo from "../../assets/images/illustrations/induction_step_two.svg";
import InductionStepThree from "../../assets/images/illustrations/induction_step_three.svg";

// 目次のコンテンツ
const index = [
  { text: "ロジカルシンキングとは?", icon: Filter1Icon },
  { text: "ロジカルシンキングの2つの柱", icon: Filter2Icon },
  { text: "ロジカルシンキングまとめ", icon: Filter3Icon },
  { text: "帰納法とは?", icon: Filter4Icon },
  { text: "帰納法の使い方", icon: Filter5Icon },
  { text: "帰納法まとめ", icon: Filter6Icon },
];
// 「ロジカルシンキングまとめ」の各カードのコンテンツ
const logicalThinkingSummaryCards = [
  {
    color: "success.main",
    icon: LooksOneIcon,
    image: InThought,
    title: "概要",
    points: [
      <>
        ロジカルシンキングとは
        <br />
        知識や前提から
        <br />
        <Typography component="span">話を筋道立てて考える思考法</Typography>
      </>,
    ],
  },
  {
    color: "error.main",
    icon: LooksTwoIcon,
    image: Merit,
    title: "メリット",
    points: [
      <Typography textAlign="center">説明が上手になる</Typography>,
      <Typography textAlign="center">問題解決力がつく</Typography>,
    ],
  },
  {
    color: "warning.main",
    icon: Looks3Icon,
    image: Warning,
    title: "注意点",
    points: [
      <>
        正しい結論を導くために
        <br />
        <Typography component="span" textAlign="center">
          知識や前提の誤りに注意する
        </Typography>
      </>,
    ],
  },
  {
    color: "primary.main",
    icon: Looks4Icon,
    image: Double,
    title: "2つの柱",
    points: [<Typography component="span">帰納法</Typography>, <Typography component="span">演繹法</Typography>],
  },
];

// 「帰納法まとめ」の各カードのコンテンツ
const inductionSummaryCards = [
  {
    color: "success.main",
    icon: LooksOneIcon,
    image: Inductive,
    title: "帰納法とは？",
    points: [
      <Typography>
        ビジネスシーンなどで戦略を
        <br />
        立てるときに役立つ思考法
      </Typography>,
    ],
  },
  {
    color: "info.main",
    icon: LooksTwoIcon,
    image: Step,
    title: "ステップ",
    points: [
      <Typography>複数の情報を揃える</Typography>,
      <Typography>共通点を見つける</Typography>,
      <Typography>結論を導き出す</Typography>,
    ],
  },
  {
    color: "error.main",
    icon: Looks3Icon,
    image: KeyPoints,
    title: "ポイント",
    points: [
      <Typography>情報源の偏りをなくし多く揃えるほど、結論の信憑性が上がる</Typography>,
      <Typography>
        論理の飛躍がないか
        <br />
        「主張＋根拠」で確認する
      </Typography>,
    ],
  },
];

// コースタイトル
export const courseTitle = "ロジカルシンキング基本編「帰納法」";
export const inductionSlideListItemsData: SlideListItemType[] = [
  {
    courseTitle,
    slideTitle: "ロジカルシンキングを身につけよう",
    content: (
      <>
        <Box textAlign="center" mb="32px">
          本コースは「スライド学習」→「演習」の順で進めていきます。
          <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" justifyContent="center">
            ※スライド学習をスキップして演習に進みたい場合は、右上の
            <CancelIcon fontSize="small" />
            から演習をスタートできます。
          </Typography>
        </Box>

        <Box width="1000px" m="0 auto" mb="32px">
          <SlideListItemContent
            title="目次"
            image={IndexGuide}
            icon={ListIcon}
            iconSize="32px"
            imageXs={6}
            spacing={8}
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            reverse
          >
            <Box component="ol">
              {index.map((data, index) => (
                <Box key={index} component="li" display="flex" alignItems="center" mb="16px">
                  <Icon component={data.icon} sx={{ fontSize: "32px", mr: "16px", color: "info.main" }} />
                  <Typography variant="h6">{data.text}</Typography>
                </Box>
              ))}
            </Box>
          </SlideListItemContent>
        </Box>

        <Box textAlign="center" mb="16px">
          ロジカルシンキングはビジネスマンとして活躍するためには欠かせないスキルです。
          <br />
          ぜひ、身につけて活躍できるようになりましょう！
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          画面右の
          <PlayCircleFilledIcon sx={{ color: "primary.main" }} />
          を押して次のスライドへ
        </Box>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "ロジカルシンキングとは？",
    content: (
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
          <ArrowDropDownIcon sx={{ fontSize: "64px" }} />
        </Box>

        <SlideListItemContent title="もっと詳しく" icon={InfoIcon} iconSize="32px" image={ThoughtProcess} reverse>
          ロジカルシンキングは知識や前提条件から
          <Typography component="span" fontWeight={600}>
            「話を筋道立てて考えること」
          </Typography>
          です。
          <br />
          身につけることで、問題や課題に対して確実性の高い予測や仮説を立てることができるようになります。
          <br />
          そのため、ビジネスの現場でとても重宝されており、ビジネスマンとしての価値を上げるなら身につけるべきスキルであることは間違いありません。
          <SubTitleWithContent
            title="身につけるメリット"
            icon={VolunteerActivismIcon}
            iconSize="20px"
            color="info.main"
          >
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
          </SubTitleWithContent>
          <SubTitleWithContent title="注意点" icon={WarningIcon} iconSize="20px" color="info.main">
            ロジカルシンキングには1つ注意することがあります。それは知識や前提に誤りがあると
            <Typography component="span" fontWeight={600} color="error.main">
              間違った結論を導いてしまう
            </Typography>
            ということです。
            <br />
            知識・前提は話を組み立てるための土台であり、そこに誤りや不足があっては正しい結論を導くことはできません。ロジカルシンキングを用いるときには、それらの確認が必要だということを忘れないようにしましょう。
          </SubTitleWithContent>
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "ロジカルシンキングの2つの柱",
    content: (
      <>
        <Box textAlign="center" mb="16px">
          ロジカルシンキングには2つの柱と言われる
          <Typography variant="h5" color="success.dark" component="span" fontWeight={600}>
            「帰納法
            <Typography variant="body2" component="span">
              （きのうほう）
            </Typography>
            」
          </Typography>
          と
          <Typography variant="h5" color="info.dark" component="span" fontWeight={600}>
            「演繹法
            <Typography variant="body2" component="span">
              （えんえきほう）
            </Typography>
            」
          </Typography>
          という思考法があります。
          <br />
          どちらもロジカルシンキングを身につける上で欠かすことのできない思考法です。
          <br />
          後ほど詳しく学びますが、どのような思考法か簡単に確認しておきましょう。
        </Box>
        <Typography variant="subtitle2" mb="64px" textAlign="center">
          ※演繹法についてはロジカルシンキング基本編「演繹法」にて学ぶことができます。
        </Typography>
        <Grid container width="1280px" spacing={4}>
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
    courseTitle,
    slideTitle: "ロジカルシンキングまとめ",
    content: (
      <>
        <Grid container spacing={3} mb="64px">
          {logicalThinkingSummaryCards.map((card, index) => (
            <Grid key={index} item xs={3}>
              <ScrollAnimationBox delay={index / 2 + 0.25} duration={1} rootMargin={0} triggerOnce>
                <SummaryCard
                  color={card.color}
                  icon={card.icon}
                  iconSize="48px"
                  image={card.image}
                  title={card.title}
                  points={card.points}
                />
              </ScrollAnimationBox>
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6" textAlign="center">
          ここからはロジカルシンキングの2つの柱の1つ「帰納法」について学んでいきましょう。
        </Typography>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法とは",
    content: (
      <>
        <Box display="flex" alignItems="center" justifyContent="center">
          <TipsAndUpdatesIcon sx={{ color: "#faa50a", fontSize: "48px", mr: "4px" }} />
          <Typography variant="h5" component="div" fontWeight={600}>
            帰納法とは
            <Typography variant="h5" component="span" color="success.main" fontWeight={600}>
              「複数の情報から共通点を見つけて結論を導く思考法」
            </Typography>
            のこと
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <ArrowDropDownIcon sx={{ fontSize: "64px" }} />
        </Box>
        <SlideListItemContent title="もっと詳しく" icon={InfoIcon} iconSize="32px" image={Analytics}>
          帰納法は「複数の情報から共通点を見つけて結論を導く思考法」で、ビジネスにおいて何かしら戦略を立てるような場面や、情報を整理してある法則性を見つけたりする上で役立つ思考法です。
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
          <Typography
            component="ul"
            bgcolor="secondaryBackgroundColor.cyan"
            p="16px"
            m="16px 0"
            textAlign="center"
            fontWeight={600}
          >
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
              <dd>人気なパンはヘルシーな材料と高カロリーなパンを組み合わせた「健康志向＆カロリー控えめなパン」</dd>
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
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法の使い方①",
    content: (
      <>
        <SlideListItemContentHeadline headlineLeft="ステップ①" headlineRight="複数の情報を揃える" />
        <SlideListItemContent title="もっと詳しく" image={InductionStepOne} icon={InfoIcon} iconSize="32px">
          帰納法の最初のステップは「複数の情報を揃える」ことです。
          <br />
          {/* 主張 */}
          ポイントとしては、情報源の偏りをなくし、できるだけ多くの情報を揃えることです。
          <br />
          {/* 理由 */}
          なぜなら、帰納法は揃えた情報から結論を導き出す思考法であるため、情報の揃え方に問題があると信憑性の高い結論が導けないからです。
          <br />
          {/* 具体例 */}
          例えば、情報源に偏りがあるケースとして、「友人Aはミネラルウォーターをよく飲んでいる」「友人Bはウォーターサーバーを契約した」「友人Cは水道水を飲むことに抵抗があると言っていた」という情報を揃えたとします。そして、そこから「世間では水道水より品質の良い水が求められている」と結論づけたとしましょう。
          <br />
          しかし、身の回りの情報のみで判断をしてしまっているため、これでは「世間は〜」と結論づけるには根拠が弱く信憑性が低いです。
          <br />
          {/* 反例 */}
          偏りをなくすなら身の回りだけではなく、テレビや雑誌、SNSなどからも情報を取り入れると良いでしょう。
          <br />
          例えば、「テレビでウォーターサーバーの契約数が増えていると紹介されていた」「ある雑誌のアンケートでは水道水を飲むことに抵抗があると答えた人が4割を超えた」「友人はミネラルウォーターを定期便で頼んでいる」という情報も取り入れたのであれば、「世間は〜」と結論づけても問題ないでしょう。
          <br />
          また他にも情報数を増やすことも大切です。情報数は＝根拠であるため、根拠が増えれば増えるほど、信憑性が高く、より正解に近い結論を導くことができます。
          <br />
          {/* 結論 */}
          このように、情報の偏りをなくし多く揃えることで、より正解に近い結論を導くことができるようになります。
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法の使い方②",
    content: (
      <>
        <SlideListItemContentHeadline headlineLeft="ステップ②" headlineRight="共通点を見つける" />
        <SlideListItemContent title="もっと詳しく" image={InductionStepTwo} icon={InfoIcon} iconSize="32px">
          帰納法の2つ目のステップは揃えた情報から「共通点を見つける」ことです。
          <br />
          {/* 主張 */}
          ポイントとしては、情報源の偏りをなくし、できるだけ多くの情報を揃えることです。
          <br />
          {/* 理由 */}
          なぜなら、帰納法は揃えた情報から結論を導き出す思考法であるため、情報の揃え方に問題があると信憑性の高い結論が導けないからです。
          <br />
          {/* 具体例 */}
          例えば、情報源に偏りがあるケースとして、「友人Aはミネラルウォーターをよく飲んでいる」「友人Bはウォーターサーバーを契約した」「友人Cは水道水を飲むことに抵抗があると言っていた」という情報を揃えたとします。そして、そこから「世間では水道水より品質の良い水が求められている」と結論づけたとしましょう。
          <br />
          しかし、身の回りの情報のみで判断をしてしまっているため、これでは「世間は〜」と結論づけるには根拠が弱く信憑性が低いです。
          <br />
          {/* 反例 */}
          偏りをなくすなら身の回りだけではなく、テレビや雑誌、SNSなどからも情報を取り入れると良いでしょう。
          <br />
          例えば、「テレビでウォーターサーバーの契約数が増えていると紹介されていた」「ある雑誌のアンケートでは水道水を飲むことに抵抗があると答えた人が4割を超えた」「友人はミネラルウォーターを定期便で頼んでいる」という情報も取り入れたのであれば、「世間は〜」と結論づけても問題ないでしょう。
          <br />
          また他にも情報数を増やすことも大切です。情報数は＝根拠であるため、根拠が増えれば増えるほど、信憑性が高く、より正解に近い結論を導くことができます。
          <br />
          {/* 結論 */}
          このように、情報の偏りをなくし多く揃えることで、より正解に近い結論を導くことができるようになります。
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法の使い方③",
    content: (
      <>
        <SlideListItemContentHeadline headlineLeft="ステップ③" headlineRight="結論を導き出す" />
        <SlideListItemContent title="もっと詳しく" image={InductionStepThree} icon={InfoIcon} iconSize="32px">
          帰納法の最後のステップは共通点から「結論を導き出す」ことです。
          <br />
          {/* 主張 */}
          ポイントとしては、情報源の偏りをなくし、できるだけ多くの情報を揃えることです。
          <br />
          {/* 理由 */}
          なぜなら、帰納法は揃えた情報から結論を導き出す思考法であるため、情報の揃え方に問題があると信憑性の高い結論が導けないからです。
          <br />
          {/* 具体例 */}
          例えば、情報源に偏りがあるケースとして、「友人Aはミネラルウォーターをよく飲んでいる」「友人Bはウォーターサーバーを契約した」「友人Cは水道水を飲むことに抵抗があると言っていた」という情報を揃えたとします。そして、そこから「世間では水道水より品質の良い水が求められている」と結論づけたとしましょう。
          <br />
          しかし、身の回りの情報のみで判断をしてしまっているため、これでは「世間は〜」と結論づけるには根拠が弱く信憑性が低いです。
          <br />
          {/* 反例 */}
          偏りをなくすなら身の回りだけではなく、テレビや雑誌、SNSなどからも情報を取り入れると良いでしょう。
          <br />
          例えば、「テレビでウォーターサーバーの契約数が増えていると紹介されていた」「ある雑誌のアンケートでは水道水を飲むことに抵抗があると答えた人が4割を超えた」「友人はミネラルウォーターを定期便で頼んでいる」という情報も取り入れたのであれば、「世間は〜」と結論づけても問題ないでしょう。
          <br />
          また他にも情報数を増やすことも大切です。情報数は＝根拠であるため、根拠が増えれば増えるほど、信憑性が高く、より正解に近い結論を導くことができます。
          <br />
          {/* 結論 */}
          このように、情報の偏りをなくし多く揃えることで、より正解に近い結論を導くことができるようになります。
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法まとめ",
    content: (
      <>
        <Box width="1024px" display="flex" justifyContent="space-between" alignItems="center" mb="64px">
          {inductionSummaryCards.map((card, index) => (
            <ScrollAnimationBox key={index} delay={index / 2 + 0.25} duration={1} rootMargin={0} triggerOnce>
              <SummaryCard
                color={card.color}
                icon={card.icon}
                iconSize="48px"
                image={card.image}
                title={card.title}
                points={card.points}
              />
            </ScrollAnimationBox>
          ))}
        </Box>
        <Typography variant="h6" textAlign="center">
          スライドはここで終わりです。次は演習で学んだ知識を試してみましょう。
        </Typography>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "スライドはここまで",
    content: (
      <Box position="relative" width="900px" m="0 auto">
        <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
          <Box component="img" alt="celebration img" src={Celebration} />
        </Box>
        <Typography
          position="relative"
          component="div"
          variant="h5"
          border="double 5px"
          borderColor="typography.white"
          borderRadius="32px"
          color="typography.white"
          textAlign="center"
          p="64px 32px"
          sx={{
            background: "radial-gradient(circle, rgba(55, 55, 55, 1) 25%, rgba(55, 55, 55, 0.9))",
            textShadow: "1px 1px 2px #999",
          }}
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
          <Typography variant="h5" color="typography.white" display="flex" alignItems="center" justifyContent="center">
            右上の
            <CancelIcon fontSize="large" />
            でスライドを閉じて演習に進んでください。
          </Typography>
        </Typography>
      </Box>
    ),
  },
];
