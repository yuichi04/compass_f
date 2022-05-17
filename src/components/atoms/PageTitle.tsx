import React from "react";
import Typography from "@mui/material/Typography";

type Props = {
  title: string;
};

const PageTitle: React.FC<Props> = React.memo((props) => {
  const { title } = props;
  return (
    <Typography variant="h4" component="h1" fontWeight={600}>
      {title}
    </Typography>
  );
});

export default PageTitle;
