import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CancelIcon from "@mui/icons-material/Cancel";

const SlideContentList = () => {
  const [chapter1Contents, setChapter1Contents] = useState([
    {
      title: "伝わる説明術「超」入門",
      sectionTitle: "ようこそ、伝わる説明術「超」入門編へ",
      sentence: (
        <Typography variant="h6" component="div" color="text.secondary">
          本コースは以下の流れで学んでいきます。
          <br />
          <br />
          <Box component="ol" sx={{ listStyle: "revert", padding: "0 64px", fontWeight: 600 }}>
            <li>スライドで「伝わる説明術」についての知識をインプット</li>
            <li>本編でその知識をアウトプット</li>
          </Box>
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
        </Typography>
      ),
      order: 0,
      className: "",
    },
    {
      title: "伝わる説明術「超」入門",
      sectionTitle: "相手に伝わりやすい説明とは？",
      sentence: (
        <Typography variant="h6" component="div" color="text.secondary">
          さっそくですが、相手に伝わりやすい説明をするには何が大切でしょうか？
          <br />
          それは、ズバリ、次の3つです。
          <br />
          <br />
          <Box component="ol" sx={{ listStyle: "revert", color: "primary.main", listStylePosition: "inside" }}>
            <Typography variant="h5" component="li" fontWeight={600} sx={{ mb: "8px" }}>
              自分の伝えたいことを明確にする
            </Typography>
            <Typography variant="h5" component="li" fontWeight={600} sx={{ mb: "8px" }}>
              伝わりやすい順番で話を組み立てる
            </Typography>
            <Typography variant="h5" component="li" fontWeight={600}>
              相手のレベルに合わせて話す
            </Typography>
          </Box>
          <br />
          これらのことを守りさえすれば、必ず相手に伝わる説明ができるようになります。
          <br />
          そして本コースでは「伝えたいことを明確にする」ことについて学んでいきます。
          <br />
          <Typography>※2,3についてはそれぞれ入門編、初級編で学ぶことができます。</Typography>
          <br />
          それでは、伝えたいことを明確にするにはどうしたら良いでしょうか？次のスライドを見ていきましょう！
        </Typography>
      ),
      order: 1,
      className: "",
    },
    {
      title: "伝わる説明術「超」入門",
      sectionTitle: "結論より先に自分の考えを明確にする",
      sentence: (
        <Typography variant="h6" component="div" color="text.secondary">
          世の中の「わかりやすい説明の方法」がタイトルの本では「結論から伝える」と書かれていることがほとんどです。そしてそれは事実で、結論から伝えることは効率的なコミュニケーションをする上で大切です。
          <br />
          なぜなら、最初に結論から話すことで相手に話の目的を把握してもらうことができ、話が伝わりやすくなるからです。
          <br />
          しかしながら、そうは言っても自分の考えがまとまっていなければ結論を言うことはできません。
          <br />
          <br />
          では、一体どうすれば自分の考えをまとめ、結論を言うことができるのでしょうか？
          <br />
          それには「論理的思考」すなわち
          <Typography variant="h6" component="span" fontWeight={600}>
            「話を筋道立てて考えること」
          </Typography>
          が必要になります。
          <br />
          そこで、話を筋道立てて考えるのに役立つ手法を2つお伝えします。
          <br />
          <br />
          それは
          <Typography
            className="text_yellow_underline"
            variant="h5"
            component="span"
            color="primary.dark"
            fontWeight={600}
          >
            「帰納法
            <Typography component="span" variant="body2">
              （きのう法）
            </Typography>
            」
          </Typography>
          と
          <Typography
            className="text_yellow_underline"
            variant="h5"
            component="span"
            color="primary.dark"
            fontWeight={600}
          >
            「演繹法
            <Typography variant="body2" component="span">
              （えんえき法）
            </Typography>
            」
          </Typography>
          と呼ばれる手法です。
          <br />
          <br />
          何やら難しい言葉が出てきましたがご安心ください。次のスライドで詳しく解説します！
        </Typography>
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
