import React from "react";
import { Box } from "@mui/material";
import { useAppSelector } from "../../../lib/redux/hooks";
import { inductionSelector } from "../../../lib/redux/features/inductionSlice";
import { CallEffect } from "../../atoms";

const InductionCharacterImage: React.FC = React.memo(() => {
  const induction = useAppSelector(inductionSelector);
  const character = induction.characterInfo;

  return (
    <>
      {character?.role === "guide" && (
        <Box
          component="img"
          className="fade-in"
          sx={{ width: "50vw", opacity: 0 }}
          src={require(`../../../assets/images/characters/${character.src}`)}
          alt="guide"
        />
      )}
      {character?.role === "customer" && (
        <Box
          component="img"
          className="fade-in"
          sx={{ minHeight: "200%", opacity: 0 }}
          src={require(`../../../assets/images/characters/${character.src}`)}
          alt="customer"
        />
      )}
      {character?.role === "boy" && (
        <Box
          component="img"
          className="fade-in"
          sx={{ minHeight: "200%", opacity: 0 }}
          src={require(`../../../assets/images/characters/${character.src}`)}
          alt="boy"
        />
      )}
      {character?.role === "call" && (
        <Box position="absolute" bottom="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
          <CallEffect />
        </Box>
      )}
    </>
  );
});

export default InductionCharacterImage;
