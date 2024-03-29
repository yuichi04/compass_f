// Modules
import { Box, Divider, Grid, Icon, Typography } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ForwardIcon from "@mui/icons-material/Forward";
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
          <Box p="16px 0 0">
            ロジカルシンキングは知識や前提条件から
            <Typography component="span" fontWeight={600}>
              「話を筋道立てて考えること」
            </Typography>
            です。
            <br />
            身につけることで、問題や課題に対して確実性の高い予測や仮説を立てることができるようになります。
            <br />
            そのため、ビジネスの現場でとても重宝されており、ビジネスマンとしての価値を上げるなら身につけるべきスキルであることは間違いありません。
          </Box>
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
            知識や前提は話を組み立てるための土台であり、そこに誤りや不足があっては正しい結論を導くことはできません。ロジカルシンキングを用いるときは、それらの確認が必要だということを忘れないようにしましょう。
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
          帰納法は「複数の情報から共通点を見つけて結論を導く思考法」で、ビジネスや日常などの課題や問題を解決したい場合や、情報を整理して法則性を見つけたりする場面で役立ちます。
          <br />
          帰納法は
          <Typography component="span" display="inline-flex" fontWeight={600}>
            「
            <Typography color="success.light" fontWeight={600}>
              1.解決したい問題や課題に対する情報を複数揃える
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
          の3ステップで考えていきます。
          <br />
          例えば、パン屋において「新しいヒット商品を作りたい」というケースでは、以下のように用いることができます。
          <Typography component="ul" bgcolor="secondaryBackgroundColor.cyan" p="16px" mb="16px" textAlign="center">
            <dl>
              <Typography component="dt" color="success.light" fontWeight={600}>
                1.解決したい問題や課題に対する情報を複数揃える
              </Typography>
              <dd>
                「SNSで話題のパン屋ではオートミールクロワッサン」「テレビで紹介されていたパン屋では大豆メロンパン」「地元の老舗店では無糖ヨーグルトドーナッツ」がそれぞれ人気商品である
              </dd>
            </dl>
            <ArrowDropDownIcon />
            <dl>
              <Typography component="dt" color="success.main" fontWeight={600}>
                2.共通点を見つける
              </Typography>
              <dd>
                世間では、高カロリーなパンにヘルシーな食材を組み合わせて、健康的でカロリーを抑えたパンが人気である
              </dd>
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
    slideTitle: "帰納法の使い方",
    content: (
      <>
        <SlideListItemContent
          title={
            <Box display="flex" alignItems="center">
              STEP①
              <ForwardIcon sx={{ m: "0 8px" }} />
              解決したい問題や課題に対する情報を複数揃える
            </Box>
          }
          image={InductionStepOne}
          icon={TipsAndUpdatesIcon}
          iconColor="warning.main"
          iconSize="32px"
          imageXs={3}
        >
          帰納法の最初のステップは
          <Typography component="span" color="success.main" fontWeight={600}>
            「解決したい問題や課題に対する情報を複数揃える」
          </Typography>
          ことです。
          <br />
          ポイントは
          <Typography component="span" fontWeight={600}>
            「幅広い範囲の情報を揃えること」
          </Typography>
          です。なぜなら、帰納法は多くのことに共通する特徴を見つけ、普遍的な結論を導き出す思考法であるためです。もし偏った情報から結論を導いてしまうと、信憑性のない結論になってしまいます。
          <br />
          以下の「今後の飲料水の需要は伸びるのか？」について考えた例をご覧ください。
          <Grid container bgcolor="secondaryBackgroundColor.red" p="8px 16px" mb="8px">
            <Grid item xs={2} display="flex" alignItems="center">
              <Typography fontWeight={600}>揃えた情報</Typography>
            </Grid>
            <Grid item xs={10} component="ul">
              <li>・友人Aはミネラルウォーターをよく飲んでいる</li>
              <li>・友人Bはウォーターサーバーを契約した</li>
              <li>・友人Cは水道水を飲むことに抵抗があると言っていた</li>
            </Grid>
            <Grid item xs={12} m="8px 0">
              <Divider />
            </Grid>
            <Grid item xs={2} display="flex" alignItems="center">
              <Typography fontWeight={600}>共通点</Typography>
            </Grid>
            <Grid item xs={10}>
              水道水より品質の良い水が求められている
            </Grid>
            <Grid item xs={2} display="flex" alignItems="center">
              <Typography fontWeight={600}>導き出した結論</Typography>
            </Grid>
            <Grid item xs={10}>
              今後も飲料水の需要は伸び続けるだろう
            </Grid>
          </Grid>
          この例では身の回りの情報のみで判断してしまっているため、信憑性のない結論になっています。改善するなら身の回りだけでなく、以下のようにテレビや雑誌、SNSなどからも情報を取り入れると良いでしょう。
          <Grid container bgcolor="secondaryBackgroundColor.cyan" p="8px 16px" mb="8px">
            <Grid item xs={2} display="flex" alignItems="center">
              <Typography fontWeight={600}>偏りの少ない情報</Typography>
            </Grid>
            <Grid item xs={10} component="ul">
              <li>・SNSでは健康のためにミネラルウォーターを飲んでいるという投稿がよくされている</li>
              <li>・テレビでウォーターサーバーの契約数が増えていると紹介されていた</li>
              <li>・多くの友人が水道水を飲むことに抵抗があると言っていた</li>
            </Grid>
          </Grid>
          そして他にも
          <Typography component="span" fontWeight={600}>
            情報数を増やすこと
          </Typography>
          も重要です。なぜなら、情報数はそのまま根拠になるため、根拠が増えれば増えるほど信憑性が高く、より確かな結論を導くことができるようになるからです。
          <br />
          以上から、より確かな結論を導くためには、
          <Typography component="span" fontWeight={600}>
            情報源の偏りに注意しつつ、できるだけ多くの情報を揃える
          </Typography>
          ようにしましょう。
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法の使い方",
    content: (
      <>
        <SlideListItemContent
          title={
            <Box display="flex" alignItems="center">
              STEP②
              <ForwardIcon sx={{ m: "0 8px" }} />
              共通点を見つける
            </Box>
          }
          image={InductionStepTwo}
          icon={TipsAndUpdatesIcon}
          iconColor="warning.main"
          iconSize="32px"
        >
          帰納法の2つ目のステップは揃えた情報から
          <Typography color="success.main" component="span" fontWeight={600}>
            「共通点を見つける」
          </Typography>
          ことです。
          <br />
          共通点は以下の順番で考えることで見つけることができます。
          <Box bgcolor="secondaryBackgroundColor.teal" p="8px" mb="16px">
            <Typography fontWeight={600} mb="8px">
              ステップ①　各情報ごとに主語とそれ以外の部分に分けて、それぞれの特徴を羅列する
            </Typography>
            <Typography fontWeight={600} mb="8px">
              ステップ②　主語は主語、それ以外の部分はそれ以外の部分で一番多い特徴を見つける
            </Typography>
            <Typography fontWeight={600}>
              ステップ③ 「主語で一番多い特徴」＋「それ以外の部分で一番多い特徴」という構造の文章を作る
            </Typography>
          </Box>
          <Typography>こうしてできあがった文章が共通点となります。以下の例をご覧ください。</Typography>
          <Box bgcolor="secondaryBackgroundColor.cyan" p="8px" mb="8px">
            <Box component="dl" mb="8px">
              <dt>情報</dt>
              <dd>
                「A.ヨーグルトを食べた翌日はお通じが良い」「B.味噌汁を飲むようになってからよく眠れるようになった」「C.キムチを食べるようになってから肌のトラブルが減った」
              </dd>
            </Box>
            <Box component="dl" mb="8px">
              <dt>ステップ①</dt>
              <dd>
                A.ヨーグルト→「発酵食品、乳酸菌が豊富、牛乳が原料」、それ以外の部分→「体調が良くなった」
                <br />
                B.味噌汁→「発酵食品、大豆が原料、汁物」、それ以外の部分→「体調が良くなった」
                <br />
                C.キムチ→「発酵食品、辛い、唐辛子が原料」、それ以外の部分→「体調が良くなった」
              </dd>
            </Box>
            <Box component="dl" mb="8px">
              <dt>ステップ②</dt>
              <dd>
                <Typography display="flex" alignItems="center">
                  <ForwardIcon />
                  主語＝「発酵食品」、それ以外の部分＝「体調が良くなった」
                </Typography>
              </dd>
            </Box>
            <Box component="dl" mb="8px">
              <dt>ステップ③</dt>
              <dd>
                <Typography display="flex" alignItems="center" sx={{ textDecoration: "underline solid #555" }}>
                  <ForwardIcon />
                  「発酵食品」を食べると「体調が良くなる」（←各情報の共通点）
                </Typography>
              </dd>
            </Box>
          </Box>
        </SlideListItemContent>
      </>
    ),
  },
  {
    courseTitle,
    slideTitle: "帰納法の使い方",
    content: (
      <>
        <SlideListItemContent
          title={
            <Box display="flex" alignItems="center">
              STEP③
              <ForwardIcon sx={{ m: "0 8px" }} />
              結論を導き出す
            </Box>
          }
          image={InductionStepThree}
          icon={TipsAndUpdatesIcon}
          iconColor="warning.main"
          iconSize="32px"
        >
          帰納法の最後のステップは共通点から
          <Typography component="span" color="success.main" fontWeight={600}>
            「結論を導き出す」
          </Typography>
          ことです。
          <br />
          結論は実際の問題解決に対してのアクションになります。そもそも何かしらの問題や悩みがあり、それを解決するために帰納法を用いるので、最終的には実際に取ることができるアクションを導く必要があります。
          <br />
          以下はSTEP②の共通点から結論を導いた例です。
          <Box bgcolor="secondaryBackgroundColor.cyan" p="8px" mb="16px">
            <Box component="dl" display="flex" alignItems="center">
              <Box component="dt" mr="24px">
                問題
              </Box>
              <dd>長く健康でいるために、体に良い食事を取り入れたい</dd>
            </Box>
            <Box component="dl" display="flex" alignItems="center">
              <Box component="dt" mr="8px">
                共通点
              </Box>
              <dd>発酵食品を食べると体調が良くなる</dd>
            </Box>
            <Box component="dl" display="flex" alignItems="center">
              <Box component="dt" mr="24px">
                結論
              </Box>
              <dd>納豆や味噌料理、ヨーグルトなどを食事に取り入れる</dd>
            </Box>
          </Box>
          そして、結論が導けたら、それが間違っていないか
          <Typography color="success.main" component="span" fontWeight={600}>
            「論理の飛躍」
          </Typography>
          を確認しましょう。
          <br />
          <Typography component="span" fontWeight={600}>
            「①結論+共通点」
          </Typography>
          と
          <Typography component="span" fontWeight={600}>
            「②共通点+揃えた情報」
          </Typography>
          がそれぞれ
          <Typography component="span" color="success.main" fontWeight={600}>
            「主張+根拠」
          </Typography>
          という構造になっていれば大丈夫です。
          <br />
          以下の例をご覧ください。この例では①と②がそれぞれ「主張+根拠」という構造になっています。
          <Box bgcolor="secondaryBackgroundColor.lime" p="8px" mb="8px">
            <Box component="dl">
              <dt>①結論+共通点</dt>
              <dd>「納豆や味噌料理、ヨーグルトなどを食事に取り入れる」+「発酵食品を食べると体調が良くなる」</dd>
            </Box>
            <Box component="dl">
              <dt>②共通点+情報</dt>
              <dd>「発酵食品を食べると体調が良くなる」+「ヨーグルトを食べた翌日はお通じが良い」</dd>
              <dd>「発酵食品を食べると体調が良くなる」+「味噌汁を飲むようになってからよく眠れるようになった」</dd>
              <dd>「発酵食品を食べると体調が良くなる」+「キムチを食べるようになってから肌のトラブルが減った」</dd>
            </Box>
          </Box>
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
          帰納法についてのスライドはここで終わりです。次は演習で学んだ知識を試してみましょう。
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
          border="double 4px"
          borderColor="primary.main"
          borderRadius="64px"
          color="typography.gray"
          textAlign="center"
          p="64px 32px"
          sx={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.7))",
            textShadow: "1px 1px 2px #ccc",
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
          <Typography variant="h5" color="typography.gray" display="flex" alignItems="center" justifyContent="center">
            右上の
            <CancelIcon fontSize="large" />
            でスライドを閉じて演習に進んでください。
          </Typography>
        </Typography>
      </Box>
    ),
  },
];
