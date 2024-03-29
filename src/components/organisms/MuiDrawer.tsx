import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HelpIcon from "@mui/icons-material/Help";
import HomeIcon from "@mui/icons-material/Home";
import HistoryIcon from "@mui/icons-material/History";

import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { useLogOut } from "../../hooks/useLogOut";
import { LinkTo, Avatar } from "../atoms";

type Props = {
  username: string;
  email: string;
  src?: string;
};

const MuiDrawer: React.FC<Props> = React.memo((props) => {
  const { username, email, src } = props;
  const [open, setOpen] = useState(false);
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
        <LinkTo to="/profile">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar src={src} bgcolor="primary.main" />
              </ListItemIcon>
              <ListItemText primary={username} secondary={email} />
            </ListItemButton>
          </ListItem>
        </LinkTo>
      </List>
      <Divider />
      <List>
        {[
          { to: "/", text: "ホームに戻る", icon: <HomeIcon /> },
          { to: "/lessonlist", text: "レッスンリスト", icon: <LocalLibraryIcon /> },
          { to: "/history", text: "学習レコード", icon: <HistoryIcon /> },
          { to: "/help", text: "ヘルプ", icon: <HelpIcon /> },
        ].map((data) => (
          <LinkTo key={data.text} to={data.to}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{data.icon}</ListItemIcon>
                <ListItemText primary={data.text} />
              </ListItemButton>
            </ListItem>
          </LinkTo>
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
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer} sx={{ wordBreak: "break-word" }}>
        {list()}
      </Drawer>
    </>
  );
});

export default MuiDrawer;
