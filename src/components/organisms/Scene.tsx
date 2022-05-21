import React from "react";
import { Grid, Box } from "@mui/material";
import { BackgroundImage } from "../../assets/images/background";
import { Balloon } from "../atoms";
import { TooltipBar } from "./index";

const styles = {
  character: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
  },
  container: {
    position: "relative",
    height: "calc(100vh - 60px)",
    background: `url(${BackgroundImage.dayoffice}) no-repeat center`,
    backgroundSize: "cover",
  },
};

type Props = {
  setOpen: (open: boolean) => void;
};

const Scene: React.FC<Props> = React.memo((props) => {
  const characterImage = "guide_smile_a.png";
  const { setOpen } = props;
  // test

  return (
    <>
      <Grid container sx={styles.container}>
        <Grid item xs={3} sx={{ position: "relative" }}>
          <TooltipBar setOpen={setOpen} />
        </Grid>
        <Grid item xs={6} sx={{ zIndex: 1, position: "relative" }}>
          <Box
            sx={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", width: "80%" }}
          ></Box>
          {/* Options */}
        </Grid>
        <Grid item xs={3} sx={{ position: "relative", zIndex: 10 }}>
          <Box sx={{ position: "absolute", left: "-50%", padding: "16px 16px 0 0" }}>
            {/* {text && (
              <Balloon className={word ? "fade_in" : "fade_out"} background="#e0edff">
                {text}
              </Balloon>
            )} */}
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.character}>
        <img
          className="character-move-normal"
          src={require(`../../assets/images/characters/guide/${characterImage}`)}
          alt="character"
        />
      </Box>
    </>
  );
});

export default Scene;
