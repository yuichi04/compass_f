import React from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Typography } from "@mui/material";

type Props = {
  children: string;
  section: string;
  duration: number;
  delay?: number;
};

const TextAnimation: React.FC<Props> = React.memo(({ children, ...props }) => {
  const { section, duration, delay } = props;

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
      ease: "none",
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
      component="div"
      variant="h6"
      letterSpacing={1.25}
      sx={{ wordWrap: "break-word", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
    >
      {children}
    </Typography>
  );
});

export default TextAnimation;
