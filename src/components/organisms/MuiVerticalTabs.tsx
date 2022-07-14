import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Grid, Paper } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import StarsIcon from "@mui/icons-material/Stars";
import ClearIcon from "@mui/icons-material/Clear";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import TouchAppIcon from "@mui/icons-material/TouchApp";
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
      <Grid item xs={3.7}>
        <Typography component="div" display="flex" pl="48px" mt="16px">
          <TouchAppIcon
            sx={{
              color: "#fff",
              fontSize: "28px",
              transform: "translateY(-4px)",
              bgcolor: "#4ab7ff",
              borderRadius: "100%",
              p: "4px",
              mr: "8px",
            }}
          />
          クリックして各ステップを確認
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
              <Paper elevation={8} sx={{ bgcolor: "primary.main", color: "#fff", p: "8px 24px", width: "320px" }}>
                <Typography variant="h5" fontWeight={600} color="#fff" display="flex" alignItems="center">
                  <LooksOneIcon sx={{ fontSize: "40px", mr: "8px" }} />
                  情報を揃える
                </Typography>
              </Paper>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <Paper elevation={8} sx={{ bgcolor: "primary.dark", color: "#fff", p: "8px 24px", width: "320px" }}>
                <Typography variant="h5" fontWeight={600} color="#fff" display="flex" alignItems="center">
                  <LooksTwoIcon sx={{ fontSize: "40px", mr: "8px" }} />
                  共通点を見つける
                </Typography>
              </Paper>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <Paper elevation={8} sx={{ bgcolor: "#004d40", color: "#fff", p: "8px 24px", width: "320px" }}>
                <Typography variant="h5" fontWeight={600} color="#fff" display="flex" alignItems="center">
                  <Looks3Icon sx={{ fontSize: "40px", mr: "8px" }} />
                  結論を導き出す
                </Typography>
              </Paper>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Grid>
      <Grid item xs={8.3} pl="8px">
        <TabPanel value={value} index={0}>
          <Typography variant="h6" component="div" fontWeight={600} display="flex" alignItems="center">
            <LooksOneIcon sx={{ color: "primary.main", fontSize: "32px", mr: "4px" }} />
            情報を揃える
          </Typography>
          <Typography variant="body1" component="div">
            まず最初に漏れや偏りなく情報を揃えます。帰納法で導く結論がどれだけ正しいかは
            <Typography component="span" color="primary.main">
              情報の揃え方
            </Typography>
            によって左右されます。漏れや偏りがある分だけ正解から離れた結論になってしまうため注意が必要です。
            <Typography variant="subtitle1" sx={{ color: "#1665c0" }} display="flex" alignItems="center" mt="4px">
              <CircleOutlinedIcon sx={{ mr: "4px" }} />
              情報の偏りが少ない例
            </Typography>
            <Typography variant="subtitle2" component="div" fontWeight={600} p="4px 8px" mb="8px" bgcolor="#e3f2fd">
              ・情報　：「テレビでウォーターサーバーを契約する人が増えたと紹介されていた」「友人や同僚などでミネラルウォーターを購入している人が増えた」「あるネットアンケートでは水道水を飲むことに抵抗のある人が去年より増えた」
              <br />
              ・共通点：「消費者は品質の良い水を求めるようになってきている」
              <br />
              ・結論　：「飲料水の需要は今後も伸び続けるだろう」
            </Typography>
            この例では、テレビ・身の回り・インターネットと偏りなく広い範囲の情報を揃えているため、より確実性の高い結論を導けています。
            <Typography variant="subtitle1" sx={{ color: "#c62828" }} display="flex" alignItems="center" mt="4px">
              <ClearIcon sx={{ mr: "4px" }} />
              情報に偏りがある例
            </Typography>
            <Typography variant="subtitle2" component="div" fontWeight={600} p="4px 8px" mb="8px" bgcolor="#ffebee">
              ・情報　：「友人Aはウォーターサーバーを契約した」「友人Bはよくミネラルウォーターを購入している」「友人Cは水道水は飲まないと言っていた」
              <br />
              ・共通点：「消費者は品質の良い水を求めるようになってきている」
              <br />
              ・結論　：「飲料水の需要は今後も伸び続けるだろう」
            </Typography>
            この例では、身の回りだけの偏った狭い範囲の情報から結論を導いてしまっているため、これでは確実性の高い結論とは言えません。
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Typography variant="h6" component="div" fontWeight={600} display="flex" alignItems="center">
            <LooksTwoIcon sx={{ color: "primary.dark", fontSize: "32px", mr: "4px" }} />
            共通点を見つける
          </Typography>
          <Typography variant="body1" component="div">
            このステップでは全ての情報に共通することを見つけます。ただし、情報に対して
            <Typography component="span" color="#c62828">
              抽象度が高すぎる
            </Typography>
            ことを共通点にしてしまうと、結論を間違いやすくなるため注意しましょう。
            <Typography variant="subtitle1" sx={{ color: "#1665c0" }} display="flex" alignItems="center" mt="4px">
              <CircleOutlinedIcon sx={{ mr: "4px" }} />
              正しい例
            </Typography>
            <Typography variant="subtitle2" component="div" p="4px 8px" mb="8px" bgcolor="#e3f2fd" fontWeight={600}>
              ・情報　：「レモンはビタミンCが豊富」「みかんはビタミンCが豊富」「グレープフルーツはビタミンCが豊富」
              <br />
              ・共通点：「柑橘類にはビタミンCが豊富に含まれている」
              <br />
              ・結論　：「柑橘類はすっぱい」
            </Typography>
            この例は各情報に対して抽象度が近い「柑橘類」を共通点にしています。そのため、確実性が高い結論を導くことができています。
            <Typography variant="subtitle1" sx={{ color: "#c62828" }} display="flex" alignItems="center" mt="4px">
              <ClearIcon sx={{ mr: "4px" }} />
              抽象度が高すぎる例
            </Typography>
            <Typography variant="subtitle2" component="div" p="4px 8px" mb="8px" bgcolor="#ffebee" fontWeight={600}>
              ・情報　：「レモンはビタミンCが豊富」「みかんはビタミンCが豊富」「グレープフルーツはビタミンCが豊富」
              <br />
              ・共通点：「フルーツにはビタミンCが豊富に含まれている」
              <br />
              ・結論　：「フルーツはすっぱい」
            </Typography>
            この例では柑橘類よりも抽象度の高い「フルーツ」を共通点にしてしまっているため、「フルーツはすっぱい」といった間違った結論が導かれてしまっています。
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography variant="h6" component="div" fontWeight={600} display="flex" alignItems="center">
            <Looks3Icon sx={{ color: "#004d40", fontSize: "32px", mr: "4px" }} />
            結論を導き出す
          </Typography>
          <Typography variant="body1" component="div">
            このステップでは全ての情報に共通することを見つけます。ただし、情報に対して
            <Typography component="span" color="#c62828">
              抽象度が高すぎる
            </Typography>
            ことを共通点にしてしまうと、結論を間違いやすくなるため注意しましょう。
            <Typography variant="subtitle1" sx={{ color: "#1665c0" }} display="flex" alignItems="center" mt="4px">
              <CircleOutlinedIcon sx={{ mr: "4px" }} />
              正しい例
            </Typography>
            <Typography variant="subtitle2" component="div" fontWeight={600} p="4px 8px" mb="8px" bgcolor="#e3f2fd">
              ・情報　：「レモンは酸っぱい」「みかんは酸っぱい」「グレープフルーツは酸っぱい」
              <br />
              ・共通点：「柑橘類である」
              <br />
              ・結論　：「柑橘類はすっぱい」
            </Typography>
            この例は各情報に対して抽象度が近い「柑橘類」を共通点にしています。そのため、確実性が高い結論を導くことができています。
            <Typography variant="subtitle1" sx={{ color: "#c62828" }} display="flex" alignItems="center" mt="4px">
              <ClearIcon sx={{ mr: "4px" }} />
              抽象度が高い例
            </Typography>
            <Typography variant="subtitle2" component="div" fontWeight={600} p="4px 8px" mb="8px" bgcolor="#ffebee">
              ・情報　：「レモンはすっぱい」「みかんはすっぱい」「グレープフルーツはすっぱい」
              <br />
              ・共通点：「フルーツである」
              <br />
              ・結論　：「フルーツはすっぱい」
            </Typography>
            この例では柑橘類を飛ばしてフルーツを共通点としたために、間違った結論を導いてしまっています。
          </Typography>
        </TabPanel>
      </Grid>
    </Grid>
  );
}
