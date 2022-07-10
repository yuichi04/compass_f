import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../lib/redux/hooks";
import { chapter1Selector } from "../../lib/redux/features/chapter1Slice";

const Chapter1Character: React.FC = React.memo(() => {
  const chapter1 = useAppSelector(chapter1Selector);
  const isShow = chapter1.isShowCharacter;
  const character = chapter1.characterImage;

  return (
    <>
      {isShow &&
        (character.role === "user" ? (
          <Box className="fade_in" width="700px" textAlign="center" pt="30%" sx={{ opacity: 0 }}>
            <Box
              component="img"
              className="scale_up-down"
              sx={{
                width: "240px",
                background: "#fff",
                borderRadius: "100%",
                padding: "32px",
              }}
              src={require(`../../assets/images/characters/${character.src}`)}
              alt="user"
            />
          </Box>
        ) : character.role === "guide" ? (
          <Box
            component="img"
            className="fade_in"
            sx={{ width: "50vw", opacity: 0 }}
            src={require(`../../assets/images/characters/${character.src}`)}
            alt="guide"
          />
        ) : character.role === "customer" ? (
          <Box
            component="img"
            className="fade_in"
            sx={{ minHeight: "200%", opacity: 0 }}
            src={require(`../../assets/images/characters/${character.src}`)}
            alt="customer"
          />
        ) : (
          character.role === "boy" && (
            <Box
              component="img"
              className="fade_in"
              sx={{ minHeight: "200%", opacity: 0 }}
              src={require(`../../assets/images/characters/${character.src}`)}
              alt="boy"
            />
          )
        ))}
    </>
  );
});

export default Chapter1Character;
