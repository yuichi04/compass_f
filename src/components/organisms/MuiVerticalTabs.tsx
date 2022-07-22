import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={3.5}>
        <Typography variant="h6" fontWeight={600} display="flex" alignItems="center" justifyContent="center">
          <TouchAppIcon sx={{ fontSize: "28px", color: "#faa50a", mr: "4px" }} />
          クリックしてステップを選択
        </Typography>
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label={
              <Paper elevation={8} sx={{ bgcolor: "primary.main", color: "#fff", p: "8px", width: "280px" }}>
                <Typography variant="h6" fontWeight={600} color="#fff" display="flex" alignItems="center">
                  <LooksOneIcon sx={{ fontSize: "32px", mr: "8px" }} />
                  複数の情報を揃える
                </Typography>
              </Paper>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Paper elevation={8} sx={{ bgcolor: "primary.dark", color: "#fff", p: "8px", width: "280px" }}>
                <Typography variant="h6" fontWeight={600} color="#fff" display="flex" alignItems="center">
                  <LooksTwoIcon sx={{ fontSize: "32px", mr: "8px" }} />
                  共通点を見つける
                </Typography>
              </Paper>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Paper elevation={8} sx={{ bgcolor: "#004d40", color: "#fff", p: "8px", width: "280px" }}>
                <Typography variant="h6" fontWeight={600} color="#fff" display="flex" alignItems="center">
                  <Looks3Icon sx={{ fontSize: "32px", mr: "8px" }} />
                  結論を導き出す
                </Typography>
              </Paper>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Grid>
      <Grid item xs={8.5}>
        <TabPanel value={value} index={0}>
          <Typography
            variant="h6"
            component="div"
            fontWeight={600}
            display="flex"
            alignItems="center"
            sx={{ textDecoration: "underline solid #00aa99" }}
          >
            <LooksOneIcon sx={{ color: "primary.main", fontSize: "32px", mr: "4px" }} />
            複数の情報を揃える
          </Typography>
          <Typography className="fade_in" component="div" variant="subtitle1">
            最初のステップでは漏れや偏りなく情報を揃えます。帰納法で導く結論がどれだけ正しいかは
            <Typography component="span" color="primary.main">
              情報の揃え方
            </Typography>
            によって左右されます。漏れや偏りがある分だけ正解から離れた結論になってしまうので注意が必要です。
            <br />
            以下は帰納法を用いて「今後の飲料水の需要について」結論を導き出した例です。
            <Typography variant="subtitle1" sx={{ color: "#c62828" }} display="flex" alignItems="center" mt="4px">
              <ClearIcon sx={{ mr: "4px" }} />
              情報に偏りがある例
            </Typography>
            <Typography
              component="ol"
              p="8px"
              mb="8px"
              bgcolor="#ffebee"
              sx={{ listStyleType: "revert", listStylePosition: "inside" }}
            >
              <li>
                <Typography
                  component="span"
                  color="primary.main"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  情報
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", ml: "8px" }} />
                </Typography>
                「友人Aは最近ウォーターサーバーを契約した」「友人Bはよくミネラルウォーターを購入している」「友人Cは水道水は飲めないと言っていた」
              </li>
              <li>
                <Typography
                  component="span"
                  color="primary.dark"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  共通点
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「消費者は品質の良い水を求めるようになってきている」
              </li>
              <li>
                <Typography component="span" color="#004d40" fontWeight={600} display="inline-flex" alignItems="center">
                  結論
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「飲料水の需要は今後も伸び続けるだろう」
              </li>
            </Typography>
            この例では、身の回りの
            <Typography component="span" sx={{ textDecoration: "underline 1px #555" }}>
              偏った情報
            </Typography>
            だけで結論を導いてしまっています。これでは根拠が弱く、確実性の高い結論とは言えません。
            <Typography variant="subtitle1" sx={{ color: "#1665c0" }} display="flex" alignItems="center" mt="4px">
              <CircleOutlinedIcon sx={{ mr: "4px" }} />
              情報の偏りが少ない例
            </Typography>
            <Typography
              component="ol"
              p="8px"
              mb="8px"
              bgcolor="#e3f2fd"
              sx={{ listStyleType: "revert", listStylePosition: "inside" }}
            >
              <li>
                <Typography
                  component="span"
                  color="primary.main"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  情報
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", ml: "8px" }} />
                </Typography>
                「テレビでウォーターサーバーが人気だと紹介されていた」「同僚でミネラルウォーターを購入している人が増えた」「あるネットアンケートでは水道水を飲むことに抵抗があると答えた人が4割を超えた」
              </li>
              <li>
                <Typography
                  component="span"
                  color="primary.dark"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  共通点
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「消費者は品質の良い水を求めるようになってきている」
              </li>
              <li>
                <Typography component="span" color="#004d40" fontWeight={600} display="inline-flex" alignItems="center">
                  結論
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「飲料水の需要は今後も伸び続けるだろう」
              </li>
            </Typography>
            この例では、テレビ・身の回り・インターネットと
            <Typography component="span" sx={{ textDecoration: "underline 1px #555" }}>
              広い範囲の情報
            </Typography>
            で結論を導いています。そのため、確実性の高い結論を導くことができています。
            <br />
            情報はできるだけ広い範囲で、漏れなく・偏りなく揃えるようにしましょう。
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography
            variant="h6"
            component="div"
            fontWeight={600}
            display="flex"
            alignItems="center"
            sx={{ textDecoration: "underline solid #00766b" }}
          >
            <LooksTwoIcon sx={{ color: "primary.dark", fontSize: "32px", mr: "4px" }} />
            共通点を見つける
          </Typography>
          <Typography className="fade_in" variant="subtitle1" component="div">
            このステップでは、全ての情報に共通する特徴や性質などを見つけます。このとき、
            <Typography component="span" color="primary.main">
              できるだけ抽象度が高いこと
            </Typography>
            を共通点にするようにしましょう。抽象度が高くなればなるほど多くの物事に対して言える結論に、具体的になればなるほど少ない物事に対してしか言えない結論になります。ただし、あまりに抽象度が高いことを共通点にしてしまうと、誤った結論を導いてしまうため注意が必要です。
            <Typography variant="subtitle1" sx={{ color: "#c62828" }} display="flex" alignItems="center" mt="4px">
              <ClearIcon sx={{ mr: "4px" }} />
              抽象度が高すぎる例
            </Typography>
            <Typography
              component="ol"
              p="8px"
              mb="8px"
              bgcolor="#ffebee"
              sx={{ listStyleType: "revert", listStylePosition: "inside" }}
            >
              <li>
                <Typography
                  component="span"
                  color="primary.main"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  情報
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", ml: "8px" }} />
                </Typography>
                「レモンはクエン酸が豊富」「みかんはクエン酸が豊富」「グレープフルーツはクエン酸が豊富」
              </li>
              <li>
                <Typography
                  component="span"
                  color="primary.dark"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  共通点
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「
                <Typography component="span" fontWeight={600}>
                  フルーツ
                </Typography>
                はクエン酸が豊富」
              </li>
              <li>
                <Typography component="span" color="#004d40" fontWeight={600} display="inline-flex" alignItems="center">
                  結論
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「フルーツはすっぱい」
              </li>
            </Typography>
            この例では、各情報に対して抽象度が高い（＝分類が遠い）「フルーツ」を共通点にしてしまっているため、「フルーツはすっぱい」という間違った結論が導かれてしまっています。
            <Typography variant="subtitle1" sx={{ color: "#1665c0" }} display="flex" alignItems="center" mt="4px">
              <CircleOutlinedIcon sx={{ mr: "4px" }} />
              抽象度が適切な例
            </Typography>
            <Typography
              component="ol"
              p="8px"
              mb="8px"
              bgcolor="#e3f2fd"
              sx={{ listStyleType: "revert", listStylePosition: "inside" }}
            >
              <li>
                <Typography
                  component="span"
                  color="primary.main"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  情報
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", ml: "8px" }} />
                </Typography>
                「レモンはクエン酸が豊富」「みかんはクエン酸が豊富」「グレープフルーツはクエン酸が豊富」
              </li>
              <li>
                <Typography
                  component="span"
                  color="primary.dark"
                  fontWeight={600}
                  display="inline-flex"
                  alignItems="center"
                >
                  共通点
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「
                <Typography component="span" fontWeight={600}>
                  柑橘類
                </Typography>
                はクエン酸が豊富」
              </li>
              <li>
                <Typography component="span" color="#004d40" fontWeight={600} display="inline-flex" alignItems="center">
                  結論
                  <ArrowCircleRightIcon sx={{ color: "#555", fontSize: "16px", m: "0 4px" }} />
                </Typography>
                「柑橘類はすっぱい」
              </li>
            </Typography>
            この例では、各情報に対して抽象度が適切な（＝分類が近い）「柑橘類」を共通点にしているため、情報と共通点のつながりが強く、確実性の高い結論を導くことができています。
            <br />
            確実性高く、広い範囲で言える結論を導くために、共通点は
            <Typography component="span" sx={{ textDecoration: "underline solid #555" }}>
              抽象度が高くなりすぎないように
            </Typography>
            注意しましょう。
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography
            variant="h6"
            component="div"
            fontWeight={600}
            display="flex"
            alignItems="center"
            sx={{ textDecoration: "underline solid #004d40" }}
          >
            <Looks3Icon sx={{ color: "#004d40", fontSize: "32px", mr: "4px" }} />
            結論を導き出す
          </Typography>
          <Typography className="fade_in" variant="subtitle1" component="div">
            最後のステップでは、共通点から結論を導き出して論理が飛躍していないか確認します。
            <br />
            結論は共通点から無理なく言えることであれば複数になっても構いません。
            <br />
            また、論理の飛躍は
            <Typography component="span" display="inline-flex" fontWeight={600}>
              「
              <Typography color="#004d40" fontWeight={600}>
                結論
              </Typography>
              <ArrowRightIcon />
              <Typography color="primary.dark" fontWeight={600}>
                共通点
              </Typography>
              <ArrowRightIcon />
              <Typography color="primary.main" fontWeight={600}>
                情報
              </Typography>
              」
            </Typography>
            の順に
            <Typography component="span" fontWeight={600}>
              「なぜならば」
            </Typography>
            で文をつなぐことで確認できます。
            <Typography variant="subtitle1" fontWeight={600}>
              （例）
            </Typography>
            <Box p="8px" mb="16px" bgcolor="#fff8e1" textAlign="center">
              <Typography color="#004d40" fontWeight={600}>
                結論
              </Typography>
              トマトやニンジンを使った無糖デニッシュを作ったらヒットするかもしれない
              <Typography variant="h6" fontWeight={600} mt="16px">
                なぜならば、
              </Typography>
              <ArrowDropDown />
              <Typography color="primary.dark" fontWeight={600}>
                共通点
              </Typography>
              ヘルシーな材料と高カロリーなパンを組み合わせた「健康志向＆カロリー控えめなパン」がトレンド
              <Typography variant="h6" fontWeight={600} mt="16px">
                なぜならば、
              </Typography>
              <ArrowDropDown />
              <Typography color="primary.main" fontWeight={600}>
                情報
              </Typography>
              世間では「オートミールクロワッサン・大豆メロンパン・無糖ヨーグルトドーナッツ」が人気である
            </Box>
            このように、文章を繋げていき、論理に飛躍がなければ確実性の高い結論を導けたと言っても良いでしょう。
          </Typography>
        </TabPanel>
      </Grid>
    </Grid>
  );
}
