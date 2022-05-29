import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MuiButton, MuiTypographyBold, MuiTypographyBoldAccent, MuiTypographyDiv } from "../../components/atoms";
import { Grid } from "@mui/material";

const LogicalThinkingElementary = () => {
  const title = "ロジカルシンキング初級編";
  const styles = {
    list: {
      listStyle: "revert",
      listStylePosition: "inside",
      li: {
        mb: "12px",
        "&:last-child": {
          mb: 0,
        },
      },
    },
    bgcolorBox: {
      bgcolor: "#80cbc4",
      borderRadius: "4px",
      p: "4px",
    },
    bgcolorBoxLight: {
      bgcolor: "#b2dfdb",
      borderRadius: "4px",
      p: "4px",
      mb: "4px",
    },
    bgcolorBoxDark: {
      bgcolor: "#4db6ac",
      borderRadius: "4px",
      color: "#fff",
      p: "4px",
    },
  };
  const [contents, setContents] = useState([
    {
      title,
      sectionTitle: "ようこそ、ロジカルシンキング初級編へ",
      sentence: (
        <Box position="relative" textAlign="center">
          <Grid container>
            <Grid item xs={8}>
              <MuiTypographyDiv>
                ロジカルシンキング初級編では、以下の流れで学習を進めていきます。
                <br />
                <br />
                <Box component="ol" sx={styles.list}>
                  <li>
                    <MuiTypographyBoldAccent>ロジカルシンキングの基本をスライド形式で学ぶ</MuiTypographyBoldAccent>
                  </li>
                  <li>
                    <MuiTypographyBoldAccent>学んだ知識をクイズ形式で試す</MuiTypographyBoldAccent>
                  </li>
                </Box>
                <br />
                ビジネスマンに必要不可欠とも言われるロジカルシンキングの基本を学んでいきましょう！
                <br />
                それでは、次のスライドへ！
                <br />
                <br />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  ※先にクイズを試されたい方はスライド右上の
                  <CancelIcon fontSize="small" />
                  マークからクイズに進めます。
                </Typography>
              </MuiTypographyDiv>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ position: "absolute", right: "-64px", top: "-160px" }}>
              <img src={require("../../assets/images/characters/guide/guide_normal_b.png")} alt="character" />
            </Box>
          </Grid>
        </Box>
      ),
      order: 0,
      className: "",
    },
    {
      title,
      sectionTitle: "ロジカルシンキングを身につけるメリット",
      sentence: (
        <MuiTypographyDiv>
          <Box textAlign="center">
            さっそくですが、そもそもロジカルシンキングとは何でしょうか？
            <br />
            それはスバリ、<MuiTypographyBoldAccent>「話の筋道を立てて考えること」</MuiTypographyBoldAccent>です。
            <br />
            <br />
            では、なぜロジカルシンキングが必要になるのでしょうか？
            <br />
            それはロジカルシンキングには以下のように大きなメリットが2つあるからです。
            <br />
            <br />
            <Box bgcolor="#f9fbe7" p="32px" borderRadius="8px">
              <Box component="ol" sx={styles.list}>
                <li>
                  何か課題や問題を解決するときに
                  <MuiTypographyBoldAccent className="text-decoration_underline-yellow">
                    「正解にたどりつきやすくなる」
                  </MuiTypographyBoldAccent>
                </li>
                <li>
                  誰かに何かを伝えるときに
                  <MuiTypographyBoldAccent className="text-decoration_underline-yellow">
                    「話が伝わりやすくなる」
                  </MuiTypographyBoldAccent>
                </li>
              </Box>
            </Box>
            <br />
            これらはビジネスの現場において重宝されるスキルです。つまり、
            <br />
            ロジカルシンキングを身につけることができれば、
            <MuiTypographyBoldAccent>「ビジネスマンとしての価値が上がる」</MuiTypographyBoldAccent>
            ということです。
          </Box>
        </MuiTypographyDiv>
      ),
      order: 1,
      className: "",
    },
    {
      title: "帰納法と演繹法",
      sectionTitle: "ロジカルシンキング 2つの柱",
      sentence: (
        <MuiTypographyDiv>
          <Box textAlign="center">
            ロジカルシンキングが「話を筋道立てて考えること」ということは分かりました。
            <br />
            では、具体的にどうすればロジカルシンキングができるのでしょうか？代表的な2つの手法をご紹介します。
            <br />
            それは
            <MuiTypographyBoldAccent className="text-decoration_underline-yellow">
              「帰納法
              <Typography variant="body2" component="span">
                （きのう法）
              </Typography>
              」
            </MuiTypographyBoldAccent>
            と
            <MuiTypographyBoldAccent className="text-decoration_underline-yellow">
              「演繹法
              <Typography variant="body2" component="span">
                （えんえき法）
              </Typography>
              」
            </MuiTypographyBoldAccent>
            です。簡単に説明すると以下のようになります。
            <br />
            <br />
            <Box bgcolor="#f9fbe7" p="32px" borderRadius="8px">
              <Box display="flex" alignItems="center" mb="24px" justifyContent="center">
                帰納法とは
                <MuiTypographyBoldAccent>
                  「いくつかの情報や考えから共通するパターンを見つけて、結論を導き出す方法」
                </MuiTypographyBoldAccent>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                演繹法とは
                <MuiTypographyBoldAccent>
                  「一般論などの既にわかっていることにある情報や考えを当てはめて、結論を導き出す方法」
                </MuiTypographyBoldAccent>
              </Box>
            </Box>
            <br />
            これらはロジカルシンキングにおける2つの柱とも言える重要な考え方です。
            <br />
            これらをしっかりと身につけることでロジカルシンキングができるようになります。
            <br />
            <br />
            まずは帰納法について学んでいきましょう。
          </Box>
        </MuiTypographyDiv>
      ),
      order: 2,
      className: "",
    },
    {
      title: "帰納法の使い方を確認しましょう！",
      sectionTitle: "帰納法（1）",
      sentence: (
        <MuiTypographyDiv>
          <Grid container spacing={4}>
            <Grid item xs={6} textAlign="center">
              それでは、「帰納法」について学んでいきます。
              <br />
              帰納法は
              <MuiTypographyBoldAccent>
                「いくつかの情報や考えから共通するパターンを見つけて、結論を導き出す方法」
              </MuiTypographyBoldAccent>
              と説明しましたが、
              <br />
              図で表すと、右の図のような構造になります。 実例としては、
              <Box p="16px">
                「<MuiTypographyBold>東京都民の平均年収は高い</MuiTypographyBold>（情報A）」
                <br />「<MuiTypographyBold>大阪府民の平均年収は高い</MuiTypographyBold>（情報B）」
                <br />「<MuiTypographyBold>神奈川県民の平均年収は高い</MuiTypographyBold>（情報C）」
                <br />
                <KeyboardArrowDownIcon fontSize="large" />
                <br />「<MuiTypographyBold>大都市圏の平均年収は高い</MuiTypographyBold>（共通するパターン）」
                <br />
                <KeyboardArrowDownIcon fontSize="large" />
                <br />「<MuiTypographyBold>収入を多く得るには大都市圏で生活した方が良い</MuiTypographyBold>（結論）」
              </Box>
              <Typography variant="h6" textAlign="center">
                といった感じになります。もう少し例を見ていきましょう。
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box bgcolor="#f9fbe7" borderRadius="16px" p="16px" pb={0}>
                <img
                  src={require("../../assets/images/charts/inductive03.png")}
                  alt="inductive chart"
                  style={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </MuiTypographyDiv>
      ),
      order: 3,
      className: "",
    },
    {
      title: "帰納法の使い方を確認しましょう！",
      sectionTitle: "帰納法（2）",
      sentence: (
        <MuiTypographyDiv>
          次はビジネスシーンでの活用例です。
          <Grid container textAlign="center" spacing={6}>
            <Grid item xs={6} display="flex" flexDirection="column" justifyContent="space-between">
              <MuiTypographyBold>（例1）</MuiTypographyBold>
              <Box sx={styles.bgcolorBoxLight}>
                今度共有しようとしている資料はプロジェクト全体に影響を与える重要な内容が含まれている
              </Box>
              <Box sx={styles.bgcolorBoxLight}>
                今度共有しようとしている資料は見ただけでは伝わりにくいニュアンスが含まれている
              </Box>
              <Box sx={styles.bgcolorBoxLight}>
                新しくプロジェクトに参加したメンバーとの意識の統一を図る必要性がある
              </Box>
              <Box textAlign="center">
                <KeyboardArrowDownIcon fontSize="large" />
              </Box>
              <Box sx={styles.bgcolorBox}>
                メールで共有するよりも顔を合わせたミーティングの方が情報をスムーズに伝えることができる
              </Box>
              <Box textAlign="center">
                <KeyboardArrowDownIcon fontSize="large" />
              </Box>
              <Box sx={styles.bgcolorBoxDark}>ミーティングをセッティングする</Box>
            </Grid>

            <Grid item xs={6} display="flex" flexDirection="column" justifyContent="space-between">
              <MuiTypographyBold>（例2）</MuiTypographyBold>
              <Box sx={styles.bgcolorBoxLight}>
                男女数百人にコーヒーに関するアンケートをとった結果、8割の人がコンビニでコーヒーを買うことに肯定的だった
              </Box>
              <Box sx={styles.bgcolorBoxLight}>コンビニでコーヒーを買う人は毎年少しずつ増加している</Box>
              <Box sx={styles.bgcolorBoxLight}>
                別のアンケートではカフェでコーヒーを買わないという人の割合が4割を超えた
              </Box>
              <Box textAlign="center">
                <KeyboardArrowDownIcon fontSize="large" />
              </Box>
              <Box sx={styles.bgcolorBox}>時間はあまりかけず手軽にコーヒーを飲みたいという需要があると考えられる</Box>
              <Box textAlign="center">
                <KeyboardArrowDownIcon fontSize="large" />
              </Box>
              <Box sx={styles.bgcolorBoxDark}>コンビニのコーヒー需要は今後も伸びるだろう</Box>
            </Grid>
          </Grid>
        </MuiTypographyDiv>
      ),
      order: 4,
      className: "",
    },
    {
      title,
      sectionTitle: "ここでスライドは終わりです",
      sentence: (
        <Box position="relative" textAlign="center">
          <Grid container>
            <Grid item xs={8}>
              <MuiTypographyDiv>
                以上で帰納法についてのスライドは終わりです。
                <br />
                いかがでしょうか？何となくイメージはできるようになりましたか？
                <br />
                では、さっそくクイズで試してみましょう！
                <br />
                <br />
                <MuiButton variant="contained" color="primary">
                  クイズに進む
                </MuiButton>
              </MuiTypographyDiv>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ position: "absolute", right: "-64px", top: "-160px" }}>
              <img src={require("../../assets/images/characters/guide/guide_smile_a.png")} alt="character" />
            </Box>
          </Grid>
        </Box>
      ),
      order: 5,
      className: "",
    },
  ]);
  return { contents, setContents };
};

export default LogicalThinkingElementary;
