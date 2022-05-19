import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

type StyleProps = {
  background?: string;
};

type Props = {
  children: React.ReactNode;
  title?: string;
  className?: string;
} & StyleProps;

const Balloon: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { className, title, background } = props;
  return (
    <SBalloon className={className} background={background}>
      {title && <Typography variant="h6">{title}</Typography>}
      <Typography>{children}</Typography>
    </SBalloon>
  );
});

export default Balloon;

const SBalloon = styled.div<StyleProps>`
  position: relative;
  background: ${(props) => props.background};
  border-radius: 15px;
  padding: 16px;
  box-shadow: 1px 3px 6px #bbb;

  &:before {
    content: "";
    position: absolute;
    left: -38px;
    width: 13px;
    height: 12px;
    bottom: 0;
    background: ${(props) => props.background};
    border-radius: 50%;
    box-shadow: 1px 3px 6px #bbb;
  }

  &:after {
    content: "";
    position: absolute;
    left: -24px;
    width: 20px;
    height: 18px;
    bottom: 3px;
    background: ${(props) => props.background};
    border-radius: 50%;
    box-shadow: 1px 3px 6px #bbb;
  }
`;

const dataset = {
  chapter: {
    chapter1: {
      title: "第1章「説明上手になるとは？」",
      text: "相手になるほどと思ってもらうこと",
      image: "../../image01.png",
      secen: {
        character_image: "../../fun01.png",
        bgm: "enjoy",
        order: 2,
        secene1: {},
      },
    },
  },
};
