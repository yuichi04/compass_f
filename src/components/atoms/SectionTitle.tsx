import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
  color?: string;
};

const SectionTitle: React.FC<Props> = React.memo(({ title, ...props }) => {
  return (
    <Typography variant="h6" component="h3" fontWeight={600} {...props}>
      {title}
    </Typography>
  );
});

export default SectionTitle;
