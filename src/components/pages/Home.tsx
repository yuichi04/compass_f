import React from "react";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { MuiContainer } from "../layouts";
import { IconWithPageTitle } from "../molecules";
import Grid from "@mui/material/Grid";

const Main: React.FC = React.memo(() => {
  return (
    <MuiContainer maxWidth="md">
      <IconWithPageTitle title="ようこそ、COMPASSへ" icon={LocalLibraryIcon} />
      <Grid container>
        <Grid item xs={12}></Grid>
      </Grid>
    </MuiContainer>
  );
});

export default Main;
