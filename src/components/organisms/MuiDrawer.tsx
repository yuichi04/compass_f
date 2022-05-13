import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import QuizIcon from "@mui/icons-material/Quiz";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import { useLogOut } from "../../hooks/useLogOut";
import { LinkTo, MuiAvatar } from "../atoms";

type Props = {
  username: string;
  email: string;
};

const MuiDrawer: React.FC<Props> = React.memo((props) => {
  const { username, email } = props;
  const [open, setOpen] = React.useState(false);
  const { handleClick } = useLogOut();

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const list = () => (
    <Box role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer} sx={{ width: "320px" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MuiAvatar />
            </ListItemIcon>
            <ListItemText primary={username} secondary={email} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {[
          { to: "/quizeindex", text: "クイズ一覧", icon: <QuizIcon /> },
          { to: "/memo", text: "作成したメモ", icon: <AutoAwesomeMotionIcon /> },
          { to: "/help", text: "ヘルプ", icon: <HelpIcon /> },
          { to: "/contactus", text: "お問い合わせ", icon: <MailIcon /> },
        ].map((data) => (
          <ListItem key={data.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{data.icon}</ListItemIcon>
              <LinkTo to={data.to}>
                <ListItemText primary={data.text} />
              </LinkTo>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="ログアウト" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton aria-label="menus" onClick={toggleDrawer} sx={{ color: "#fff" }}>
        <MenuOpenIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer} sx={{ wordBreak: "break-word" }}>
        {list()}
      </Drawer>
    </>
  );
});

export default MuiDrawer;
