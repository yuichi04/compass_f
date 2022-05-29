import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { MuiChip, MuiTypographyBold, MuiTypographyBoldAccent, MuiTypographyDiv } from "../../components/atoms";
import { Divider, Grid } from "@mui/material";

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
    borderItem: {
      bgcolor: "#f9fbe7",
      borderRadius: "4px",
      border: "1px solid #004d40",
      p: "4px",
      mb: "8px",
    },
  };
  const [contents, setContents] = useState([
    {
      title,
      sectionTitle: "ようこそ、ロジカルシンキング初級編へ",
      sentence: (
        <Box sx={{ position: "relative" }}>
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
            <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
              ※先にクイズを試されたい方はスライド右上の
              <CancelIcon fontSize="small" />
              マークからクイズに進めます。
            </Typography>
          </MuiTypographyDiv>
          <Box sx={{ position: "absolute", right: "-80px", top: "-160px" }}>
            <img src={require("../../assets/images/characters/guide/guide_normal_b.png")} alt="character" />
          </Box>
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
          これらはビジネスの現場において重宝されるスキルです。
          <br />
          つまり、 ロジカルシンキングを身につけることができれば、
          <MuiTypographyBoldAccent>「ビジネスマンとしての価値が上がる」</MuiTypographyBoldAccent>
          ということです。
        </MuiTypographyDiv>
      ),
      order: 1,
      className: "",
    },
    {
      title,
      sectionTitle: "ロジカルシンキング 2つの柱",
      sentence: (
        <MuiTypographyDiv>
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
          です。
          <br />
          簡単に説明すると以下のようになります。
          <br />
          <br />
          <Box bgcolor="#f9fbe7" p="32px" borderRadius="8px">
            <Box sx={{ display: "flex", alignItems: "center", mb: "16px" }}>
              <MuiTypographyBoldAccent>帰納法</MuiTypographyBoldAccent>
              <ArrowRightAltIcon fontSize="large" sx={{ mr: "8px" }} color="primary" />
              <MuiTypographyBoldAccent>
                いくつかの情報や考えから共通するパターンを見つけて結論を導き出す方法
              </MuiTypographyBoldAccent>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MuiTypographyBoldAccent>演繹法</MuiTypographyBoldAccent>
              <ArrowRightAltIcon fontSize="large" sx={{ mr: "8px" }} color="primary" />
              <MuiTypographyBoldAccent>
                一般論などの既にわかっていることにある情報や考えを当てはめて結論を導き出す方法
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
        </MuiTypographyDiv>
      ),
      order: 2,
      className: "",
    },
    {
      title,
      sectionTitle: "帰納法（1）",
      sentence: (
        <MuiTypographyDiv>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              それでは、「帰納法」について学んでいきます。
              <br />
              前のスライドで説明しましたが、帰納法は
              <MuiTypographyBoldAccent>
                「いくつかの情報や考えから共通するパターンを見つけ、一般論となる結論を導き出す方法」
              </MuiTypographyBoldAccent>
              です。
              <br /> 図で表すと、右の図のような構造になります。
              <br />
              実際に使ってみると、例えば、
              <Box sx={{ textAlign: "center", p: "16px" }}>
                「<MuiTypographyBold>東京都民の平均年収は高い</MuiTypographyBold>（情報A）」
                <br />「<MuiTypographyBold>大阪府民の平均年収は高い</MuiTypographyBold>（情報B）」
                <br />「<MuiTypographyBold>神奈川県民の平均年収は高い</MuiTypographyBold>（情報C）」
                <br />
                <ArrowDownwardIcon fontSize="large" />
                <br />「<MuiTypographyBold>大都市圏の平均年収は高い</MuiTypographyBold>（共通するパターン）」
                <br />
                <ArrowDownwardIcon fontSize="large" />
                <br />「<MuiTypographyBold>収入を多く得るには大都市圏で生活した方が良い</MuiTypographyBold>（結論）」
              </Box>
              <Typography variant="h6" textAlign="center">
                といった感じになります。もう少し具体的な例を見ていきましょう。
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ bgcolor: "#f9fbe7", borderRadius: "16px", p: "16px", pb: 0 }}>
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
      title,
      sectionTitle: "帰納法（2）",
      sentence: (
        <MuiTypographyDiv>
          <Grid container spacing={1}>
            <Grid item xs={1.5} display="flex" flexDirection="column" justifyContent="space-between">
              <MuiChip label="情報" color="primary" />
              <MuiChip label="共通するパターン" color="primary" />
              <MuiChip label="結論" color="primary" />
            </Grid>
            <Grid item xs={5} display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
              <Box>
                <Box sx={styles.borderItem}>
                  <Typography>
                    今度共有しようとしている資料はプロジェクト全体に影響を与える重要な内容が含まれている
                  </Typography>
                </Box>
                <Box sx={styles.borderItem}>
                  <Typography>
                    今度共有しようとしている資料は見ただけでは伝わりにくいニュアンスが含まれている
                  </Typography>
                </Box>
                <Box sx={styles.borderItem}>
                  <Typography>新しくプロジェクトに参加したメンバーとの意識の統一を図る必要性がある</Typography>
                </Box>
              </Box>
              <ArrowForwardIosIcon />
              <Box sx={styles.borderItem}>
                <Typography>
                  メールで共有するよりも顔を合わせたミーティングの方が情報をスムーズに伝えることができる
                </Typography>
              </Box>
              <ArrowForwardIosIcon />
              <Box sx={styles.borderItem}>
                <Typography>ミーティングをセッティングする</Typography>
              </Box>
            </Grid>
            <Grid item xs={5}></Grid>
          </Grid>
          {/* <Grid container textAlign="center" mb="8px">
            <Grid item xs={4}>
              <MuiChip label="情報" color="primary" />
            </Grid>
            <Grid item xs={4}>
              <MuiChip label="共通するパターン" color="primary" />
            </Grid>
            <Grid item xs={4}>
              <MuiChip label="結論" color="primary" />
            </Grid>
          </Grid>
          例1
          <Grid container textAlign="center">
            <Grid item xs={3.6}>
              <Box sx={styles.borderItem}>
                <Typography>
                  今度共有しようとしている資料はプロジェクト全体に影響を与える重要な内容が含まれている
                </Typography>
              </Box>
              <Box sx={styles.borderItem}>
                <Typography>今度共有しようとしている資料は見ただけでは伝わりにくいニュアンスが含まれている</Typography>
              </Box>
              <Box sx={styles.borderItem}>
                <Typography>新しくプロジェクトに参加したメンバーとの意識の統一を図る必要性がある</Typography>
              </Box>
            </Grid>
            <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
              <ArrowForwardIosIcon />
            </Grid>
            <Grid item xs={3.6} display="flex" alignItems="center" justifyContent="center">
              <Box sx={styles.borderItem}>
                <Typography>
                  メールで共有するよりも顔を合わせたミーティングの方が情報をスムーズに伝えることができる
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
              <ArrowForwardIosIcon />
            </Grid>
            <Grid item xs={3.6} display="flex" alignItems="center" justifyContent="center">
              <Box sx={styles.borderItem}>
                <Typography>ミーティングをセッティングする</Typography>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ m: "8px 0" }} />
          例2
          <Grid container textAlign="center">
            <Grid item xs={3.6}>
              <Box sx={styles.borderItem}>
                <Typography>
                  男女数百人にコーヒーに関するアンケートをとった結果、8割の人がコンビニでコーヒーを買うことに肯定的だった
                </Typography>
              </Box>
              <Box sx={styles.borderItem}>
                <Typography>コンビニでコーヒーを買う人は毎年少しずつ増加している</Typography>
              </Box>
              <Box sx={styles.borderItem}>
                <Typography>別のアンケートではカフェでコーヒーを買わないという人の割合が4割を超えた</Typography>
              </Box>
            </Grid>
            <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
              <ArrowForwardIosIcon />
            </Grid>
            <Grid item xs={3.6} display="flex" alignItems="center" justifyContent="center">
              <Box sx={styles.borderItem}>
                <Typography>時間はあまりかけず手軽にコーヒーを飲みたいという需要があると考えられる</Typography>
              </Box>
            </Grid>
            <Grid item xs={0.6} display="flex" alignItems="center" justifyContent="center">
              <ArrowForwardIosIcon />
            </Grid>
            <Grid item xs={3.6} display="flex" alignItems="center" justifyContent="center">
              <Box sx={styles.borderItem}>
                <Typography>コンビニのコーヒー需要は今後も伸びるだろう</Typography>
              </Box>
            </Grid>
          </Grid> */}
        </MuiTypographyDiv>
      ),
      order: 4,
      className: "",
    },
    {
      title,
      sectionTitle: "演繹法",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 5,
      className: "",
    },
    {
      title,
      sectionTitle: "帰納法と演繹法の組み合わせ",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 6,
      className: "",
    },
    {
      title,
      sectionTitle: "帰納法と演繹法の注意点",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 7,
      className: "",
    },
  ]);
  return { contents, setContents };
};

export default LogicalThinkingElementary;
