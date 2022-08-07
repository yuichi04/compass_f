import { FC, memo } from "react";
import { useInView } from "react-intersection-observer";
import { Box } from "@mui/material";
import { CourseCard, FadeInOutBox } from "../molecules";
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
        ※実装予定
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
        ※実装予定
        <br />
        相手に納得してもらいやすい説明ができるようになります
      </>
    ),
  },
];

const CourseCardList: FC<Props> = memo((props) => {
  const { enableLinks } = props;
  const [ref, inView] = useInView({
    rootMargin: "-100px 0px",
    // triggerOnce: true,
  });

  return (
    <Box ref={ref} display="flex" justifyContent="space-between" m="0 auto">
      {courseCardList.map((card, index) => (
        <FadeInOutBox fadeIn={inView} key={index} delay={index / 2}>
          <CourseCard
            grade={card.grade}
            color={card.color}
            image={card.image}
            link={enableLinks ? card.link : ""}
            text={card.text}
            title={card.title}
          />
        </FadeInOutBox>
      ))}
    </Box>
  );
});

export default CourseCardList;
