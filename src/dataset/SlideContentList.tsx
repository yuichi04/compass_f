import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";
import { MuiTypographyBold, MuiTypographyBoldAccent, MuiTypographyDiv } from "../components/atoms";

const SlideContentList = () => {
  const [chapter1Contents, setChapter1Contents] = useState([
    {
      title: "伝わる説明術「超入門」編",
      sectionTitle: "ようこそ、伝わる説明術「超入門」編へ",
      sentence: (
        <Box sx={{ position: "relative" }}>
          <MuiTypographyDiv>
            本コースは以下の流れで学んでいきます。
            <br />
            <br />
            <Box component="ol" sx={{ listStyle: "revert", p: "0 32px" }}>
              <li>
                <MuiTypographyBold>スライド形式で伝わりやすい説明についての知識を学ぶ</MuiTypographyBold>
              </li>
              <li>
                <MuiTypographyBold>本編でその知識を使って問題を解く</MuiTypographyBold>
              </li>
            </Box>
            <br />
            インプットだけでなくアウトプットもして、実践で使える力を身につけていきます。
            <br />
            それでは次のスライドへ！
            <br />
            <br />
            <Typography
              variant="body2"
              component="span"
              color="text.secondary"
              sx={{ display: "flex", alignItems: "center" }}
            >
              ※先に本編をやってみたい方はスライド右上の
              <CancelIcon fontSize="small" />
              マークから本編に進めます。
            </Typography>
          </MuiTypographyDiv>
          <Box sx={{ position: "absolute", right: "-160px", top: "-160px" }}>
            <img src={require("../assets/images/characters/guide/guide_normal_b.png")} alt="character" />
          </Box>
        </Box>
      ),
      order: 0,
      className: "",
    },
    {
      title: "伝わる説明術「超」入門",
      sectionTitle: "相手に伝わりやすい説明とは？",
      sentence: (
        <MuiTypographyDiv>
          さっそくですが、相手に伝わりやすい説明をするには何が大切でしょうか？
          <br />
          それは、ズバリ、次の3つです。
          <br />
          <br />
          <Box
            component="ol"
            sx={{
              listStyle: "revert",
              color: "primary.dark",
              listStylePosition: "inside",
              p: "0 32px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              <MuiTypographyBoldAccent>自分の伝えたいことを明確にする</MuiTypographyBoldAccent>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <MuiTypographyBoldAccent>伝わりやすい順番で話を組み立てる</MuiTypographyBoldAccent>
            </li>
            <li>
              <MuiTypographyBoldAccent>相手のレベルに合わせて話す</MuiTypographyBoldAccent>
            </li>
          </Box>
          <br />
          これらのことを守りさえすれば、相手に伝わる説明ができるようになります。
          <br />
          本コースでは「自分の伝えたいことを明確にする」ことについて学んでいきます。
          <br />
          <br />
          それでは、伝えたいことを明確にするにはどうしたら良いでしょうか？次のスライドを見ていきましょう！
          <br />
          <Typography color="text.secondary">※2,3についてはそれぞれ入門編、初級編で学ぶことができます。</Typography>
        </MuiTypographyDiv>
      ),
      order: 1,
      className: "",
    },
    {
      title: "伝わる説明術「超」入門",
      sectionTitle: "結論より先に自分の考えを明確にする",
      sentence: (
        <MuiTypographyDiv>
          世の中の「わかりやすい説明の方法」などがタイトルの本では「結論から伝える」と書かれていることがほとんどです。そしてそれは事実で、結論から伝えることは効率的なコミュニケーションをする上で大切です。
          <br />
          なぜなら、最初に結論から話すことで相手に話の目的を把握してもらうことができ、話が伝わりやすくなるからです。
          <br />
          ですが、そうは言っても自分の考えがまとまっていなければ結論を言うことはできません。
          <br />
          <br />
          では、一体どうすれば自分の考えをまとめ、結論を言うことができるのでしょうか？
          <br />
          それには「論理的思考」すなわち
          <Typography variant="h6" component="span" fontWeight={600}>
            「話を筋道立てて考えること」
          </Typography>
          が必要になります。そこで、そのために役立つ2つの手法をお伝えします。
          <br />
          <br />
          それは
          <MuiTypographyBoldAccent className="text_yellow_underline">
            「帰納法
            <Typography component="span">（きのう法）</Typography>」
          </MuiTypographyBoldAccent>
          と
          <MuiTypographyBoldAccent className="text_yellow_underline">
            「演繹法
            <Typography component="span">（えんえき法）</Typography>」
          </MuiTypographyBoldAccent>
          と呼ばれる手法です。
          <br />
          <br />
          何やら難しい言葉が出てきましたがご安心ください。次のスライドで詳しく解説します！
        </MuiTypographyDiv>
      ),
      order: 2,
      className: "",
    },
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "「大きい情報から小さい情報の順で話す」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 3,
      className: "",
    },
    {
      title: "Chapter 1「説明の種類を知ろう」",
      sectionTitle: "「大きい情報から小さい情報の順で話す」",
      sentence: (
        <>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dignissimos ipsam voluptatibus laboriosam,
          aliquam quisquam, numquam sit, qui provident ducimus cumque nostrum corrupti atque at quaerat
          <span style={{ color: "blue" }}>eligendi amet</span>
          <br />
          deleniti sunt.
        </>
      ),
      order: 4,
      className: "",
    },
  ]);
  return { chapter1Contents, setChapter1Contents };
};

export default SlideContentList;
