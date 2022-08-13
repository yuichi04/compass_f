import React from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Typography } from "@mui/material";

type Props = {
  text: string;
  section: string;
  color?: string;
  duration: number;
  delay?: number;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit";
};

const TextAnimation: React.FC<Props> = React.memo((props) => {
  const { section, duration, delay, text, variant, color } = props;

  const setAnimation = (text: string) => {
    const numText = text.length;
    const selector = "#" + section;

    gsap.registerPlugin(TextPlugin);
    gsap.to(`${selector} .animation-text`, {
      duration: numText * duration,
      delay: delay,
      text: {
        value: text,
      },
      ease: "linear",
    });
  };

  const textRef = (node: any) => {
    if (node !== null) {
      const text = node.innerHTML; //テキストを読み込む
      node.innerHTML = ""; //テキストを削除する
      setAnimation(text);
    }
  };

  return (
    <Typography
      ref={textRef}
      className="animation-text"
      color={color}
      component="div"
      // fontWeight={300}
      fontFamily={"'Noto Sans JP', sans-serif"}
      variant={variant ? variant : "h6"}
      letterSpacing={1.25}
      sx={{ wordWrap: "break-word", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
    >
      {text}
    </Typography>
  );
});

export default TextAnimation;
