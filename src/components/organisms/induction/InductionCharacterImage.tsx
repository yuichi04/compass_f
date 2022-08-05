import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../../redux/hooks";
import { inductionSelector } from "../../../redux/features/inductionSlice";
import { CallEffect, TalkEffect } from "../../atoms";
import { FadeInOutBox } from "../../molecules";

const InductionCharacterImage: React.FC = React.memo(() => {
  const induction = useAppSelector(inductionSelector);
  const character = induction.characterInfo;

  return (
    <>
      {character?.role === "guide" && (
        <FadeInOutBox fadeIn>
          <Box component="img" sx={{ width: "50vw" }} src={character.src} alt="guide" />
        </FadeInOutBox>
      )}
      {character?.role === "boy" && (
        <FadeInOutBox fadeIn>
          <Box component="img" sx={{ width: "35vw" }} src={character.src} alt="boy" />
        </FadeInOutBox>
      )}
      {character?.role === "user" && (
        <FadeInOutBox fadeIn position="absolute" b="50%" l="50%" center>
          <TalkEffect />
        </FadeInOutBox>
      )}
      {character?.role === "call" && (
        <FadeInOutBox fadeIn position="absolute" b="50%" l="50%" center>
          <CallEffect />
        </FadeInOutBox>
      )}
    </>
  );
});

export default InductionCharacterImage;
