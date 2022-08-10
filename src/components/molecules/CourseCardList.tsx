import { FC, memo } from "react";
import { Box } from "@mui/material";
import { CourseCard, ScrollAnimationBox } from "../molecules";
import Comunicate from "../../assets/images/illustrations/comunicate.svg";
import Inductive from "../../assets/images/illustrations/inductive.svg";
import Deductive from "../../assets/images/illustrations/deductive.svg";

type Props = {
  enableLinks?: boolean;
};

type courseCardType = {
  color: string;
  grade: "basic" | "advanced";
  image: string;
  link: string;
  title: string;
  text: React.ReactNode;
};

const courseCardList: courseCardType[] = [
  {
    color: "success.main",
    grade: "basic",
    image: Inductive,
    link: "lesson/induction",
    title: "帰納法",
    text: <>複数の情報から共通点を探し出し結論を導き出します</>,
  },
  {
    color: "info.main",
    grade: "basic",
    image: Deductive,
    link: "",
    title: "演繹法",
    text: (
      <>
        ※近日リリース予定
        <br />
        法則や事実などに自分の考えを当てはめて結論を導き出します
      </>
    ),
  },
  {
    color: "warning.main",
    grade: "advanced",
    image: Comunicate,
    link: "",
    title: "伝わる話の組み立て方",
    text: (
      <>
        ※近日リリース予定
        <br />
        相手に納得してもらいやすい説明ができるようになります
      </>
    ),
  },
];

const CourseCardList: FC<Props> = memo((props) => {
  const { enableLinks } = props;

  return (
    <Box display="flex" justifyContent="space-between" m="0 auto">
      {courseCardList.map((card, index) => (
        <ScrollAnimationBox key={index} delay={index / 2} duration={1} triggerOnce>
          <CourseCard
            grade={card.grade}
            color={card.color}
            image={card.image}
            link={enableLinks ? card.link : ""}
            text={card.text}
            title={card.title}
          />
        </ScrollAnimationBox>
      ))}
    </Box>
  );
});

export default CourseCardList;
