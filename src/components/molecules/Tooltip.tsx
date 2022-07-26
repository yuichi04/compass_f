import { FC, memo } from "react";
import { Tooltip as MuiTooltip, IconButton } from "@mui/material";

type Props = {
  title: string;
  color: string;
  icon: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Tooltip: FC<Props> = memo((props) => {
  const { title, color, icon, onClick } = props;

  return (
    <MuiTooltip title={title} placement="bottom">
      <IconButton
        sx={{
          bgcolor: color,
          color: "#fff",
          borderRadius: "50%",
          p: "12px",
          mr: "16px",
          transition: "0.2s",
          "&:hover": { bgcolor: color, transform: "scale(1.1)" },
        }}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </MuiTooltip>
  );
});

export default Tooltip;
