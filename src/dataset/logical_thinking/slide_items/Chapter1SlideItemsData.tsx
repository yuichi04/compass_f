import { useState } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowCircleRightSharpIcon from "@mui/icons-material/ArrowCircleRightSharp";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import CancelIcon from "@mui/icons-material/Cancel";
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AirIcon from "@mui/icons-material/Air";
import { Grid, Paper } from "@mui/material";
import InThought from "../../../assets/images/illustrations/inthought.svg";
import Merit from "../../../assets/images/illustrations/merit.svg";
import Warning from "../../../assets/images/illustrations/warning.svg";

const SArrowDown = styled.div`
  position: relative;
  width: 4px;
  height: 40px;
  background: #999;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 4px;
    height: 16px;
    background: #999;
    transform-origin: bottom;
  }
  &::before {
    transform: rotateZ(-45deg);
  }
  &::after {
    transform: rotateZ(45deg);
  }
`;
const SArrowRight = styled.div`
  position: relative;
  width: 50px;
  height: 4px;
  background: #999;
  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    background: #999;
    width: 16px;
    height: 4px;
    transform-origin: right;
  }
  &::before {
    transform: rotateZ(45deg);
  }
  &::after {
    transform: rotateZ(-45deg);
  }
`;
const SVerticalLine = styled.div`
  position: relative;
  width: 4px;
  height: 128px;
  background: #999;
  &::before {
    content: "";
    position: absolute;
    top: 62px;
    left: 0;
    width: 155px;
    height: 4px;
    background: #999;
  }
`;

const Chapter1SlideItemsData = () => {
  const title = "ロジカルシンキング基本編「帰納法」";
  const [slideItems, setSlideItems] = useState([
    {
      order: 0,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングを身につけよう！",
      sentence: (
        <Grid container>
          <Grid item xs={8}>
            <Paper
              elevation={8}
              sx={{ position: "relative", bgcolor: "#fff", border: "2px solid #b2dfdb", p: "40px 32px 32px" }}
            >
              <Paper
                elevation={8}
                sx={{
                  position: "absolute",
                  top: "-24px",
                  left: "-12px",
                  bgcolor: "primary.main",
                  p: "8px 16px",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                <Box display="flex" alignItems="center">
                  <Typography variant="h5" component="span" color="#fff" fontWeight={600} mr="8px">
                    本コースの学習の流れ
                  </Typography>
                  <AirIcon sx={{ color: "#fff", fontSize: "32px" }} />
                </Box>
              </Paper>
              ロジカルシンキング基本編は以下の流れで学習を進めていきます。
              <Box display="flex" alignItems="center" mt="32px" mb="16px">
                <LooksOneIcon sx={{ fontSize: "32px", color: "primary.main", mr: "8px" }} />
                <Typography variant="h5" fontWeight={600}>
                  スライド形式でロジカルシンキングに関する知識をインプットする
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb="32px">
                <LooksTwoIcon sx={{ fontSize: "32px", color: "primary.main", mr: "8px" }} />
                <Typography variant="h5" fontWeight={600}>
                  インプットした知識を演習でアウトプットする
                </Typography>
              </Box>
              ロジカルシンキングはビジネスで活躍する上で欠かせないスキルです。
              <br />
              この機会にしっかりと身につけましょう。
              <br />
              <br />
              それでは画面右端のボタンを押して次のスライドへ行きましょう。
              <br />
              <br />
              <Typography variant="body2" color="text.secondary" display="flex" alignItems="center">
                ※スライド学習をスキップして演習に進みたい場合は右上の
                <CancelIcon fontSize="small" />
                をクリックしてください。
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} height="100%" position="relative">
            <Box
              component="img"
              alt="character"
              src={require("../../../assets/images/characters/guide/guide_normal_b.png")}
              position="absolute"
              top="-128px"
              right="-64px"
            />
          </Grid>
        </Grid>
      ),
    },
    {
      order: 1,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングについて",
      sentence: (
        <Box>
          <Paper elevation={8} sx={{ position: "relative", p: "36px 32px 12px", border: "2px solid #b2dfdb" }}>
            <Paper
              elevation={8}
              sx={{
                position: "absolute",
                top: "-24px",
                left: "-12px",
                bgcolor: "primary.main",
                p: "8px 16px",
                borderRadius: "4px",
                display: "inline-block",
              }}
            >
              <Box display="flex" alignItems="center">
                <Typography variant="h5" component="span" color="#fff" fontWeight={600}>
                  ロジカルシンキングとは？
                </Typography>
                <PsychologyIcon sx={{ color: "#fff", fontSize: "32px" }} />
              </Box>
            </Paper>
            ロジカルシンキングとは知識や前提条件をもとに
            <Typography variant="h6" component="span" color="primary.main" fontWeight={600}>
              「話を筋道立てて考える思考法」
            </Typography>
            のことを言います。
            <br />
            ロジカルシンキングを身につけるということはつまり、
            <Typography variant="h6" component="span" fontWeight={600}>
              話を筋道立てて考えられるようになる
            </Typography>
            ということです。
            <br />
            では、身につけることでどんなメリットがあるのでしょうか？
          </Paper>
          <Box textAlign="center">
            <ArrowDropDownIcon sx={{ fontSize: "80px", color: "#666" }} />
          </Box>
          <Paper elevation={8} sx={{ position: "relative", p: "36px 32px 16px", border: "2px solid #b2dfdb" }}>
            <Paper
              elevation={8}
              sx={{
                position: "absolute",
                top: "-24px",
                left: "-12px",
                bgcolor: "primary.main",
                color: "#fff",
                p: "8px 16px",
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                メリットと注意点
              </Typography>
            </Paper>
            <Box mb="24px">
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
              は避けて通れないと思いますが、これらはロジカルシンキングを身につけていると効率良く対処することができます。
              <br />
              そのためロジカルシンキングができる人材は実際のビジネスの現場において非常に重宝されており、もしビジネスマンとしての価値を上げたいのであれば身につけるべきスキルであることは間違いありません。
            </Box>
            <Box>
              ただし、ロジカルシンキングを使うときに注意しなくてはならないことがあります。
              <br />
              それは
              <Typography variant="h6" component="span" fontWeight={600}>
                知識や前提に間違いや不足があると
              </Typography>
              <Typography variant="h6" component="span" fontWeight={600} color="#b33e5c">
                誤った結論を導いてしまう
              </Typography>
              ということです。
              <br />
              ロジカルシンキングを使うときにはそれらの間違いや不足がないかチェックする必要があることを忘れないようにしましょう。
              <br />
              <Typography variant="body2" color="text.secondary" display="flex" alignItems="center" mt="8px">
                ※注意点をカバーする方法については、ロジカルシンキング基本編「MECE」にて学ぶことができます。
              </Typography>
            </Box>
          </Paper>
        </Box>
      ),
    },
    {
      order: 2,
      className: "",
      title,
      sectionTitle: "ロジカルシンキングの要点",
      sentence: (
        <>
          <Grid container spacing={5} mb="48px">
            <Grid item xs={4}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: "24px",
                  bgcolor: "#fff",
                }}
              >
                <Box position="absolute" top="-24px" left="-24px">
                  <LooksOneIcon sx={{ fontSize: "64px" }} />
                </Box>
                <Typography variant="h5" fontWeight={600} mb="16px" sx={{ textDecoration: "underline double #00aa99" }}>
                  ロジカルシンキングとは
                </Typography>
                <Box display="flex" alignItems="center" mb="32px">
                  <ArrowCircleRightSharpIcon sx={{ mr: "16px" }} />
                  <Typography variant="h6" textAlign="center">
                    知識や前提をもとに
                    <br />
                    <Typography variant="h6" component="span" fontWeight={600}>
                      話を筋道立てて考える思考法
                    </Typography>
                  </Typography>
                </Box>
                <Box height="320px">
                  <Box component="img" src={InThought} alt="inthought" maxWidth="100%" maxHeight="100%" />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: "24px",
                  bgcolor: "#fff",
                }}
              >
                <Box position="absolute" top="-24px" left="-24px">
                  <LooksTwoIcon sx={{ fontSize: "64px" }} />
                </Box>
                <Typography variant="h5" fontWeight={600} mb="16px" sx={{ textDecoration: "underline double #b33e5c" }}>
                  メリット
                </Typography>
                <Box display="flex" alignItems="center">
                  <ArrowCircleRightSharpIcon sx={{ mr: "16px" }} />
                  <Typography variant="h6" fontWeight={600} textAlign="center">
                    説明が上手になる
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mb="32px">
                  <ArrowCircleRightSharpIcon sx={{ mr: "16px" }} />
                  <Typography variant="h6" fontWeight={600} textAlign="center">
                    問題解決力がつく
                  </Typography>
                </Box>
                <Box height="320px">
                  <Box component="img" src={Merit} alt="merit" maxWidth="100%" maxHeight="100%" />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: "24px",
                  bgcolor: "#fff",
                }}
              >
                <Box position="absolute" top="-24px" left="-24px">
                  <Looks3Icon sx={{ fontSize: "64px" }} />
                </Box>
                <Typography variant="h5" fontWeight={600} mb="16px" sx={{ textDecoration: "underline double #faa50a" }}>
                  注意点
                </Typography>
                <Box display="flex" alignItems="center" mb="32px">
                  <ArrowCircleRightSharpIcon sx={{ mr: "16px" }} />
                  <Typography variant="h6" textAlign="center">
                    正しい結論を導くために
                    <br />
                    <Typography variant="h6" component="span" textAlign="center" fontWeight={600}>
                      知識や前提の誤りに注意する
                    </Typography>
                  </Typography>
                </Box>
                <Box height="320px">
                  <Box component="img" src={Warning} alt="warning" maxWidth="100%" minHeight="100%" />
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Typography variant="h6" textAlign="center" fontWeight={600}>
            それではロジカルシンキングを使うための具体的な方法について学んでいきましょう。
          </Typography>
        </>
      ),
    },
    {
      order: 3,
      className: "",
      title,
      sectionTitle: "ロジカルシンキング2つの柱",
      sentence: (
        <>
          <Typography component="div" variant="h6" fontWeight={600} textAlign="center">
            ロジカルシンキングには2つの柱と言われている思考法があります。
            <br />
            それは「
            <Typography
              variant="h5"
              component="span"
              color="primary.main"
              fontWeight={600}
              className="text-decoration_underline-yellow"
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
              color="primary.main"
              fontWeight={600}
              className="text-decoration_underline-yellow"
            >
              演繹法
            </Typography>
            <Typography variant="body2" component="span" color="text.secondary" fontWeight={600}>
              （えんえき法）
            </Typography>
            」です。
            <br />
            この2つを理解することはロジカルシンキングを身につける上で欠かせません。
          </Typography>
          <Box textAlign="center" mb="16px">
            <ArrowDropDownIcon sx={{ fontSize: "80px", color: "#666" }} />
          </Box>
          <Grid container spacing={7}>
            <Grid item xs={6} textAlign="center">
              <Paper elevation={8} sx={{ position: "relative", p: "48px 0 32px", border: "1px solid #83c3f7" }}>
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-32px",
                    left: "-16px",
                    p: "8px 16px",
                    bgcolor: "#83c3f7",
                    color: "#fff",
                  }}
                >
                  <Typography variant="h4" fontWeight={600}>
                    帰納法
                  </Typography>
                </Paper>
                <Box display="flex" alignItems="center" mb="32px" justifyContent="center">
                  <CheckCircleIcon sx={{ fontSize: "24px", mr: "4px", color: "#83c3f7" }} />
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    fontWeight={600}
                    sx={{ textDecoration: "underline double #83c3f7" }}
                  >
                    複数の情報から共通点を探し出し結論を導く方法
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                  <Box display="flex">
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Paper elevation={8} sx={{ p: "8px 16px", bgcolor: "#666", color: "#fff", width: "100px" }}>
                        情報A
                      </Paper>
                      <Box width="4px" height="32px" bgcolor="#999" />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Paper
                        elevation={8}
                        sx={{ m: "0 32px", p: "8px 16px", bgcolor: "#666", color: "#fff", width: "100px" }}
                      >
                        情報B
                      </Paper>
                      <Box width="4px" height="32px" bgcolor="#999" />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <Paper elevation={8} sx={{ p: "8px 16px", bgcolor: "#666", color: "#fff", width: "100px" }}>
                        情報C
                      </Paper>
                      <Box width="4px" height="32px" bgcolor="#999" />
                    </Box>
                  </Box>
                  <Box width="268px" height="4px" bgcolor="#999" />
                  <SArrowDown />
                  <Paper elevation={8} sx={{ p: "8px 0", bgcolor: "primary.light", color: "#fff", width: "100px" }}>
                    共通点
                  </Paper>
                  <SArrowDown />
                  <Paper elevation={8} sx={{ p: "8px 16px", bgcolor: "primary.dark", color: "#fff", width: "100px" }}>
                    結論
                  </Paper>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6} textAlign="center">
              <Paper
                elevation={8}
                sx={{ height: "100%", position: "relative", p: "48px 0 32px", border: "1px solid #c2647c" }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-32px",
                    left: "-16px",
                    p: "8px 16px",
                    bgcolor: "#c2647c",
                    color: "#fff",
                  }}
                >
                  <Typography variant="h4" fontWeight={600}>
                    演繹法
                  </Typography>
                </Paper>
                <Box display="flex" alignItems="center" mb="32px" justifyContent="center">
                  <CheckCircleIcon sx={{ fontSize: "24px", color: "#c2647c", mr: "4px" }} />
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    fontWeight={600}
                    sx={{ textDecoration: "underline double #c2647c" }}
                  >
                    自分の考えを一般論に当てはめて結論を導く方法
                  </Typography>
                </Box>
                <Box sx={{ transform: "translateX(32px)" }}>
                  <Grid container>
                    <Grid item xs={6} display="flex" flexDirection="column" alignItems="center">
                      <Paper elevation={8} sx={{ width: "128px", p: "8px 0", bgcolor: "primary.light", color: "#fff" }}>
                        一般論
                      </Paper>
                      <SVerticalLine />
                      <Paper elevation={8} sx={{ width: "128px", p: "8px 0", bgcolor: "primary.light", color: "#fff" }}>
                        自分の考え
                      </Paper>
                    </Grid>
                    <Grid item xs={6} display="flex" alignItems="center">
                      <Box display="flex" alignItems="center">
                        <SArrowRight />
                        <Paper
                          elevation={8}
                          sx={{ width: "128px", p: "8px 0", bgcolor: "primary.dark", color: "#fff" }}
                        >
                          結論
                        </Paper>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </>
      ),
    },
    {
      order: 4,
      className: "",
      title,
      sectionTitle: "ロジカルシンキング2つの柱",
      sentence: (
        <Box position="relative">
          <Typography variant="h6" fontWeight={600} textAlign="center">
            以下の例で帰納法・演繹法それぞれの使い方をさっと確認しましょう。以降は「帰納法」について具体的に学んでいきます。
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="48px"
          >
            ※「演繹法」については、ロジカルシンキング基本編「演繹法」にて学ぶことができます。
          </Typography>
          <Grid container spacing={6} mb="32px">
            <Grid item xs={6}>
              <Paper elevation={8} sx={{ position: "relative", p: "32px 0 24px", border: "1px solid #83c3f7" }}>
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-24px",
                    left: "-12px",
                    p: "8px 16px",
                    bgcolor: "#83c3f7",
                    color: "#fff",
                    display: "inline-block",
                  }}
                >
                  <Typography variant="h5" fontWeight={600}>
                    帰納法
                  </Typography>
                </Paper>
                <Box textAlign="center">
                  <Box component="dl">
                    <dt>情報</dt>
                    <Box display="flex" justifyContent="space-around">
                      <Paper
                        elevation={8}
                        component="dd"
                        sx={{
                          borderRadius: "100%",
                          bgcolor: "#b33e5c",
                          color: "#fff",
                          height: "64px",
                          width: "124px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body1" fontWeight={600}>
                          りんごは甘い
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={8}
                        component="dd"
                        sx={{
                          borderRadius: "100%",
                          bgcolor: "#fbb73b",
                          color: "#fff",
                          height: "64px",
                          width: "124px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body1" fontWeight={600}>
                          みかんは甘い
                        </Typography>
                      </Paper>
                      <Paper
                        elevation={8}
                        component="dd"
                        sx={{
                          borderRadius: "100%",
                          bgcolor: "#8561c5",
                          color: "#fff",
                          height: "64px",
                          width: "124px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body1" fontWeight={600}>
                          ぶどうは甘い
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                  <Box textAlign="center">
                    <ArrowDropDownIcon sx={{ color: "#666", fontSize: "64px" }} />
                  </Box>
                  <Box component="dl" display="flex" flexDirection="column" alignItems="center">
                    <dt>共通点</dt>
                    <Paper
                      elevation={8}
                      component="dd"
                      sx={{
                        borderRadius: "100%",
                        bgcolor: "primary.light",
                        color: "#fff",
                        height: "64px",
                        width: "124px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        フルーツである
                      </Typography>
                    </Paper>
                  </Box>
                  <Box textAlign="center">
                    <ArrowDropDownIcon sx={{ color: "#666", fontSize: "64px" }} />
                  </Box>
                  <Box component="dl" display="flex" flexDirection="column" alignItems="center">
                    <dt>結論</dt>
                    <Paper
                      component="dd"
                      elevation={8}
                      sx={{
                        borderRadius: "100%",
                        bgcolor: "primary.dark",
                        color: "#fff",
                        height: "64px",
                        width: "124px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="body1" fontWeight={600}>
                        フルーツは甘い
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={8}
                sx={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #c2647c",
                }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    position: "absolute",
                    top: "-24px",
                    left: "-12px",
                    p: "8px 16px",
                    bgcolor: "#c2647c",
                    color: "#fff",
                    display: "inline-block",
                  }}
                >
                  <Typography variant="h5" fontWeight={600}>
                    演繹法
                  </Typography>
                </Paper>
                <Grid container display="flex" justifyContent="space-around">
                  <Grid item xs={5.5}>
                    <Box component="dl" display="flex" flexDirection="column" alignItems="center">
                      <dt>一般論</dt>
                      <Paper
                        component="dd"
                        elevation={8}
                        sx={{
                          borderRadius: "100%",
                          bgcolor: "primary.light",
                          color: "#fff",
                          height: "160px",
                          width: "160px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body1" fontWeight={600}>
                          フルーツは甘い
                        </Typography>
                      </Paper>
                    </Box>
                    <br />
                    <br />
                    <Box component="dl" display="flex" flexDirection="column" alignItems="center">
                      <dt>自分の考え</dt>
                      <Paper
                        component="dd"
                        elevation={8}
                        sx={{
                          borderRadius: "100%",
                          bgcolor: "primary.light",
                          color: "#fff",
                          height: "160px",
                          width: "160px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body1" fontWeight={600}>
                          メロンは甘い
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                  <Grid item xs={1} display="flex" alignItems="center" justifyContent="center">
                    <ArrowRightIcon sx={{ color: "#666", fontSize: "128px" }} />
                  </Grid>
                  <Grid item xs={5.5} display="flex" alignItems="center" justifyContent="center">
                    <Box component="dl" display="flex" flexDirection="column" alignItems="center">
                      <dt>結論</dt>
                      <Paper
                        component="dd"
                        elevation={8}
                        sx={{
                          borderRadius: "100%",
                          bgcolor: "primary.dark",
                          color: "#fff",
                          height: "160px",
                          width: "160px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography variant="body1" fontWeight={600} textAlign="center">
                          メロンは
                          <br />
                          フルーツである
                        </Typography>
                      </Paper>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ),
    },
    {
      order: 5,
      className: "",
      title,
      sectionTitle: "帰納法",
      sentence: (
        // <Box textAlign="center" position="absolute" top="35%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
        //   <MuiTypographyDiv>
        //     いかがでしょうか？何となくイメージはできるようになりましたか？
        //     <br />
        //     それでは次は問題に挑戦してみましょう。
        //   </MuiTypographyDiv>
        // </Box>
        <>
          <Box mb="16px">
            <Typography
              variant="h5"
              component="span"
              fontWeight={600}
              sx={{ textDecoration: "underline double #00766b" }}
            >
              帰納法
            </Typography>
          </Box>
        </>
      ),
    },
  ]);
  return { slideItems, setSlideItems };
};

export default Chapter1SlideItemsData;
