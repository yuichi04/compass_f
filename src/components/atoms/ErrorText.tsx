import React from "react";
import Typography from "@mui/material/Typography";

type Props = { text: string };

const ErrorText: React.FC<Props> = React.memo((props) => {
  const { text } = props;
  return (
    <Typography color="error" variant="body1" component="p" sx={{ textAlign: "center" }}>
      ※{text}
    </Typography>
  );
});

export default ErrorText;
