import { FC, memo } from "react";
// Modules
import { Box, Typography } from "@mui/material";
import ForwardIcon from "@mui/icons-material/Forward";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

type Props = {
  headlineLeft: string;
  headlineRight: string;
  color: string;
};

const SlideListItemContentHeadline: FC<Props> = memo((props) => {
  const { headlineLeft, headlineRight, color } = props;
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb="32px">
      <TipsAndUpdatesIcon sx={{ fontSize: "48px", color: "warning.main", mr: "4px" }} />
      <Typography
        variant="h4"
        component="div"
        fontWeight={600}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {headlineLeft}
        <ForwardIcon sx={{ fontSize: "32px", m: "0 16px" }} />
        <Typography variant="h4" component="span" color={color} fontWeight={600}>
          {headlineRight}
        </Typography>
      </Typography>
    </Box>
  );
});

export default SlideListItemContentHeadline;
